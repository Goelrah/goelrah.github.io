# Project Portfolio — Case Studies

> 10 production systems at enterprise scale — each solving real business problems with measurable outcomes.

---

## 1. AskGenie — AI-Powered Ticket Resolution

**The Problem:** A large enterprise support organization received 6,000 tickets every day. Engineers spent hours reading, diagnosing, and resolving repetitive issues — password resets, service restarts, configuration errors. It was expensive, slow, and burning out the team.

**The Solution:** Built AskGenie, an AI assistant that reads incoming tickets, searches through thousands of internal documents (runbooks, wikis, past tickets), and generates a resolution. If the AI is 88% or more confident in its answer, it auto-resolves the ticket. If not, it hands the ticket to a human engineer with a pre-built summary and suggested fix — cutting their diagnosis time in half.

**My Role:** Led the end-to-end design and delivery of the RAG (Retrieval-Augmented Generation) pipeline. Defined the 88% confidence threshold by analyzing historical ticket resolution accuracy. Drove adoption across SRE and support teams. Integrated Kiro CLI to accelerate engineering velocity during development.

**Results:**
- 4,500 tickets/day resolved without human intervention
- 25% reduction in manual engineering effort
- $2.3M annual ROI
- Engineers freed up to focus on complex, high-value incidents

`#GenAI` `#RAG` `#AWS-Bedrock` `#OpenSearch` `#Lambda` `#SQS` `#NLP` `#LLM` `#SRE-Automation` `#Ticket-Resolution`

---

## 2. Ada — Procurement AI Auto-Approval

**The Problem:** Across 1,200+ global facilities, 3,500 managers placed 6,000 procurement orders daily — mops, light bulbs, HVAC filters. Every single order, no matter how small, needed a manager's manual approval. Managers wasted 1–2 hours per day clicking "approve" on routine $50 orders instead of running their facilities. Annual cost of this manual bottleneck: $14M.

**The Solution:** Built an ML-powered auto-approval engine. Orders under $10K are scored by an XGBoost model trained on 2+ years of historical data. If the model is 92% confident the order is legitimate, it's auto-approved instantly. Orders above $10K always go to a human. The system also catches fraud — like someone splitting a $50K order into five $9,999 orders to dodge the threshold.

**My Role:** Scaled Ada from concept to production across 1,200+ facilities. Defined the 0.92 approval probability threshold in collaboration with the compliance team (below 0.92, false-approval rate exceeded their 2% tolerance). Managed the three-system Ada ecosystem (Procurement AI, Network Authorization, PayStation Operations).

**Results:**
- 92% of routine orders auto-approved (target was 85%)
- $10.5M/year in cost savings
- Fraud detection catches 95% of split-order attempts
- Approval latency dropped from 15 minutes to 300 milliseconds

`#MachineLearning` `#XGBoost` `#AWS-SageMaker` `#StepFunctions` `#DynamoDB` `#Procurement-AI` `#Fraud-Detection` `#Human-in-the-Loop`

---

## 3. MCP PMO Automation — AI-Driven Project Prioritization

**The Problem:** Every quarter, 200 program managers had to rank nearly 500 projects competing for limited budget. Each manager spent 4 hours in spreadsheets, applying inconsistent scoring criteria. Portfolio review meetings dragged on for 3–4 hours with subjective debates. Decisions were often driven by politics rather than data. Annual cost of this manual process: $256K in manager time alone.

**The Solution:** Built an AI-powered prioritization system using the RICE framework (Reach × Impact × Confidence / Effort) exposed through a Model Context Protocol (MCP) server. The AI suggests initial scores by comparing new projects against historical outcomes, while managers retain full override authority. One server connects to multiple AI clients — IDE, CLI, Slack bots — with zero custom integration per client.

**My Role:** Designed the hybrid architecture combining deterministic RICE scoring with LLM-enhanced suggestions. Built the MCP server exposing tools, resources, and prompts to multiple AI clients. Deployed context-based prompt engineering to serve the TPM/PM community.

**Results:**
- Scoring time dropped from 4 hours to 1 hour per manager (75% reduction)
- Cross-team scoring variance fell to ~10% (previously unmeasured and high)
- Portfolio review meetings shortened to 1.5 hours
- AI suggestions accepted 72% of the time
- $192K annual savings in manager time

`#MCP` `#Model-Context-Protocol` `#RICE-Algorithm` `#GenAI` `#AWS-Bedrock` `#Lambda` `#DynamoDB` `#Prompt-Engineering` `#Portfolio-Management`

---

## 4. SafeDrive — Real-Time Driver Safety Monitoring

**The Problem:** A last-mile delivery fleet with tens of thousands of drivers faced serious safety challenges. Between 2019–2021, there were 5,600 accidents, 3,900 dog assaults, and 3,300 customer assaults reported by 47,000 drivers. Safety monitoring was fragmented — some vehicles had cameras, some had telematics, many had nothing. Incident reporting was entirely manual (phone calls), making the approach reactive rather than preventive. Annual incident cost: $6M.

**The Solution:** Built SafeDrive, a real-time safety platform that processes 10,000 driving events per second using Apache Flink stream processing. Each driver gets a composite risk score combining driving behavior (40%), route risk (25%), weather conditions (20%), and fatigue estimate (15%). Four-tier alerts (GREEN → YELLOW → ORANGE → RED) trigger graduated responses — from gentle reminders to mandatory stops — with cooldown periods to prevent alert fatigue.

**My Role:** Led the design of the composite risk scoring algorithm, calibrated on 12 months of historical incident data. Drove integration across multiple data sources (Netradyne cameras, Geotab telematics, Rabbit devices). Established the LMAQ quality control framework for alert accuracy auditing. Managed stakeholder alignment across Safety Tech, DSP Standards, and Fleet Products.

**Results:**
- 24% reduction in serious incidents (target was 20%)
- 18% improvement in on-time delivery reliability
- 1.5-second alert-to-intervention latency
- Only 3% driver alert fatigue complaints (target was <5%)

`#Real-Time-ML` `#Apache-Flink` `#AWS-Kinesis` `#Stream-Processing` `#IoT` `#DynamoDB` `#WebSocket` `#Driver-Safety` `#Telematics`

---

## 5. Procurement Advisor — IoT-Powered Smart Ordering

**The Problem:** Across 1,200+ facilities, procurement was reactive — managers manually checked inventory and ordered supplies based on gut feel. This led to 500 stock-outs per month (each costing ~$2,000 in expedited shipping and delays), totaling $12M annually. Meanwhile, $250M+ in annual procurement spend had minimal data-driven optimization. Analysts spent 500 hours per day on manual ordering.

**The Solution:** Deployed 78,000 IoT sensors (weight sensors, RFID scanners, environmental monitors) across facilities. Sensor data feeds into Amazon Forecast, which uses DeepAR+ and CNN-QR models to predict demand for 600,000 item-facility combinations. When inventory drops below the P95 confidence threshold, the system auto-generates a purchase order in under 2 seconds. Orders over $50K still route to human approval.

**My Role:** Architected the end-to-end IoT-to-PO pipeline. Defined the P95 confidence interval threshold balancing stock-out risk against carrying cost. Managed $250M+ annual spend with full vendor management oversight. Drove adoption across facility operations teams.

**Results:**
- 40% reduction in stock-outs (target was 30%)
- 93% auto-order accuracy
- $7.5M in vendor cost optimization (3% savings on $250M spend)
- 2-second sensor-to-purchase-order latency

`#IoT` `#AWS-IoT-Core` `#Amazon-Forecast` `#ML` `#DeepAR` `#Time-Series` `#Supply-Chain` `#DynamoDB` `#Lambda` `#Smart-Ordering`

---

## 6. EagleEye — Multi-Market Observability Platform

**The Problem:** Operations spanned 15+ international markets, each with its own warehouse, delivery, and customer service systems — but no unified view. When throughput dropped in one market, it took 45 minutes just to detect the issue and another 2–4 hours to resolve it. Each incident cost ~$500/minute in delayed deliveries and SLA breaches. Annual impact: $3–5M in operational losses.

**The Solution:** Built EagleEye, a dual observability platform tracking 2.5M+ data points per day across all markets. Engineers use Prometheus on EKS for high-resolution metrics (15-second scrape intervals, custom PromQL queries). Leadership uses DataDog for polished dashboards with ML-based anomaly detection. Both systems feed into a unified alerting pipeline via PagerDuty and Slack.

**My Role:** Designed the dual-stack observability architecture (Prometheus + DataDog) to serve different audiences. Led the integration of Kinesis-based data ingestion across 15+ market systems. Drove the transition from reactive weekly reports to real-time automated incident correlation.

**Results:**
- 20% improvement in operational throughput
- Mean Time to Detect dropped from 45 minutes to 15 minutes
- Mean Time to Resolve dropped from 3 hours to 1 hour
- Automated cross-market incident correlation (previously manual)

`#Observability` `#Prometheus` `#DataDog` `#Grafana` `#AWS-EKS` `#Kinesis` `#MLOps` `#Monitoring` `#SRE` `#Multi-Market`

---

## 7. Campaign Automation — ML Segmentation + GenAI Content

**The Problem:** Marketing campaigns were one-size-fits-all. The same email, same coupon, same message went to every customer — whether they were a loyal high-spender or a dormant user about to churn. Baseline ROI was just $2 per $1 spent. The company was losing 1 million customers per year (20% churn rate across 5M users). Creating campaign content took 2–3 days of manual work per campaign.

**The Solution:** Built a Campaign Automation engine that uses K-Means clustering to segment 5M users into 6 behavioral buckets based on purchase patterns, loyalty, and churn risk. Then GenAI (Bedrock Claude) generates 90 personalized content variants per campaign (5 variants × 6 buckets × 3 channels). A multi-armed bandit algorithm continuously optimizes which variant performs best for each segment.

**My Role:** Led the design and delivery of the ML pipeline (K-Means clustering, XGBoost churn prediction) and GenAI content generation system. Integrated with Adobe Campaign Manager for execution. Managed client stakeholders across the consulting engagement under the Converge framework.

**Results:**
- Campaign ROI improved 2.5x (from $2:$1 to $5:$1)
- Customer churn reduced by 12% (target was 8%)
- Content creation time dropped from 2 days to 30 minutes
- 90 A/B test variants per campaign (previously 2–3)

`#MachineLearning` `#K-Means` `#GenAI` `#AWS-SageMaker` `#AWS-Bedrock` `#Personalization` `#Marketing-Automation` `#Churn-Prediction` `#A/B-Testing`

---

## 8. Branchless Banking — AI Avatars for Financial Inclusion

**The Problem:** Millions of people in rural and semi-urban regions had no access to banking. Physical branches were too expensive to build in low-population areas. Existing mobile banking apps failed because 60% of the target users were semi-literate and couldn't navigate text-based interfaces. Low-connectivity regions (2G only) made cloud-dependent apps unusable 30% of the time. Serving this population required 500 physical agents at $6.8M/year plus $2M in infrastructure.

**The Solution:** Built a branchless banking platform using facial recognition and AI avatars. Users authenticate by looking at their phone camera (no passwords, no text input). An AI avatar speaks to them in their local language, guiding them through transactions via voice. The app works offline — transactions queue locally with AES encryption and sync when connectivity returns. A 92% facial similarity threshold balances fraud prevention (0.1% false accept rate) against inclusion (3% false reject rate, with SMS OTP fallback).

**My Role:** Defined the false-rejection threshold balancing fraud prevention against financial inclusion in low-connectivity regions. Led the offline-first architecture design ensuring banking access even on 2G networks. Managed the end-to-end delivery from concept through rollout.

**Results:**
- 200K users enrolled (target was 150K)
- 40% reduction in operational overhead (target was 30%)
- 95% offline transaction success rate
- 0.1% false accept rate (fraud) — well within tolerance
- 50K daily transactions

`#Computer-Vision` `#AWS-Rekognition` `#Amazon-Lex` `#Amazon-Polly` `#TFLite` `#Facial-Recognition` `#AI-Avatars` `#Offline-First` `#Financial-Inclusion` `#Mobile-Banking`

---

## 9. AR/VR Smart Manufacturing — Predictive Diagnostics

**The Problem:** Manufacturing facilities experienced 500 hours/year of unplanned downtime because maintenance was reactive — machines ran until they broke. Each hour of downtime cost $10,000 in lost production and emergency repairs, totaling $5M annually. Technicians took 3–4 hours to diagnose and fix issues because they had to manually look up paper manuals. New technicians needed 6–12 months of training to become proficient.

**The Solution:** Deployed 5,000 IoT sensors across 500 machines feeding into edge ML models (LSTM autoencoders) that detect anomalies in under 5 milliseconds — before failures happen. AR headsets overlay step-by-step repair instructions directly onto the machine, showing parts lists, inventory status, and the last 5 repair histories. A risk matrix determines whether the system auto-corrects (anomaly score below 0.6) or calls a human (above 0.6).

**My Role:** Defined the autonomous vs. human intervention boundaries — the 0.6 anomaly score threshold was calibrated on 6 months of operational data where autonomous corrections achieved 99.5% success rate. Led the AR/VR integration with existing IoT and MES platforms. Managed the edge-to-cloud ML pipeline architecture.

**Results:**
- 20% reduction in unplanned downtime (target was 15%)
- 30% faster repair times (MTTR reduction, target was 20%)
- 92% anomaly detection precision
- 99.5% autonomous correction success rate
- $40K/year saved on emergency parts premiums

`#AR/VR` `#Edge-AI` `#AWS-Greengrass` `#SageMaker-Neo` `#IoT` `#LSTM` `#Predictive-Maintenance` `#Digital-Twins` `#Smart-Manufacturing` `#Computer-Vision`

---

## 10. Naazir — $5.3B Payment Modernization

**The Problem:** A 15-year-old monolithic payment system processed $5.3B annually but was crumbling. Adding a new payment method took 6–9 months. Multi-currency reconciliation required 3 full-time employees doing manual work. The system had ~4 hours of downtime per year (vs. the 52-minute target). Every code change risked regression because 15 years of patches had made the codebase fragile. Compliance gaps (PCI-DSS, GDPR) were growing year over year.

**The Solution:** Executed a strangler fig migration — replacing the monolith piece by piece with microservices, never putting more than 5% of transaction volume at risk. Each microservice handles one concern (card processing, bank transfers, wallet, ledger). Distributed transactions use the Saga pattern with compensating transactions on failure. Shadow mode ran the new system in parallel with the old one, comparing results before any traffic shifted. Canary rollout: 1% → 5% → 25% → 50% → 100%.

**My Role:** Principal Program Lead for the entire $5.3B modernization. Led executive stakeholder management across C-suite, engineering, and finance tracks. Owned the full program roadmap across parallel delivery streams. Drove the phase-gate approval process where the finance team signed off on each migration stage. Managed the 70+ stakeholder discovery process across Worldwide Operations, Finance, Procurement, and Accounting.

**Results:**
- 99.995% availability (exceeded 99.99% target)
- New payment methods onboarded in 3 weeks (was 6–9 months)
- Migration completed in 18 months (target was 24 months)
- Zero customer-facing incidents during migration
- P95 transaction latency: 800ms

`#Microservices` `#Saga-Pattern` `#AWS-ECS-Fargate` `#StepFunctions` `#Aurora-PostgreSQL` `#DynamoDB` `#Payment-Modernization` `#PCI-DSS` `#FinTech` `#Program-Management`

---

## Technology Stack Summary

| Category | Technologies |
|---|---|
| AI/ML & GenAI | AWS Bedrock, SageMaker, OpenSearch, RAG, XGBoost, K-Means, LSTM, DeepAR, Amazon Forecast, LangChain, MCP |
| Compute & Containers | Lambda, ECS Fargate, EKS, Greengrass |
| Data & Storage | DynamoDB, Aurora PostgreSQL, S3, OpenSearch Serverless, Kinesis |
| IoT & Edge | IoT Core, IoT Greengrass, SageMaker Neo, TFLite |
| Observability | Prometheus, DataDog, Grafana, CloudWatch, X-Ray |
| AI Services | Rekognition, Lex, Polly, Bedrock (Claude) |
| Orchestration | Step Functions, SQS, SNS, EventBridge |
| Security | WAF, KMS, Cognito, IAM |
| DevOps | CI/CD, Terraform, CloudFormation |

---

## Impact at a Glance

| Metric | Value |
|---|---|
| AWS Cloud Portfolio Managed | $165M across 85+ teams |
| Largest Program Delivered | $5.3B payment modernization |
| GenAI Tickets Auto-Resolved | 4,500/day |
| Procurement AI Savings | $10.5M/year |
| IoT Devices Managed | 78,000+ sensors |
| Markets Monitored | 15+ countries |
| Users Enrolled (Banking) | 200,000 |
| Incident Reduction (Safety) | 24% |
| Campaign ROI Improvement | 2.5x |
| Team Built | 45-member engineering practice |
