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
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#case-studies">Case Studies</a>
                <a href="#playbooks">Playbooks</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <main>
            <section id="hero">
                <h1>Rahul Goel – Principal Technical Program Manager & AWS Certified Solutions Architect</h1>
                <h2>GenAI Architect & Cloud Portfolio Leader delivering measurable enterprise outcomes</h2>
                <p>15+ years at Amazon, Deloitte, and global enterprises. $162M AWS portfolio governance, $8M/year cost savings, $2.3M GenAI ROI, and 99.99% payment system uptime.</p>
                <a href="/assets/RahulGoel_Resume.pdf" download>Download Resume (PDF)</a>
                <a href="#experience">View Experience</a>
                <a href="#playbooks">Explore GenAI Playbooks</a>
            </section>
            <section id="about">
                <h2>About Rahul Goel</h2>
                <p>Principal Technical Program Manager and AWS Certified Solutions Architect with 15+ years of experience leading large-scale cloud and enterprise programs at Amazon, Deloitte, and global enterprises. I specialize in GenAI architecture, cloud portfolio governance, and high-availability payment systems.</p>
                <p>My journey began in financial services technology at Royal Bank of Scotland, building high-availability trading systems. At Deloitte, I evolved from technical lead to practice builder, growing and leading a 45-member cross-disciplinary engineering practice. At Amazon, I operate at principal scope, governing $162M AWS portfolios and architecting production GenAI systems.</p>
                <h3>Key Achievements</h3>
                <ul>
                    <li>$162M AWS cloud portfolio governance with automated cost-control frameworks</li>
                    <li>$8M/year recurring cost savings through Cloud FinOps frameworks and Terraform guardrails</li>
                    <li>$2.3M annual ROI from GenAI systems including AskGenie RAG platform</li>
                    <li>99.99% uptime for $5.3B payment modernization charter</li>
                    <li>45-member engineering practice leadership at Deloitte</li>
                    <li>AWS Certified Solutions Architect with expertise in Bedrock, LangChain, and distributed systems</li>
                </ul>
                <h3>Core Competencies</h3>
                <p>AWS Cloud Architecture, GenAI and LLMOps, Cloud Cost Optimization, High-Availability Distributed Systems, Program Governance, TPM Leadership, Microservices Architecture, CI/CD Pipelines, Security by Design.</p>
            </section>
            <section id="experience">
                <h2>Experience & Impact – 15+ Years of Measurable Outcomes</h2>
                <article>
                    <h3>Amazon – Principal Technical Program Manager (2021–Present)</h3>
                    <ul>
                        <li>Governed $162M AWS cloud portfolio, delivering $8M/year savings through Cloud FinOps frameworks</li>
                        <li>Architected AskGenie – production GenAI RAG system on AWS Bedrock + LangChain with $2.3M annual ROI</li>
                        <li>Principal program lead for $5.3B payment modernization charter, achieving 99.99% uptime</li>
                    </ul>
                </article>
                <article>
                    <h3>Deloitte – Senior Manager, Technology Consulting (2015–2021)</h3>
                    <ul>
                        <li>Built and led 45-member cross-disciplinary engineering practice</li>
                        <li>Established microservices architecture standards, CI/CD pipelines, security-by-design</li>
                        <li>40% improvement in delivery velocity through program governance frameworks</li>
                    </ul>
                </article>
                <article>
                    <h3>Earlier Career – Technical Lead & Architect (2009–2015)</h3>
                    <ul>
                        <li>RBS: High-availability trading systems processing $10B+ daily transactions</li>
                        <li>Shell Infotech / Emerio: Enterprise integration solutions for global clients</li>
                    </ul>
                </article>
            </section>
            <section id="case-studies">
                <h2>Case Studies – Selected Programs & Impact</h2>
                <p>Real problems, real solutions, real outcomes. Each case study represents a significant program where I drove measurable business value through technical excellence and program leadership.</p>
                <article>
                    <h3>Payment Modernization at Scale – 99.99% Uptime</h3>
                    <p>Led $5.3B payment modernization charter with event-driven microservices architecture, achieving 99.99% uptime for millions of daily transactions across global markets.</p>
                </article>
                <article>
                    <h3>AskGenie: Enterprise GenAI RAG System – $2.3M ROI</h3>
                    <p>Architected production RAG system using AWS Bedrock, LangChain, and Pinecone vector database, improving operational efficiency by 25%.</p>
                </article>
                <article>
                    <h3>Cloud Cost Optimization – $8M/Year Savings</h3>
                    <p>Governed $162M AWS portfolio with FinOps frameworks and Terraform guardrails, delivering sustained cost savings.</p>
                </article>
            </section>
            <section id="playbooks">
                <h2>GenAI & Cloud Optimization Playbooks</h2>
                <p>Battle-tested frameworks for VP Engineering, CTOs, and Heads of Product.</p>
                <article>
                    <h3>GenAI Discovery-to-Production Framework</h3>
                    <p>Structured approach to taking GenAI initiatives from POC to production in 12 weeks.</p>
                </article>
                <article>
                    <h3>4-Week Cloud Cost Sprint</h3>
                    <p>Intensive cost optimization sprint identifying 15-25% savings with sustainable governance.</p>
                </article>
            </section>
            <section id="blog">
                <h2>Blog – Insights on GenAI, Cloud & Engineering Leadership</h2>
                <p>Practical insights for VP Engineering, CTOs, and senior TPMs navigating cloud architecture and GenAI adoption.</p>
            </section>
            <section id="contact">
                <h2>Contact Rahul Goel</h2>
                <p>Available for Principal TPM, GenAI Leadership, and Cloud Program Leadership roles.</p>
                <ul>
                    <li>Email: <a href="mailto:rahul.g2510@outlook.com">rahul.g2510@outlook.com</a></li>
                    <li>Phone: <a href="tel:+919873676254">+91 9873676254</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/goelrahul25" target="_blank" rel="noopener noreferrer">linkedin.com/in/goelrahul25</a></li>
                    <li>GitHub: <a href="https://github.com/Goelrah" target="_blank" rel="noopener noreferrer">github.com/Goelrah</a></li>
                </ul>
                <a href="/assets/RahulGoel_Resume.pdf" download>Download Resume (PDF)</a>
            </section>
        </main>
        <footer>
            <p>© 2026 Rahul Goel. Principal Technical Program Manager & AWS Certified Solutions Architect.</p>
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