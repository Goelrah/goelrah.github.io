import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github } from 'lucide-react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const projects = [
  {
    category: 'GENAI / AMAZON',
    title: 'AskGenie — Autonomous Ticket Resolution',
    challenge: 'Manual support workflows overwhelmed engineering teams with thousands of repetitive tickets daily.',
    outcome: 'Production GenAI on AWS Bedrock Agents — 88% autonomous resolution, $2.3M annual ROI, 25% effort reduction.',
    tech: ['AWS Bedrock', 'RAG', 'OpenSearch', 'Lambda', 'LLMOps'],
  },
  {
    category: 'GENAI / AMAZON',
    title: 'Procurement Advisor — AI Inventory Management',
    challenge: 'Manual procurement across 1,200+ facilities on $250M+ spend created bottlenecks.',
    outcome: 'Agentic workflows automating inventory decisions — $2.3M ROI, 25% manual effort reduction.',
    tech: ['AWS Bedrock', 'Agentic Workflows', 'DynamoDB', 'LLM Selection'],
  },
  {
    category: 'CLOUD / AMAZON',
    title: 'Cloud FinOps — $162M Portfolio Governance',
    challenge: '$162M AWS portfolio lacked centralized governance and automated guardrails.',
    outcome: 'Automated FinOps framework — $8M annual savings, VP-level governance adoption.',
    tech: ['AWS', 'Terraform', 'FinOps', 'Cost Explorer'],
  },
  {
    category: 'PLATFORM / DELOITTE',
    title: 'HUX — Customer Data Platform',
    challenge: 'Fortune 500 client needed AI-driven campaign orchestration replacing manual marketing.',
    outcome: 'Full-stack CDP on Snowflake with LLM orchestration — 2.5x ROI, 22% sales increase.',
    tech: ['Snowflake', 'LLM Orchestration', 'Adobe Magento', 'Data Science'],
  },
  {
    category: 'OPEN SOURCE',
    title: 'LLM Eval Compass',
    challenge: 'Teams lack structured, repeatable LLM evaluation — most run benchmarks once.',
    outcome: 'Framework evaluating LLMs across 6 dimensions with CI/CD gates and decision docs.',
    tech: ['Python', 'AWS Bedrock', 'RAGAS', 'MLflow'],
    repoUrl: 'https://github.com/rahgoel2510/llm-eval-compass',
  },
  {
    category: 'OPEN SOURCE',
    title: 'n8n Job Hunter — AI Pipeline',
    challenge: 'Manual job searching is inconsistent with no systematic fitment scoring.',
    outcome: 'Automated pipeline — scrapes, scores via Claude Haiku, delivers HTML digest every 12h.',
    tech: ['Python', 'n8n', 'Docker', 'Claude Haiku'],
    repoUrl: 'https://github.com/rahgoel2510/n8n-job-hunter',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm text-surface-500 font-mono tracking-wider block">
            04 // Selected Work
          </motion.span>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl lg:text-4xl font-bold mt-4 mb-16 leading-tight">
            Systems that deliver <span className="text-primary-400">measurable impact.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl border border-surface-800/60 bg-surface-900/40 hover:border-primary-500/30 transition-all group"
            >
              {/* Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-primary-400 tracking-wider uppercase">
                  {project.category}
                </span>
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-surface-500 hover:text-primary-400 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-5 group-hover:text-primary-300 transition-colors">{project.title}</h3>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider mb-1.5">The Challenge</h4>
                <p className="text-sm text-surface-400 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Outcome */}
              <div className="mb-6">
                <h4 className="text-[11px] font-semibold text-surface-500 uppercase tracking-wider mb-1.5">The Outcome</h4>
                <p className="text-sm text-surface-200 leading-relaxed font-medium">{project.outcome}</p>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-surface-800 text-surface-400 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
