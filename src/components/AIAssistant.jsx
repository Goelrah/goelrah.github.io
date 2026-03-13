import { useState } from 'react'
import { MessageCircle, X, ChevronRight, Sparkles } from 'lucide-react'

const faqs = [
  {
    question: 'How can I help your org with GenAI?',
    answer: 'I specialize in taking GenAI from POC to production. This includes use case prioritization, architecture design (RAG systems, LLM orchestration), and establishing responsible AI guardrails. My AskGenie project delivered $2.3M ROI—I can help you achieve similar outcomes.',
  },
  {
    question: 'How do I approach Cloud Cost Optimization?',
    answer: 'I run a structured 4-week sprint: Week 1 is discovery and tagging audit, Week 2 focuses on quick wins (zombie resources, rightsizing), Week 3 establishes governance dashboards, and Week 4 builds cost culture through training. Typical result: 15-25% cost reduction.',
  },
  {
    question: 'How do I run large payment modernization programs?',
    answer: 'I focus on three pillars: (1) Architecture for resilience—event-driven microservices with circuit breakers, (2) Observability—real-time monitoring with sub-second alerting, (3) Governance—clear decision rights and escalation paths. This approach delivered 99.99% uptime for a $5.3B charter.',
  },
  {
    question: 'What makes a great Principal TPM?',
    answer: 'Principal TPMs operate at the intersection of technology, business, and people. The key skills: (1) Architectural fluency—you don\'t need to code, but you need to ask the right questions, (2) Stakeholder orchestration—aligning 10+ teams without authority, (3) Outcome obsession—measuring everything that matters.',
  },
  {
    question: 'Are you available for consulting?',
    answer: 'Yes! I\'m open to part-time advisory engagements for GenAI strategy, Cloud FinOps reviews, and program governance. I also do speaking engagements and workshops. Reach out via the contact section to discuss your needs.',
  },
]

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFaq, setSelectedFaq] = useState(null)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="glass-card overflow-hidden shadow-2xl shadow-primary-500/10">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border-b border-surface-700/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">How I Can Help</h3>
                <p className="text-xs text-surface-400">Quick answers about my work</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false)
                setSelectedFaq(null)
              }}
              className="p-2 text-surface-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 max-h-[400px] overflow-y-auto hide-scrollbar">
            {selectedFaq ? (
              // Answer View
              <div className="animate-fade-in">
                <button
                  onClick={() => setSelectedFaq(null)}
                  className="text-sm text-primary-400 hover:text-primary-300 mb-4 flex items-center gap-1"
                >
                  ← Back to questions
                </button>
                <h4 className="text-white font-medium mb-3">{selectedFaq.question}</h4>
                <p className="text-surface-300 text-sm leading-relaxed">{selectedFaq.answer}</p>
              </div>
            ) : (
              // Questions List
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFaq(faq)}
                    className="w-full text-left p-3 rounded-xl bg-surface-800/50 hover:bg-surface-800 transition-colors group flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-surface-300 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <ChevronRight className="w-4 h-4 text-surface-500 group-hover:text-primary-400 transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-surface-700/50 bg-surface-900/50">
            <p className="text-xs text-surface-500 text-center">
              Have a specific question?{' '}
              <button
                onClick={() => {
                  setIsOpen(false)
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-primary-400 hover:text-primary-300"
              >
                Get in touch
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => {
            setIsOpen(false)
            setSelectedFaq(null)
          }}
        />
      )}
    </>
  )
}