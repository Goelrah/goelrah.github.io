import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const skills = [
  { name: 'AWS Bedrock', size: 1.4, color: '#FF9900' },
  { name: 'RAG', size: 1.6, color: '#a855f7' },
  { name: 'GenAI', size: 1.8, color: '#8b5cf6' },
  { name: 'LangChain', size: 1.0, color: '#1a7f64' },
  { name: 'Kubernetes', size: 1.3, color: '#326CE5' },
  { name: 'Docker', size: 1.2, color: '#2496ED' },
  { name: 'Terraform', size: 1.1, color: '#7B42BC' },
  { name: 'Python', size: 1.5, color: '#3776AB' },
  { name: 'LLMOps', size: 1.3, color: '#c084fc' },
  { name: 'AWS', size: 1.7, color: '#FF9900' },
  { name: 'Microservices', size: 1.1, color: '#10b981' },
  { name: 'Datadog', size: 0.9, color: '#632CA6' },
  { name: 'Prometheus', size: 0.9, color: '#E6522C' },
  { name: 'Agentic AI', size: 1.4, color: '#7c3aed' },
  { name: 'Java', size: 1.2, color: '#ED8B00' },
  { name: 'Node.js', size: 1.0, color: '#339933' },
  { name: 'ReactJS', size: 1.1, color: '#61DAFB' },
  { name: 'Snowflake', size: 1.0, color: '#29B5E8' },
  { name: 'PostgreSQL', size: 0.9, color: '#4169E1' },
  { name: 'MongoDB', size: 0.9, color: '#47A248' },
  { name: 'FinOps', size: 1.2, color: '#22c55e' },
  { name: 'CI/CD', size: 1.0, color: '#3b82f6' },
  { name: 'Prompt Engineering', size: 1.1, color: '#d946ef' },
  { name: 'Spring', size: 0.9, color: '#6DB33F' },
  { name: 'DynamoDB', size: 0.9, color: '#4053D6' },
  { name: 'Lambda', size: 1.0, color: '#FF9900' },
  { name: 'EKS', size: 0.8, color: '#FF9900' },
  { name: 'Serverless', size: 1.0, color: '#FD5750' },
  { name: 'ArgoCD', size: 0.8, color: '#EF7B4D' },
  { name: 'Jenkins', size: 0.8, color: '#D24939' },
  { name: 'GCP', size: 1.0, color: '#4285F4' },
  { name: 'Azure', size: 1.0, color: '#0078D4' },
  { name: 'Agile', size: 0.9, color: '#0ea5e9' },
  { name: 'SAFe', size: 0.8, color: '#1e40af' },
  { name: 'Elasticsearch', size: 0.9, color: '#005571' },
  { name: 'BigQuery', size: 0.8, color: '#669DF6' },
  { name: 'Multi-Agent', size: 1.1, color: '#7c3aed' },
  { name: 'Bedrock Agents', size: 1.2, color: '#FF9900' },
  { name: 'OpenAI', size: 1.0, color: '#412991' },
  { name: 'Claude', size: 1.0, color: '#D4A574' },
]

// Distribute skills in a sphere
function generatePositions(count) {
  const positions = []
  const phi = (1 + Math.sqrt(5)) / 2 // golden ratio
  for (let i = 0; i < count; i++) {
    const y = 1 - (2 * i) / (count - 1)
    const radius = Math.sqrt(1 - y * y)
    const theta = 2 * Math.PI * i / phi
    positions.push([
      radius * Math.cos(theta) * 4,
      y * 3,
      radius * Math.sin(theta) * 2.5,
    ])
  }
  return positions
}

function SkillWord({ skill, position, onHover, isHovered }) {
  const meshRef = useRef()
  const scale = isHovered ? skill.size * 1.8 : skill.size

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
    }
  })

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.3}
      color={skill.color}
      anchorX="center"
      anchorY="middle"
      onPointerEnter={() => onHover(skill.name)}
      onPointerLeave={() => onHover(null)}
      outlineWidth={isHovered ? 0.02 : 0}
      outlineColor={skill.color}
      fillOpacity={isHovered ? 1 : 0.8}
    >
      {skill.name}
    </Text>
  )
}

function WordCloud() {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(null)

  const positions = useMemo(() => generatePositions(skills.length), [])

  useFrame((state) => {
    if (groupRef.current) {
      // No rotation — static cloud
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillWord
          key={skill.name}
          skill={skill}
          position={positions[i]}
          onHover={setHovered}
          isHovered={hovered === skill.name}
        />
      ))}
    </group>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-surface-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-sm text-surface-500 font-mono tracking-wider">03 // Expertise</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight">
            Technical <span className="text-primary-400">arsenal.</span>
          </h2>
          <p className="text-surface-400 mt-3">80+ technologies. Hover to magnify. The cloud rotates — explore it.</p>
        </motion.div>

        {/* 3D Word Cloud */}
        <div className="w-full h-[400px] lg:h-[550px] rounded-2xl border border-surface-800/30 bg-surface-950/50 overflow-hidden cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.5} />
            <WordCloud />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
