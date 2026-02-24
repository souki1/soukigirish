import { useEffect, useRef } from "react"
import * as THREE from "three"

const ACCENT = 0x22d3ee   // AI / defense (cyan)
const THREAT = 0xef4444   // threats (red)
const COUNT_DEFENSE = 600
const COUNT_THREAT = 280

export default function HeroThreeBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    )
    camera.position.set(0, 0, 12)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // --- Central AI core (defended) ---
    const orbGeo = new THREE.SphereGeometry(1.0, 32, 32)
    const orbMat = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.4,
    })
    const orb = new THREE.Mesh(orbGeo, orbMat)
    scene.add(orb)

    // --- Cyber shield: hexagon / ring (defense barrier) ---
    const shieldGeo = new THREE.TorusGeometry(2.2, 0.07, 8, 60)
    const shieldMat = new THREE.MeshBasicMaterial({
      color: ACCENT,
      transparent: true,
      opacity: 0.55,
      wireframe: true,
    })
    const shield = new THREE.Mesh(shieldGeo, shieldMat)
    scene.add(shield)

    // --- Defense particles (cyan): orbit / protect the core ---
    const defPos = new Float32Array(COUNT_DEFENSE * 3)
    for (let i = 0; i < COUNT_DEFENSE * 3; i += 3) {
      const r = 2.5 + Math.random() * 6
      const t = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 10
      defPos[i] = Math.cos(t) * r
      defPos[i + 1] = y
      defPos[i + 2] = Math.sin(t) * r
    }
    const defGeo = new THREE.BufferGeometry()
    defGeo.setAttribute("position", new THREE.BufferAttribute(defPos, 3))
    const defMat = new THREE.PointsMaterial({
      color: ACCENT,
      size: 0.06,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })
    const defensePoints = new THREE.Points(defGeo, defMat)
    scene.add(defensePoints)

    // --- Threat particles (red): move toward center (attacking) ---
    const threatPos = new Float32Array(COUNT_THREAT * 3)
    const threatSpeed: number[] = []
    for (let i = 0; i < COUNT_THREAT * 3; i += 3) {
      const r = 4 + Math.random() * 8
      const t = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 8
      threatPos[i] = Math.cos(t) * r
      threatPos[i + 1] = y
      threatPos[i + 2] = Math.sin(t) * r
      threatSpeed.push(0.015 + Math.random() * 0.02)
    }
    const threatGeo = new THREE.BufferGeometry()
    threatGeo.setAttribute("position", new THREE.BufferAttribute(threatPos, 3))
    const threatMat = new THREE.PointsMaterial({
      color: THREAT,
      size: 0.1,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    })
    const threatPoints = new THREE.Points(threatGeo, threatMat)
    scene.add(threatPoints)

    // --- Small "threat" cubes (red) drifting toward center ---
    const cubeGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const threatCubes: THREE.Mesh[] = []
    for (let i = 0; i < 18; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: THREAT,
        transparent: true,
        opacity: 0.5,
      })
      const cube = new THREE.Mesh(cubeGeo, mat)
      const r = 5 + Math.random() * 5
      const t = Math.random() * Math.PI * 2
      cube.position.set(Math.cos(t) * r, (Math.random() - 0.5) * 6, Math.sin(t) * r)
      scene.add(cube)
      threatCubes.push(cube)
    }

    // --- Small "defense" cubes (cyan) around core ---
    const defCubes: THREE.Mesh[] = []
    for (let i = 0; i < 12; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: ACCENT,
        transparent: true,
        opacity: 0.45,
      })
      const cube = new THREE.Mesh(cubeGeo, mat)
      const r = 1.8 + Math.random() * 1.2
      const t = (i / 12) * Math.PI * 2 + Math.random()
      cube.position.set(Math.cos(t) * r, (Math.random() - 0.5) * 1.5, Math.sin(t) * r)
      cube.scale.setScalar(0.5 + Math.random() * 0.5)
      scene.add(cube)
      defCubes.push(cube)
    }

    const mouse = new THREE.Vector2(0, 0)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    const handleResize = () => {
      if (!container) return
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    let frameId: number
    let time = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.014

      // AI core pulse
      const pulse = 1 + Math.sin(time) * 0.1
      orb.scale.setScalar(pulse)

      // Shield: rotate (cyber barrier)
      shield.rotation.x += 0.003
      shield.rotation.y += 0.002
      shield.rotation.z += 0.0015

      // Defense particles: orbit slowly (protecting)
      defensePoints.rotation.y += 0.0012
      const defAttr = defGeo.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < COUNT_DEFENSE; i++) {
        const ix = i * 3
        const x = defAttr.array[ix]
        const z = defAttr.array[ix + 2]
        const angle = Math.atan2(z, x) + 0.004
        const r = Math.sqrt(x * x + z * z)
        defAttr.array[ix] = Math.cos(angle) * r
        defAttr.array[ix + 2] = Math.sin(angle) * r
      }
      defAttr.needsUpdate = true

      // Threat particles: move toward center (attack), "bounce" at shield radius
      const threatAttr = threatGeo.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < COUNT_THREAT; i++) {
        const ix = i * 3
        const x = threatAttr.array[ix]
        const y = threatAttr.array[ix + 1]
        const z = threatAttr.array[ix + 2]
        const dist = Math.sqrt(x * x + y * y + z * z)
        const speed = threatSpeed[i]
        if (dist > 2.5) {
          const nx = x - (x / dist) * speed
          const ny = y - (y / dist) * speed
          const nz = z - (z / dist) * speed
          threatAttr.array[ix] = nx
          threatAttr.array[ix + 1] = ny
          threatAttr.array[ix + 2] = nz
        } else {
          // Bounce back (blocked by shield)
          const r = 4 + Math.random() * 6
          const t = Math.random() * Math.PI * 2
          threatAttr.array[ix] = Math.cos(t) * r
          threatAttr.array[ix + 1] = (Math.random() - 0.5) * 6
          threatAttr.array[ix + 2] = Math.sin(t) * r
        }
      }
      threatAttr.needsUpdate = true

      // Threat cubes: drift toward center, reset when "blocked"
      threatCubes.forEach((cube) => {
        const dx = -cube.position.x * 0.008
        const dy = -cube.position.y * 0.008
        const dz = -cube.position.z * 0.008
        cube.position.x += dx
        cube.position.y += dy
        cube.position.z += dz
        cube.rotation.x += 0.01
        cube.rotation.y += 0.012
        const d = cube.position.length()
        if (d < 2.8) {
          const r = 5 + Math.random() * 5
          const t = Math.random() * Math.PI * 2
          cube.position.set(Math.cos(t) * r, (Math.random() - 0.5) * 6, Math.sin(t) * r)
        }
      })

      // Defense cubes: orbit core
      defCubes.forEach((cube, i) => {
        const angle = time * 0.5 + (i / 12) * Math.PI * 2
        const r = 2
        cube.position.x = Math.cos(angle) * r
        cube.position.z = Math.sin(angle) * r
        cube.rotation.x += 0.008
        cube.rotation.y += 0.01
      })

      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.03
      camera.position.y += (-mouse.y * 1.2 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    handleResize()
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      container.removeChild(renderer.domElement)
      orbGeo.dispose()
      orbMat.dispose()
      shieldGeo.dispose()
      shieldMat.dispose()
      defGeo.dispose()
      defMat.dispose()
      threatGeo.dispose()
      threatMat.dispose()
      cubeGeo.dispose()
      ;[...threatCubes, ...defCubes].forEach((c) => (c.material as THREE.Material).dispose())
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-90"
    />
  )
}
