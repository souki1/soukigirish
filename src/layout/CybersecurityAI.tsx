import { useState, useEffect, useRef } from "react"
import { Check, AlertTriangle, Shield, Wrench, Scan, Lock } from "lucide-react"

const ERROR_LABELS = [
  "404",
  "SQLi",
  "XSS",
  "Auth",
  "CORS",
  "CSRF",
  "DDoS",
  "SSL",
  "Buffer",
  "Rate",
]

const AGENTS = [
  { name: "Validator", icon: Shield, color: "cyan" },
  { name: "Patcher", icon: Wrench, color: "emerald" },
  { name: "Scanner", icon: Scan, color: "violet" },
  { name: "Guard", icon: Lock, color: "amber" },
]

type ErrorState = "flying" | "hit" | "gone"
type AgentStatus = "idle" | "fixing" | "fixed"

interface ThrownError {
  id: number
  label: string
  state: ErrorState
  yOffset: number
  agentIndex: number
}

interface AgentState {
  status: AgentStatus
  currentLabel: string | null
  fixedCount: number
}

const FLY_DURATION_MS = 2200
const HIT_AT_MS = 1400

export default function CybersecurityAI() {
  const [errors, setErrors] = useState<ThrownError[]>([])
  const [threatScore, setThreatScore] = useState(0)
  const [agents, setAgents] = useState<AgentState[]>(
    AGENTS.map(() => ({ status: "idle", currentLabel: null, fixedCount: 0 })),
  )
  const nextIdRef = useRef(0)
  const agentRoundRobin = useRef(0)

  const throwError = () => {
    const label = ERROR_LABELS[Math.floor(Math.random() * ERROR_LABELS.length)]
    const id = nextIdRef.current
    nextIdRef.current += 1
    const agentIndex = agentRoundRobin.current % AGENTS.length
    agentRoundRobin.current += 1

    setThreatScore((s) => s + 1)
    setErrors((prev) => [
      ...prev,
      {
        id,
        label,
        state: "flying",
        yOffset: (Math.random() - 0.5) * 180,
        agentIndex,
      },
    ])

    setTimeout(() => {
      setErrors((prev) =>
        prev.map((e) => (e.id === id ? { ...e, state: "hit" } : e)),
      )
      setAgents((prev) =>
        prev.map((a, i) =>
          i === agentIndex
            ? { ...a, status: "fixing", currentLabel: label }
            : a,
        ),
      )
    }, HIT_AT_MS)

    setTimeout(() => {
      setAgents((prev) =>
        prev.map((a, i) =>
          i === agentIndex
            ? { ...a, status: "fixed", currentLabel: label }
            : a,
        ),
      )
    }, HIT_AT_MS + 200)

    setTimeout(() => {
      setAgents((prev) =>
        prev.map((a, i) =>
          i === agentIndex
            ? {
                ...a,
                status: "idle",
                currentLabel: null,
                fixedCount: a.fixedCount + 1,
              }
            : a,
        ),
      )
    }, HIT_AT_MS + 800)

    setTimeout(() => {
      setErrors((prev) => prev.filter((e) => e.id !== id))
    }, FLY_DURATION_MS + 300)
  }

  useEffect(() => {
    throwError()
    throwError()
    const t = setInterval(() => {
      throwError()
      throwError()
    }, 1600)
    return () => clearInterval(t)
  }, [])

  const totalFixed = agents.reduce((s, a) => s + a.fixedCount, 0)

  return (
    <section
      id="cyber"
      className="min-h-screen flex flex-col bg-[#0a0a0b] border-t border-zinc-800/50"
    >
      {/* Full-page header */}
      <div className="px-6 pt-12 pb-6 flex-shrink-0">
        <p className="font-mono text-[var(--accent)] text-sm tracking-widest uppercase mb-2">
          Cybersecurity & AI
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-white mb-3">
          Threats vs AI agents.
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-8">
          3–4 issues at a time. 4 AI agents working in parallel to fix them.
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/40">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="font-mono text-xs text-red-400/80">Threats thrown</p>
              <p className="font-heading font-bold text-2xl text-white tabular-nums">
                {threatScore}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center border border-[var(--accent)]/40">
              <Check className="w-5 h-5 text-[var(--accent)]" />
            </div>
            <div>
              <p className="font-mono text-xs text-[var(--accent)]/80">
                AI fixed
              </p>
              <p className="font-heading font-bold text-2xl text-white tabular-nums">
                {totalFixed}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-page arena */}
      <div className="flex-1 relative rounded-t-3xl border-t-2 border-x-2 border-zinc-800 bg-[#0d0d0f] overflow-hidden min-h-[420px] mx-4 md:mx-6">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239,68,68,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239,68,68,0.12) 1px, transparent 1px),
              linear-gradient(rgba(34,211,238,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 flex h-full min-h-[380px]">
          {/* Left: Threats zone */}
          <div className="w-[28%] md:w-[30%] flex flex-col items-center justify-center border-r border-zinc-800 bg-red-950/20 p-4">
            <p className="font-mono text-xs text-red-400/70 uppercase tracking-widest mb-4">
              Issues thrown
            </p>
            <p className="text-red-400/50 text-center text-sm max-w-[140px]">
              3–4 at a time
            </p>
          </div>

          {/* Center: Flying errors + VS */}
          <div className="flex-1 relative flex items-center justify-center border-r border-zinc-800">
            <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
              <span className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-zinc-700/80 select-none">
                VS
              </span>
            </div>
            <div className="absolute inset-0 pt-16 pb-24 overflow-hidden">
              {errors.map((e) => (
                <div
                  key={e.id}
                  className="absolute left-4 md:left-8 flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm font-bold border-2 shadow-xl"
                  style={{
                    top: `calc(50% + ${e.yOffset}px)`,
                    marginTop: "-1.25rem",
                    animation: `error-fly ${FLY_DURATION_MS}ms linear forwards`,
                    backgroundColor:
                      e.state === "hit"
                        ? "rgba(16, 185, 129, 0.35)"
                        : "rgba(239, 68, 68, 0.35)",
                    borderColor:
                      e.state === "hit"
                        ? "rgba(16, 185, 129, 0.8)"
                        : "rgba(239, 68, 68, 0.8)",
                    color: e.state === "hit" ? "#34d399" : "#f87171",
                  }}
                >
                  {e.state === "hit" ? (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                  )}
                  <span className={e.state === "hit" ? "line-through" : ""}>
                    {e.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 4 AI agents */}
          <div className="w-[42%] md:w-[38%] flex flex-col justify-center gap-3 p-4 bg-cyan-950/10">
            <p className="font-mono text-xs text-[var(--accent)]/70 uppercase tracking-widest mb-2 text-center">
              4 AI agents
            </p>
            {AGENTS.map((agent, i) => {
              const state = agents[i]
              const Icon = agent.icon
              return (
                <div
                  key={agent.name}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-300
                    ${
                      state.status === "fixing"
                        ? "bg-[var(--accent)]/15 border-[var(--accent)]/50 shadow-lg shadow-[var(--accent)]/10"
                        : state.status === "fixed"
                          ? "bg-emerald-500/15 border-emerald-500/40"
                          : "bg-zinc-900/60 border-zinc-700"
                    }
                  `}
                >
                  <div
                    className={`
                      w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                      ${
                        state.status === "fixing"
                          ? "bg-[var(--accent)]/25"
                          : state.status === "fixed"
                            ? "bg-emerald-500/25"
                            : "bg-zinc-800"
                      }
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        state.status === "fixing"
                          ? "text-[var(--accent)]"
                          : state.status === "fixed"
                            ? "text-emerald-400"
                            : "text-zinc-500"
                      }`}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading font-bold text-sm text-white truncate">
                      {agent.name}
                    </p>
                    <p className="font-mono text-xs truncate">
                      {state.status === "idle" && (
                        <span className="text-zinc-500">Idle</span>
                      )}
                      {state.status === "fixing" && (
                        <span className="text-[var(--accent)]">
                          Fixing {state.currentLabel}...
                        </span>
                      )}
                      {state.status === "fixed" && (
                        <span className="text-emerald-400">
                          Fixed {state.currentLabel} ✓
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums shrink-0">
                    {state.fixedCount}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <p className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-zinc-500 z-20">
          Multiple issues in flight · Agents fix in parallel
        </p>
      </div>

      <style>{`
        @keyframes error-fly {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          60% {
            transform: translateX(calc(18vw + 80px));
            opacity: 1;
          }
          68% {
            opacity: 0.95;
          }
          100% {
            transform: translateX(calc(20vw + 100px));
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
