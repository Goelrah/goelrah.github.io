import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// A glowing animated pathway that winds through space
function PathwayLine() {
  const lineRef = useRef()
  const particlesRef = useRef()
  const particleCount = 40

  // Create a winding S-curve path
  const { curve, points } = useMemo(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, 3, 0),
      new THREE.Vector3(-2, 2, 1),
      new THREE.Vector3(0, 1, -0.5),
      new THREE.Vector3(2, 0, 1),
      new THREE.Vector3(3, -1, -0.5),
      new THREE.Vector3(1, -2, 0.5),
      new THREE.Vector3(-1, -3, 0),
    ])
    const pts = c.getPoints(100)
    return { curve: c, points: pts }
  }, [])

  // Flatten points for the line geometry
  const linePositions = useMemo(() => {
    const pos = new Float32Array(points.length * 3)
    points.forEach((p, i) => {
      pos[i * 3] = p.x
      pos[i * 3 + 1] = p.y
      pos[i * 3 + 2] = p.z
    })
    return pos
  }, [points])

  // Milestone nodes along the path (6 career stops)
  const milestones = useMemo(() => {
    return [0.0, 0.15, 0.35, 0.55, 0.75, 0.95].map(t => {
      const point = curve.getPoint(t)
      return point
    })
  }, [curve])

  // Traveling particles
  const particlePositions = useMemo(() => new Float32Array(particleCount * 3), [])
  const particleSpeeds = useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      t: Math.random(),
      speed: 0.02 + Math.random() * 0.04,
    }))
  }, [])

  useFrame(() => {
    // Animate particles along the path
    particleSpeeds.forEach((p, i) => {
      p.t += p.speed * 0.016
      if (p.t > 1) p.t = 0

      const point = curve.getPoint(p.t)
      particlePositions[i * 3] = point.x + (Math.random() - 0.5) * 0.1
      particlePositions[i * 3 + 1] = point.y + (Math.random() - 0.5) * 0.1
      particlePositions[i * 3 + 2] = point.z + (Math.random() - 0.5) * 0.1
    })

    if (particlesRef.current) {
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Main glowing path line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </line>

      {/* Second line for glow effect */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          linewidth={2}
        />
      </line>

      {/* Milestone nodes — glowing spheres */}
      {milestones.map((pos, i) => (
        <MilestoneNode key={i} position={[pos.x, pos.y, pos.z]} index={i} />
      ))}

      {/* Traveling data particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#06b6d4"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function MilestoneNode({ position, index }) {
  const meshRef = useRef()
  const colors = ['#f59e0b', '#10b981', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899']

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.15)
    }
  })

  return (
    <group position={position}>
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshBasicMaterial
          color={colors[index]}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Inner core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial
          color={colors[index]}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

export default function CareerPath3D() {
  return (
    <div className="w-full h-[300px] lg:h-[400px] relative">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <PathwayLine />
      </Canvas>
      {/* Gradient fade at edges */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-surface-950 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />
    </div>
  )
}
