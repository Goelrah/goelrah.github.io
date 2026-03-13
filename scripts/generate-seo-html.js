/**
 * Post-build script to inject SEO-friendly static HTML into the built index.html
 * This runs after `npm run build` and modifies dist/index.html
 * 
 * The static HTML is visible to search engine crawlers that don't execute JavaScript.
 * When JavaScript loads, React replaces this content with the interactive app.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist', 'index.html');

// SEO content that will be visible to crawlers
const seoContent = `
        <!-- SEO Content for Crawlers (replaced by React on load) -->
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#case-studies">Case Studies</a>
                <a href="#playbooks">Playbooks</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
                <a href="/assets/RahulGoel_Resume.pdf" download>Resume</a>
            </nav>
        </header>
        <main>
            <section id="hero">
                <h1>Rahul Goel – Principal Technical Program Manager & AWS Certified Solutions Architect</h1>
                <h2>GenAI Architect & Cloud Portfolio Leader delivering measurable enterprise outcomes</h2>
                <p>15+ years at <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a>, <a href="https://www.deloitte.com" target="_blank" rel="noopener noreferrer">Deloitte</a>, and global enterprises. $162M AWS portfolio governance, $8M/year cost savings, $2.3M GenAI ROI, and 99.99% payment system uptime.</p>
                <a href="/assets/RahulGoel_Resume.pdf" download>Download Resume (PDF)</a>
                <a href="#experience">View Experience</a>
                <a href="#playbooks">Explore GenAI Playbooks</a>
                <a href="#case-studies">View Case Studies</a>
                <a href="#contact">Get in Touch</a>
            </section>
            <section id="about">
                <h2>About Rahul Goel</h2>
                <p>Principal Technical Program Manager and <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect</a> with 15+ years of experience leading large-scale cloud and enterprise programs at Amazon, Deloitte, and global enterprises. I specialize in <a href="#case-studies">GenAI architecture</a>, <a href="#playbooks">cloud portfolio governance</a>, and high-availability payment systems.</p>
                <p>My journey began in financial services technology at Royal Bank of Scotland, building high-availability trading systems. At Deloitte, I evolved from technical lead to practice builder, growing and leading a 45-member cross-disciplinary engineering practice. At Amazon, I operate at principal scope, governing $162M AWS portfolios and architecting production GenAI systems using <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">AWS Bedrock</a>.</p>
                <h3>Key Achievements</h3>
                <ul>
                    <li><a href="#case-studies">$162M AWS cloud portfolio governance</a> with automated cost-control frameworks</li>
                    <li>$8M/year recurring cost savings through <a href="#playbooks">Cloud FinOps frameworks</a> and Terraform guardrails</li>
                    <li>$2.3M annual ROI from GenAI systems including <a href="#case-studies">AskGenie RAG platform</a></li>
                    <li>99.99% uptime for <a href="#case-studies">$5.3B payment modernization charter</a></li>
                    <li>45-member engineering practice leadership at <a href="#experience">Deloitte</a></li>
                    <li>AWS Certified Solutions Architect with expertise in <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">Bedrock</a>, <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a>, and distributed systems</li>
                </ul>
                <h3>Core Competencies</h3>
                <p><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS Cloud Architecture</a>, GenAI and LLMOps, Cloud Cost Optimization, High-Availability Distributed Systems, Program Governance, TPM Leadership, Microservices Architecture, CI/CD Pipelines, Security by Design.</p>
                <a href="#experience">View Full Experience</a>
            </section>
            <section id="experience">
                <h2>Experience & Impact – 15+ Years of Measurable Outcomes</h2>
                <p>From building trading systems to governing $100M+ cloud portfolios—every role focused on delivering business value. <a href="/assets/RahulGoel_Resume.pdf" download>Download my full resume</a> for details.</p>
                <article>
                    <h3>Amazon – Principal Technical Program Manager (2021–Present)</h3>
                    <ul>
                        <li>Governed $162M <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a> cloud portfolio, delivering $8M/year savings through <a href="#playbooks">Cloud FinOps frameworks</a></li>
                        <li>Architected <a href="#case-studies">AskGenie</a> – production GenAI RAG system on <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">AWS Bedrock</a> + <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a> with $2.3M annual ROI</li>
                        <li>Principal program lead for <a href="#case-studies">$5.3B payment modernization charter</a>, achieving 99.99% uptime</li>
                    </ul>
                    <a href="#case-studies">View Amazon Case Studies</a>
                </article>
                <article>
                    <h3>Deloitte – Senior Manager, Technology Consulting (2015–2021)</h3>
                    <ul>
                        <li>Built and led 45-member cross-disciplinary engineering practice</li>
                        <li>Established microservices architecture standards, CI/CD pipelines, security-by-design</li>
                        <li>40% improvement in delivery velocity through <a href="#playbooks">program governance frameworks</a></li>
                    </ul>
                </article>
                <article>
                    <h3>Earlier Career – Technical Lead & Architect (2009–2015)</h3>
                    <ul>
                        <li>RBS: High-availability trading systems processing $10B+ daily transactions</li>
                        <li>Shell Infotech / Emerio: Enterprise integration solutions for global clients</li>
                    </ul>
                </article>
                <a href="/assets/RahulGoel_Resume.pdf" download>Download Full Resume (PDF)</a>
            </section>
            <section id="case-studies">
                <h2>Case Studies – Selected Programs & Impact</h2>
                <p>Real problems, real solutions, real outcomes. Each case study represents a significant program where I drove measurable business value through technical excellence and <a href="#playbooks">program leadership frameworks</a>.</p>
                <article>
                    <h3>Payment Modernization at Scale – 99.99% Uptime</h3>
                    <p>Led $5.3B payment modernization charter with event-driven microservices architecture, achieving 99.99% uptime for millions of daily transactions across global markets. Learn more about <a href="https://aws.amazon.com/microservices/" target="_blank" rel="noopener noreferrer">microservices on AWS</a>.</p>
                    <a href="#contact">Discuss Your Payment Challenges</a>
                </article>
                <article>
                    <h3>AskGenie: Enterprise GenAI RAG System – $2.3M ROI</h3>
                    <p>Architected production RAG system using <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">AWS Bedrock</a>, <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a>, and <a href="https://www.pinecone.io/" target="_blank" rel="noopener noreferrer">Pinecone</a> vector database, improving operational efficiency by 25%.</p>
                    <a href="#playbooks">View GenAI Playbook</a>
                </article>
                <article>
                    <h3>Cloud Cost Optimization – $8M/Year Savings</h3>
                    <p>Governed $162M <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a> portfolio with <a href="https://www.finops.org/" target="_blank" rel="noopener noreferrer">FinOps</a> frameworks and <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">Terraform</a> guardrails, delivering sustained cost savings.</p>
                    <a href="#playbooks">View Cloud Cost Playbook</a>
                </article>
                <a href="#contact">Discuss Your Program Challenges</a>
            </section>
            <section id="playbooks">
                <h2>GenAI & Cloud Optimization Playbooks</h2>
                <p>Battle-tested frameworks for VP Engineering, CTOs, and Heads of Product. Based on real implementations at <a href="#experience">Amazon and Deloitte</a>.</p>
                <article>
                    <h3>GenAI Discovery-to-Production Framework</h3>
                    <p>Structured approach to taking GenAI initiatives from POC to production in 12 weeks. Uses <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">AWS Bedrock</a> and <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a> best practices.</p>
                    <a href="#case-studies">See AskGenie Case Study</a>
                </article>
                <article>
                    <h3>4-Week Cloud Cost Sprint</h3>
                    <p>Intensive cost optimization sprint identifying 15-25% savings with sustainable governance. Based on <a href="https://www.finops.org/" target="_blank" rel="noopener noreferrer">FinOps Foundation</a> principles.</p>
                    <a href="#case-studies">See $8M Savings Case Study</a>
                </article>
                <article>
                    <h3>Program Governance for Scale</h3>
                    <p>Lightweight governance framework for large, multi-team initiatives. Covers decision rights, escalation paths, and dependency management.</p>
                    <a href="#experience">See Experience</a>
                </article>
                <a href="#contact">Apply These Frameworks</a>
            </section>
            <section id="blog">
                <h2>Blog – Insights on GenAI, Cloud & Engineering Leadership</h2>
                <p>Practical insights for VP Engineering, CTOs, and senior TPMs navigating cloud architecture and GenAI adoption. Topics include <a href="#case-studies">GenAI implementation</a>, <a href="#playbooks">Cloud FinOps</a>, and <a href="#experience">TPM leadership</a>.</p>
                <article>
                    <h3><a href="/blog/aws-cost-optimization.html">The 4-Week FinOps Sprint: A Practical Guide</a></h3>
                    <p>How I delivered $8M/year in savings from a $162M AWS portfolio.</p>
                </article>
                <a href="#contact">Subscribe for Updates</a>
            </section>
            <section id="contact">
                <h2>Contact Rahul Goel</h2>
                <p>Available for Principal TPM, GenAI Leadership, and Cloud Program Leadership roles. <a href="#about">Learn more about me</a> or <a href="#experience">view my experience</a>.</p>
                <ul>
                    <li>Email: <a href="mailto:rahul.g2510@outlook.com">rahul.g2510@outlook.com</a></li>
                    <li>Phone: <a href="tel:+919873676254">+91 9873676254</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/goelrahul25" target="_blank" rel="noopener noreferrer">linkedin.com/in/goelrahul25</a></li>
                    <li>GitHub: <a href="https://github.com/Goelrah" target="_blank" rel="noopener noreferrer">github.com/Goelrah</a></li>
                </ul>
                <a href="/assets/RahulGoel_Resume.pdf" download>Download Resume (PDF)</a>
                <a href="#playbooks">View Playbooks</a>
                <a href="#case-studies">View Case Studies</a>
            </section>
        </main>
        <footer>
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#case-studies">Case Studies</a>
                <a href="#playbooks">Playbooks</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
            <p>© 2026 Rahul Goel. Principal Technical Program Manager & AWS Certified Solutions Architect.</p>
            <p>Technologies: <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS</a> | <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">AWS Bedrock</a> | <a href="https://www.langchain.com/" target="_blank" rel="noopener noreferrer">LangChain</a> | <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">Terraform</a></p>
        </footer>
`;

// Read the built index.html
let html = fs.readFileSync(distPath, 'utf-8');

// Replace empty <div id="root"></div> with SEO content
html = html.replace(
  '<div id="root"></div>',
  `<div id="root">${seoContent}
    </div>`
);

// Write back
fs.writeFileSync(distPath, html);

console.log('✅ SEO content injected into dist/index.html');