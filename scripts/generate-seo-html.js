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
                <a href="#case-studies">Projects</a>
                <a href="#contact">Contact</a>
                <a href="/assets/docs/RahulGoel_Resume.pdf" download>Resume</a>
            </nav>
        </header>
        <main>
            <section id="hero">
                <h1>Rahul Goel – Senior TPM | Solutions Architect | AI/GenAI Leader</h1>
                <h2>AWS Certified Solutions Architect delivering enterprise-scale AI automation</h2>
                <p>19+ years at <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a>, <a href="https://www.deloitte.com" target="_blank" rel="noopener noreferrer">Deloitte</a>, and Fortune 500. $165M AWS portfolio at 85% discount, $24M cost savings, 4,500 tickets/day auto-resolved by AI, $5.3B payment modernization.</p>
                <a href="/assets/docs/RahulGoel_Resume.pdf" download>Download Resume (PDF)</a>
                <a href="#experience">View Experience</a>
                <a href="#case-studies">View AI Projects</a>
                <a href="#contact">Get in Touch</a>
            </section>
            <section id="about">
                <h2>About Rahul Goel – Senior TPM | Solutions Architect | AI/GenAI Leader</h2>
                <p>Senior Technical Program Manager and <a href="https://aws.amazon.com/certification/certified-solutions-architect-associate/" target="_blank" rel="noopener noreferrer">AWS Certified Solutions Architect</a> at Amazon with 19+ years of experience. I specialize in <a href="#case-studies">GenAI/RAG architecture</a>, <a href="#case-studies">Cloud FinOps</a>, and enterprise-scale automation.</p>
                <p>Currently managing a $165M AWS cloud portfolio across 85+ engineering teams, delivering production GenAI solutions that resolve 4,500+ tickets daily without engineer intervention using <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noopener noreferrer">AWS Bedrock</a> and RAG architecture.</p>
                <h3>Key Achievements</h3>
                <ul>
                    <li>$165M AWS portfolio at 85% discounted rate across 85+ teams</li>
                    <li>$24M cost savings over 2 consecutive years ($12M/year)</li>
                    <li>4,500 tickets/day auto-resolved by AskGenie RAG system</li>
                    <li>$2.3M annual ROI from GenAI automation</li>
                    <li>$5.3B payment modernization program (Naazir)</li>
                    <li>45-member engineering practice built at Deloitte</li>
                </ul>
                <h3>Core Competencies</h3>
                <p>Solutions Architect, AI/GenAI Leader, RAG Architecture, AWS Bedrock, LangChain, MCP (Model Context Protocol), XGBoost, SageMaker, Cloud FinOps, Terraform, Microservices, Saga Pattern, IoT, Apache Flink, Kinesis, Prometheus, DataDog, Payment Modernization, Machine Learning, NLP, LLM, Computer Vision, Stream Processing, Prompt Engineering, LLMOps, MLOps, Kubernetes, EKS, Lambda, DynamoDB.</p>
                <a href="#experience">View Full Experience</a>
            </section>
            <section id="experience">
                <h2>Experience & Impact – 19+ Years of Measurable Outcomes</h2>
                <p>From building airline booking systems to governing $165M+ cloud portfolios and deploying AI that resolves 4,500 tickets daily. <a href="/assets/docs/RahulGoel_Resume.pdf" download>Download my full resume</a> for details.</p>
                <article>
                    <h3>Amazon – Senior Technical Program Manager (Mar 2022–Present)</h3>
                    <ul>
                        <li>Governed $165M AWS cloud portfolio at 85% discounted rate across 85+ engineering teams</li>
                        <li>Implemented 20+ automated cost guardrails — $12M/year savings for 2 consecutive years ($24M total)</li>
                        <li>Built AskGenie RAG-based automation — 88% confidence threshold, 4,500 tickets/day auto-resolved; $2.3M annual ROI</li>
                        <li>Scaled Ada procurement AI to 1,200+ global facilities serving 3,500+ managers — orders under $10K auto-approved</li>
                        <li>Principal Program Lead for $5.3B Naazir payment modernization (Global Engineering and Security Service)</li>
                        <li>Built SafeDrive real-time safety monitoring — cut serious incidents by 24%, improved on-time delivery by 18%</li>
                        <li>Deployed EagleEye tracking 2.5M+ data points/day across 15+ international markets</li>
                    </ul>
                    <a href="#case-studies">View Amazon Case Studies</a>
                </article>
                <article>
                    <h3>Deloitte – Engineering Lead / Director of Engineering (Nov 2015–Mar 2022)</h3>
                    <ul>
                        <li>Founded and scaled 45-member engineering practice; directed global talent acquisition for Fortune 500 clients</li>
                        <li>Built Campaign Automation Platform with ML-based user bucketing and GenAI coupon generation; improved ROI by 2.5x</li>
                        <li>Led legacy CMS to cloud-native microservices migration; reduced time-to-market by 35%</li>
                        <li>Delivered branchless banking rollout with AI avatars and facial recognition — cut operational overhead by 40%</li>
                        <li>Led AR/VR integration into smart manufacturing — achieved 20% downtime reduction</li>
                    </ul>
                </article>
                <article>
                    <h3>Earlier Career – Project Manager → Team Lead → Senior Developer (2005–2015)</h3>
                    <ul>
                        <li>Shell Infotech / Deloitte: Architected Salesforce Commerce Cloud platform; lifted conversion rates by 25%</li>
                        <li>Royal Bank of Scotland: Supported 16 mission-critical applications; improved uptime by 22%</li>
                        <li>Cincom Systems: Migrated Ruby rule engine to .NET saving $1.2M in annual royalty fees</li>
                        <li>Kale Consultants: Built airline booking systems for BCD Travel and Air India across 9 countries</li>
                    </ul>
                </article>
                <a href="/assets/docs/RahulGoel_Resume.pdf" download>Download Full Resume (PDF)</a>
            </section>
            <section id="case-studies">
                <h2>AI & Cloud Projects – 10 Production Systems with Measurable Impact</h2>
                <p>Enterprise-scale AI, GenAI, and cloud solutions — each solving real business problems with quantified outcomes.</p>
                <article>
                    <h3>AskGenie — AI Ticket Resolution (GenAI / RAG / Automation)</h3>
                    <p>4,500 tickets/day auto-resolved • $2.3M ROI • 88% confidence threshold. Built RAG-based automation using AWS Bedrock, OpenSearch, Lambda, LLM, NLP.</p>
                </article>
                <article>
                    <h3>Ada — Procurement AI Auto-Approval (ML / XGBoost / Fraud Detection)</h3>
                    <p>1,200+ facilities • $10.5M/year savings • 92% auto-approved. XGBoost model with SageMaker, StepFunctions, DynamoDB.</p>
                </article>
                <article>
                    <h3>MCP PMO — AI Project Prioritization (MCP / GenAI / Portfolio Management)</h3>
                    <p>RICE Algorithm • 75% time reduction • $192K savings. Model Context Protocol with AWS Bedrock, Prompt Engineering.</p>
                </article>
                <article>
                    <h3>Cloud FinOps — $165M Portfolio (AWS / Terraform / Cost Optimization)</h3>
                    <p>$24M savings • 85% discount • 20+ guardrails. Terraform, CloudFormation, FinOps, Cost Explorer.</p>
                </article>
                <article>
                    <h3>Naazir — $5.3B Payment Modernization (Microservices / Saga / FinTech)</h3>
                    <p>99.995% uptime • 18-month delivery • Zero incidents. Saga Pattern, ECS Fargate, Aurora, PCI-DSS.</p>
                </article>
                <article>
                    <h3>SafeDrive — Real-Time Safety (Stream Processing / IoT / ML)</h3>
                    <p>24% incident reduction • 10K events/sec • 1.5s latency. Apache Flink, Kinesis, IoT, Real-time ML.</p>
                </article>
                <article>
                    <h3>Procurement Advisor — IoT Smart Ordering (IoT / Amazon Forecast / Supply Chain)</h3>
                    <p>78K sensors • $7.5M savings • 40% fewer stock-outs. IoT Core, Amazon Forecast, DeepAR, Lambda.</p>
                </article>
                <article>
                    <h3>EagleEye — Multi-Market Observability (Prometheus / DataDog / SRE)</h3>
                    <p>2.5M+ data points/day • 15+ markets • 20% throughput gain. Prometheus, DataDog, Grafana, EKS.</p>
                </article>
                <article>
                    <h3>Campaign Automation — ML + GenAI (K-Means / GenAI / Personalization)</h3>
                    <p>2.5x ROI • 12% churn reduction • 90 A/B variants. K-Means, XGBoost, AWS Bedrock, SageMaker.</p>
                </article>
                <article>
                    <h3>Branchless Banking — AI Avatars (Computer Vision / NLP / Financial Inclusion)</h3>
                    <p>200K users • 40% cost reduction • 95% offline success. Rekognition, Lex, Polly, TFLite, Facial Recognition.</p>
                </article>
                <h3>Technology Stack</h3>
                <p><strong>AI/ML & GenAI:</strong> AWS Bedrock, SageMaker, RAG, XGBoost, K-Means, LSTM, LangChain, MCP</p>
                <p><strong>Compute & Data:</strong> Lambda, ECS Fargate, EKS, DynamoDB, Aurora, Kinesis, OpenSearch</p>
                <p><strong>IoT & Edge:</strong> IoT Core, Greengrass, SageMaker Neo, TFLite, 78K+ sensors</p>
                <p><strong>Observability:</strong> Prometheus, DataDog, Grafana, CloudWatch, X-Ray</p>
                <a href="#contact">Discuss Your Program Challenges</a>
            </section>
            <section id="contact">
                <h2>Contact Rahul Goel</h2>
                <p>Available for Principal TPM, Solutions Architect, and AI/GenAI Leadership roles. Open to relocation.</p>
                <ul>
                    <li>Email: <a href="mailto:rahul.g2510@outlook.com">rahul.g2510@outlook.com</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/goelrahul25" target="_blank" rel="noopener noreferrer">linkedin.com/in/goelrahul25</a></li>
                    <li>GitHub: <a href="https://github.com/Goelrah" target="_blank" rel="noopener noreferrer">github.com/Goelrah</a></li>
                </ul>
                <h3>Certifications</h3>
                <ul>
                    <li>AWS Certified Solutions Architect (June 2024)</li>
                    <li>AWS Certified Cloud Practitioner (June 2024)</li>
                    <li>PMP - Project Management Professional (March 2025)</li>
                    <li>Generative AI for Leaders - Vanderbilt University (2026)</li>
                    <li>PRINCE2 Practitioner</li>
                    <li>ITIL v3 Foundation</li>
                </ul>
                <a href="/assets/docs/RahulGoel_Resume.pdf" download>Download Resume (PDF)</a>
            </section>
        </main>
        <footer>
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#case-studies">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <p>© 2026 Rahul Goel. Senior TPM | Solutions Architect | AI/GenAI Leader.</p>
            <p>Technologies: AWS Bedrock, RAG, LangChain, MCP, XGBoost, SageMaker, Terraform, Microservices, IoT, Apache Flink, Prometheus, DataDog</p>
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