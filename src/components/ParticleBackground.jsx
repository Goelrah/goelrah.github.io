import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Neural network node positions — arranged in layers like a real neural net
function generateNetwork() {
  const nodes = []
  const edges = []
  const layers = [5, 8, 10, 8, 5] // nodes per layer
  const layerSpacing = 2.5
  const startX = -(layers.length - 1) * layerSpacing / 2

  let nodeIndex = 0
  const layerIndices = []

  layers.forEach((count, layerIdx) => {
    const x = startX + layerIdx * layerSpacing
    const startIdx = nodeIndex
    const indices = []

    for (let i = 0; i < count; i++) {
      const y = (i - (count - 1) / 2) * 1.2
      const z = (Math.random() - 0.5) * 2
      nodes.push([x, y, z])
      indices.push(nodeIndex)
      nodeIndex++
    }

    layerIndices.push(indices)

    // Connect to previous layer (not all — sparse connections)
    if (layerIdx > 0) {
      const prevIndices = layerIndices[layerIdx - 1]
      indices.forEach((idx) => {
        // Connect to 2-4 random nodes in previous layer
        const connectionCount = 2 + Math.floor(Math.random() * 3)
        const shuffled = [...prevIndices].sort(() => Math.random() - 0.5)
        for (let c = 0; c < Math.min(connectionCount, shuffled.length); c++) {
          edges.push([shuffled[c], idx])
        }
      })
    }
  })

  return { nodes, edges }
}

function NeuralNetwork() {
  const groupRef = useRef()
  const pulseRef = useRef(0)

  const { nodes, edges } = useMemo(() => generateNetwork(), [])

  // Node positions as buffer
  const nodePositions = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3)
    nodes.forEach((n, i) => {
      pos[i * 3] = n[0]
      pos[i * 3 + 1] = n[1]
      pos[i * 3 + 2] = n[2]
    })
    return pos
  }, [nodes])

  // Edge geometry (lines)
  const edgePositions = useMemo(() => {
    const pos = new Float32Array(edges.length * 6)
    edges.forEach((e, i) => {
      const [a, b] = e
      pos[i * 6] = nodes[a][0]
      pos[i * 6 + 1] = nodes[a][1]
      pos[i * 6 + 2] = nodes[a][2]
      pos[i * 6 + 3] = nodes[b][0]
      pos[i * 6 + 4] = nodes[b][1]
      pos[i * 6 + 5] = nodes[b][2]
    })
    return pos
  }, [nodes, edges])

  // Animate: slow rotation + pulse effect on nodes
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
    pulseRef.current = state.clock.elapsedTime
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Edges (connections) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={edges.length * 2}
            array={edgePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          color="#8b5cf6"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Ambient particles (data flowing) */}
      <DataParticles edges={edges} nodes={nodes} />
    </group>
  )
}

// Small particles that travel along edges — simulating data flow
function DataParticles({ edges, nodes }) {
  const count = 30
  const meshRef = useRef()

  const particleData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      edgeIdx: Math.floor(Math.random() * edges.length),
      progress: Math.random(),
      speed: 0.3 + Math.random() * 0.5,
    }))
  }, [edges])

  const positions = useMemo(() => new Float32Array(count * 3), [count])

  useFrame((state) => {
    const dt = 0.016
    particleData.forEach((p, i) => {
      p.progress += p.speed * dt
      if (p.progress > 1) {
        p.progress = 0
        p.edgeIdx = Math.floor(Math.random() * edges.length)
      }

      const [aIdx, bIdx] = edges[p.edgeIdx]
      const a = nodes[aIdx]
      const b = nodes[bIdx]
      const t = p.progress

      positions[i * 3] = a[0] + (b[0] - a[0]) * t
      positions[i * 3 + 1] = a[1] + (b[1] - a[1]) * t
      positions[i * 3 + 2] = a[2] + (b[2] - a[2]) * t
    })

    if (meshRef.current) {
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#06b6d4"
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <NeuralNetwork />
      </Canvas>
    </div>
  )
}
