import { Mail, Linkedin, Github, Calendar, Briefcase, MessageSquare, Download } from 'lucide-react'

const workOptions = [
  {
    icon: Briefcase,
    title: 'Full-Time Roles',
    description: 'Principal TPM, GenAI Leadership, or Cloud Program Leadership positions at innovative companies.',
  },
  {
    icon: MessageSquare,
    title: 'Advisory & Consulting',
    description: 'Part-time advisory on GenAI strategy, Cloud FinOps reviews, or program governance for startups and scale-ups.',
  },
  {
    icon: Calendar,
    title: 'Speaking & Workshops',
    description: 'Conference talks, internal workshops, or executive briefings on GenAI, FinOps, and TPM leadership.',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Content */}
          <div className="animate-on-scroll">
            <span className="tag mb-4">Work With Me</span>
            <h2 className="section-title text-white">
              Let's Build <span className="gradient-text">Something Great</span>
            </h2>
            
            <p className="text-surface-300 text-lg leading-relaxed mb-8">
              I'm open to conversations with hiring managers seeking Principal TPM or GenAI 
              leadership, founders needing strategic guidance on cloud architecture and AI 
              adoption, and organizations looking to establish cost governance and program 
              excellence.
            </p>

            {/* Work Options */}
            <div className="space-y-4 mb-8">
              {workOptions.map((option) => (
                <div key={option.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{option.title}</h3>
                    <p className="text-sm text-surface-400">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Download */}
            <div className="glass-card p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold mb-1">Download My Resume</h3>
                  <p className="text-sm text-surface-400">Last updated: March 2026</p>
                </div>
                <a
                  href="/assets/RahulGoel_Resume.pdf"
                  download
                  className="btn-primary"
                >
                  <Download className="w-5 h-5" />
                  PDF
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Card */}
          <div className="animate-on-scroll stagger-2">
            <div className="glass-card p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:rahul.g2510@outlook.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 hover:bg-surface-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-400">Email</p>
                    <p className="text-white font-medium">rahul.g2510@outlook.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919873676254"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 hover:bg-surface-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-surface-400">Phone</p>
                    <p className="text-white font-medium">+91 9873676254</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/goelrahul25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 hover:bg-surface-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-400">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/goelrahul25</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Goelrah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 hover:bg-surface-800 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-600/50 flex items-center justify-center group-hover:bg-surface-600 transition-colors">
                    <Github className="w-6 h-6 text-surface-300" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-400">GitHub</p>
                    <p className="text-white font-medium">github.com/Goelrah</p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="pt-6 border-t border-surface-700/50">
                <p className="text-sm text-surface-400 mb-2">Location</p>
                <p className="text-white">Bangalore, India</p>
                <p className="text-sm text-surface-400 mt-1">
                  Open to remote opportunities globally
                </p>
              </div>

              {/* Response Time */}
              <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-400">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Typically responds within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}