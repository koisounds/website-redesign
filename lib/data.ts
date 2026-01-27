export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  dateRange: string;
  summary: string;
  highlights: string[];
};

export type Skills = Array<{ title: string; items: string[] }>;

export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  slug?: string;
  details?: {
    overview?: string;
    challenges?: string[];
    solutions?: string[];
    results?: string[];
    architecture?: string;
  };
};

const data = {
  skills: [
    {
      title: "Cloud Platforms",
      items: [
        "Google Cloud (GCP)",
        "AWS",
        "Cloud Run",
        "Cloud SQL",
        "VPC design",
        "Load Balancing",
        "Serverless architectures",
        "IAM policy design",
      ],
    },
    {
      title: "Automation & IaC",
      items: [
        "Terraform modules",
        "CI/CD pipelines",
        "GitHub Actions",
        "Dependabot",
        "Docker",
        "GitHub Advanced Security",
      ],
    },
    {
      title: "Security & Compliance",
      items: [
        "PCI DSS & ISO 27001",
        "IAM least privilege",
        "Disaster recovery playbooks",
        "Security metrics & reporting",
        "Threat mitigation",
        "Documentation & onboarding",
      ],
    },
    {
      title: "DevOps Practices",
      items: [
        "Cross-team collaboration",
        "Incident response",
        "Monitoring & observability",
        "Workflow automation",
        "Team leadership",
        "Process optimization",
      ],
    },
    {
      title: "Programming",
      items: [
        "Python",
        "JavaScript/Node.js",
        "Bash",
        "SQL",
        "Linux/Unix",
        "Remix/React",
      ],
    },
  ] satisfies Skills,
  experience: [
    {
      company: "Living Libations",
      location: "Remote",
      role: "DevOps Engineer – Cloud Security (GCP)",
      dateRange: "Jan 2024 – Aug 2025",
      summary:
        "Led DevSecOps initiatives securing and scaling GCP workloads, built automation pipelines, and embedded compliance across development teams.",
      highlights: [
        "Embedded GitHub Advanced Security to block 20+ high-risk vulnerabilities pre-production.",
        "Elevated security score from 79% to 92% in a month via Coalition Control, Spycloud, and Security Metrics.",
        "Instituted weekly Dev/Ops syncs cutting incident resolution time by 30%.",
        "Designed IAM least-privilege policies and custom roles, reducing security exceptions by 60%.",
        "Built GitHub Actions + Docker pipelines to Cloud Run, eliminating manual builds and errors.",
        "Rolled out Terraform modules shrinking provisioning from days to hours.",
        "Hardened load balancers against DDoS, keeping 99.99% uptime at peak.",
        "Authored security & compliance handbook reducing onboarding by 40%.",
        "Tested disaster recovery playbook lowering downtime risk to under 4 hours.",
        "Locked down databases with private networking, firewalling, and IAM tags to remove public exposure.",
        "Hosted monthly security reviews to eliminate all high/critical vulnerabilities.",
        "Developed HMAC-encrypted coupon validation preventing fraud and revenue leakage.",
      ],
    },
    {
      company: "Sunrise Land LLC",
      location: "Austin, TX",
      role: "Owner / Operator",
      dateRange: "Jan 2022 – Aug 2024",
      summary:
        "Founded and scaled a land brokerage, managing acquisitions, compliance, and team operations.",
      highlights: [
        "Closed multiple five-figure deals while maintaining full regulatory compliance.",
        "Built and led a 3-person team overseeing contracts, sales, and operations.",
      ],
    },
    {
      company: "Cipher Billing",
      location: "Remote",
      role: "Utilization Review Specialist",
      dateRange: "Sep 2023 – Jan 2024",
      summary:
        "Streamlined utilization review workflows to accelerate approvals and ensure proper care placement.",
      highlights: [
        "Coordinated with providers to ensure accurate placement decisions.",
        "Reduced approval turnaround by 20% through process improvements.",
      ],
    },
    {
      company: "Shift Billing",
      location: "Costa Mesa, CA",
      role: "Utilization Review Manager",
      dateRange: "Apr 2020 – May 2023",
      summary:
        "Managed utilization review operations, delivering compliant, efficient reviews at scale.",
      highlights: [
        "Built training programs and SOPs that improved audit scores.",
        "Led cross-department reviews reducing placement errors by 15%.",
        "Hired and mentored a 3-person review team.",
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      name: "Secure Cloud SQL Deployment with IAM Auth",
      description:
        "CI/CD pipeline on GCP using GitHub Actions, Terraform, Cloud Run, and IAM-authenticated Cloud SQL with restricted networking. Delivering fast, consistent deployments with automated security controls.",
      stack: [
        "GCP",
        "Terraform",
        "GitHub Actions",
        "Cloud Run",
        "Cloud SQL (IAM Auth)",
        "GitHub Advanced Security",
      ],
      slug: "secure-cloud-sql-deployment",
      details: {
        overview:
          "A comprehensive DevSecOps solution that automates secure database deployments on Google Cloud Platform. This project implements IAM-based authentication for Cloud SQL, eliminating the need for database passwords and significantly improving security posture. The entire infrastructure is managed through Infrastructure as Code (Terraform) and deployed via automated CI/CD pipelines.",
        challenges: [
          "Eliminating database password management and reducing attack surface",
          "Ensuring secure network connectivity between Cloud Run and Cloud SQL",
          "Automating deployments while maintaining security compliance",
          "Implementing least-privilege IAM policies for database access",
          "Creating reusable Terraform modules for consistent deployments",
        ],
        solutions: [
          "Implemented IAM database authentication, removing password-based access entirely",
          "Configured private IP networking with VPC peering for secure database connections",
          "Built GitHub Actions workflows that automatically test, build, and deploy infrastructure",
          "Designed custom IAM roles with minimal required permissions following least-privilege principles",
          "Created modular Terraform configurations enabling rapid, consistent provisioning across environments",
          "Integrated GitHub Advanced Security to scan for vulnerabilities before deployment",
        ],
        results: [
          "Reduced database provisioning time from days to hours through automation",
          "Eliminated all password-based database access, improving security posture",
          "Achieved 100% infrastructure-as-code coverage with zero manual configuration",
          "Enabled consistent deployments across dev, staging, and production environments",
          "Blocked 20+ high-risk vulnerabilities pre-production through automated security scanning",
        ],
        architecture:
          "The architecture leverages Cloud Run for serverless container execution, connected to Cloud SQL via private IP networking. Terraform manages all infrastructure components including VPC networks, Cloud SQL instances, IAM roles, and Cloud Run services. GitHub Actions orchestrates the entire CI/CD pipeline, running security scans, validating Terraform configurations, and deploying changes automatically upon merge to main.",
      },
    },
    {
      name: "Secure AWS VPC with Terraform",
      description:
        "Secure-by-default AWS VPC built with Terraform: public and private subnets, route tables, NACLs, and a baseline security group. Private subnets have no internet route; separate tiers and no public SSH by default.",
      stack: ["AWS", "Terraform", "VPC", "Networking", "Security", "IaC"],
      slug: "secure-aws-vpc-terraform",
      details: {
        overview:
          "A secure-by-default AWS VPC architecture built entirely with Terraform. This project implements public and private subnets with proper route tables, network ACLs (NACLs), and a baseline security group. Private subnets have no direct internet route, enabling separate tiers for application and data layers. Public SSH is disabled by default for improved security posture.",
        challenges: [
          "Designing a VPC layout that separates public and private workloads",
          "Configuring route tables so private subnets have no internet route",
          "Defining NACLs and security groups for defense in depth",
          "Keeping public SSH disabled by default while allowing managed access",
        ],
        solutions: [
          "Defined public and private subnets with distinct route tables",
          "Used Terraform modules for route tables, NACLs, and security groups",
          "Enforced no-internet route on private subnets via route table design",
          "Created baseline security group with minimal ingress/egress rules",
        ],
        results: [
          "Clear separation between public and private tiers",
          "Private subnets isolated from direct internet access",
          "Repeatable, auditable network setup via Terraform",
          "Secure-by-default baseline suitable for production use",
        ],
        architecture:
          "The architecture uses Terraform to provision a VPC with public and private subnets across availability zones. Public subnets attach to an internet gateway; private subnets use NAT or no internet route. Route tables, NACLs, and a baseline security group are defined in code. All networking is managed as Infrastructure as Code for consistency and compliance.",
      },
    },
  ] satisfies Project[],
  education: [
    {
      school: "Old Dominion University",
      credential: "B.S. Electrical Engineering Technology",
      year: "2019",
    },
    {
      school: "Tidewater Community College",
      credential: "A.S. Social Sciences",
    },
  ],
  certifications: [
    "Google Professional Security Engineer",
    "Google Associate Cloud Engineer",
    "CompTIA Security+",
  ],
};

export default data;
