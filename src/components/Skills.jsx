import { motion } from 'framer-motion'
import {
  SiKubernetes, SiDocker, SiTerraform, SiDatadog, SiPrometheus,
  SiGitlab, SiGithubactions, SiJenkins, SiSonar, SiJfrog,
  SiPython, SiNodedotjs, SiReact, SiSpring, SiElasticsearch,
  SiMysql, SiPostgresql, SiMongodb, SiApachespark, SiGooglebigquery,
  SiGooglecloud, SiGooglegemini, SiOpenai, SiGithubcopilot,
  SiJira, SiConfluence, SiArgo, SiSnowflake,
} from 'react-icons/si'
import { FaAws, FaDatabase, FaShieldAlt, FaLock, FaProjectDiagram } from 'react-icons/fa'
import { useAdmin } from '../context/AdminContext'
import EditableText from './admin/EditableText'

const allSkills = [
  { name: 'AWS Bedrock Agents', icon: FaAws, color: '#FF9900', size: 'lg' },
  { name: 'RAG Architecture', icon: null, color: '#a855f7', size: 'lg' },
  { name: 'LLMOps', icon: null, color: '#8b5cf6', size: 'md' },
  { name: 'Agentic Workflow Design', icon: null, color: '#7c3aed', size: 'lg' },
  { name: 'LangChain', icon: null, color: '#1C3C3C', size: 'md' },
  { name: 'Prompt Engineering', icon: null, color: '#a78bfa', size: 'md' },
  { name: 'Multi-Agent Orchestration', icon: null, color: '#c084fc', size: 'md' },
  { name: 'LangGraph', icon: null, color: '#4c1d95', size: 'sm' },
  { name: 'Amazon Q', icon: FaAws, color: '#FF9900', size: 'sm' },
  { name: 'Claude (Anthropic)', icon: null, color: '#D4A574', size: 'md' },
  { name: 'Kubeflow', icon: SiKubernetes, color: '#326CE5', size: 'sm' },
  { name: 'Hugging Face', icon: null, color: '#FFD21E', size: 'sm' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', size: 'lg' },
  { name: 'Azure', icon: null, color: '#0078D4', size: 'md' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4', size: 'md' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', size: 'lg' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', size: 'lg' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', size: 'lg' },
  { name: 'Lambda', icon: FaAws, color: '#FF9900', size: 'md' },
  { name: 'EKS', icon: FaAws, color: '#FF9900', size: 'sm' },
  { name: 'DynamoDB', icon: FaAws, color: '#4053D6', size: 'md' },
  { name: 'Serverless', icon: null, color: '#FD5750', size: 'md' },
  { name: 'Microservices', icon: FaProjectDiagram, color: '#10b981', size: 'lg' },
  { name: 'Event-Driven Architecture', icon: null, color: '#14b8a6', size: 'md' },
  { name: 'Datadog', icon: SiDatadog, color: '#632CA6', size: 'md' },
  { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', size: 'md' },
  { name: 'CI/CD', icon: null, color: '#3b82f6', size: 'md' },
  { name: 'GitLab', icon: SiGitlab, color: '#FC6D26', size: 'sm' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF', size: 'md' },
  { name: 'ArgoCD', icon: SiArgo, color: '#EF7B4D', size: 'sm' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939', size: 'sm' },
  { name: 'SonarQube', icon: SiSonar, color: '#4E9BCD', size: 'sm' },
  { name: 'JFrog', icon: SiJfrog, color: '#40BE46', size: 'sm' },
  { name: 'GDPR', icon: FaShieldAlt, color: '#2563eb', size: 'md' },
  { name: 'Privacy by Design', icon: FaLock, color: '#7c3aed', size: 'sm' },
  { name: 'OAuth 2.0', icon: FaLock, color: '#1d4ed8', size: 'sm' },
  { name: 'Zero-Trust', icon: FaShieldAlt, color: '#dc2626', size: 'sm' },
  { name: 'SOC2', icon: FaShieldAlt, color: '#059669', size: 'sm' },
  { name: 'Data Governance', icon: FaDatabase, color: '#6366f1', size: 'sm' },
  { name: 'Agile', icon: null, color: '#0ea5e9', size: 'md' },
  { name: 'SAFe', icon: null, color: '#1e40af', size: 'sm' },
  { name: 'Scrum', icon: null, color: '#16a34a', size: 'sm' },
  { name: 'FinOps Governance', icon: null, color: '#22c55e', size: 'md' },
  { name: 'Stakeholder Management', icon: null, color: '#8b5cf6', size: 'md' },
  { name: 'Executive Communication', icon: null, color: '#6366f1', size: 'sm' },
  { name: 'OKR Planning', icon: null, color: '#eab308', size: 'sm' },
  { name: 'Risk Management', icon: null, color: '#dc2626', size: 'sm' },
  { name: 'Roadmap Development', icon: null, color: '#0891b2', size: 'sm' },
  { name: 'PoC Experimentation', icon: null, color: '#d946ef', size: 'md' },
  { name: 'Scaled Automation', icon: null, color: '#f43f5e', size: 'md' },
  { name: 'AI Adoption Enablement', icon: null, color: '#a855f7', size: 'md' },
  { name: 'JIRA', icon: SiJira, color: '#0052CC', size: 'sm' },
  { name: 'Confluence', icon: SiConfluence, color: '#172B4D', size: 'sm' },
  { name: 'Java', icon: null, color: '#ED8B00', size: 'lg' },
  { name: 'Spring', icon: SiSpring, color: '#6DB33F', size: 'md' },
  { name: 'REST API', icon: null, color: '#10b981', size: 'md' },
  { name: 'Python', icon: SiPython, color: '#3776AB', size: 'lg' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', size: 'md' },
  { name: 'SQL', icon: null, color: '#336791', size: 'md' },
  { name: 'C#', icon: null, color: '#239120', size: 'sm' },
  { name: 'ReactJS', icon: SiReact, color: '#61DAFB', size: 'md' },
  { name: 'Elasticsearch', icon: SiElasticsearch, color: '#005571', size: 'md' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', size: 'sm' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', size: 'md' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', size: 'md' },
  { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C', size: 'sm' },
  { name: 'BigQuery', icon: SiGooglebigquery, color: '#669DF6', size: 'sm' },
  { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8', size: 'md' },
  { name: 'AWS Glue', icon: FaAws, color: '#FF9900', size: 'sm' },
  { name: 'PowerBI', icon: null, color: '#F2C811', size: 'sm' },
  { name: 'Tableau', icon: null, color: '#E97627', size: 'sm' },
  { name: 'Amazon Kiro', icon: FaAws, color: '#FF9900', size: 'sm' },
  { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#000000', size: 'md' },
  { name: 'ChatGPT', icon: SiOpenai, color: '#412991', size: 'md' },
  { name: 'Gemini', icon: SiGooglegemini, color: '#8E75B2', size: 'md' },
  { name: 'Cursor', icon: null, color: '#000000', size: 'sm' },
  { name: 'LLM Selection', icon: null, color: '#6d28d9', size: 'md' },
  { name: 'Distributed Systems', icon: null, color: '#06b6d4', size: 'md' },
  { name: 'SQS', icon: FaAws, color: '#FF4F8B', size: 'sm' },
  { name: 'SNS', icon: FaAws, color: '#D93F6E', size: 'sm' },
]

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-sm px-5 py-2.5 font-semibold',
}

export default function Skills() {
  const { content } = useAdmin()

  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="tag mb-4">Technical Skills</span>
          <h2 className="section-title text-white">
            <EditableText path="skills.title" value={content.skills.title} as="span" className="section-title text-white" />
          </h2>
          <p className="section-subtitle mx-auto">
            <EditableText path="skills.subtitle" value={content.skills.subtitle} as="span" className="section-subtitle" />
          </p>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-30px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.015 } },
          }}
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {allSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.span
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.7, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{
                  scale: 1.12,
                  y: -3,
                  boxShadow: `0 8px 25px ${skill.color}40`,
                  transition: { duration: 0.2 },
                }}
                className={`inline-flex items-center gap-2 rounded-full cursor-default select-none ${sizeClasses[skill.size]}`}
                style={{
                  backgroundColor: `${skill.color}15`,
                  border: `1px solid ${skill.color}35`,
                  color: skill.color,
                }}
              >
                {Icon && <Icon className="w-4 h-4" style={{ color: skill.color }} />}
                <span className="text-surface-200">{skill.name}</span>
              </motion.span>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
