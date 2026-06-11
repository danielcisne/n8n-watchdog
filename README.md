n8n Watchdog Console

A custom observability dashboard for n8n built with React, TypeScript, and Tailwind CSS. This project addresses the critical need for platform transparency, enabling stakeholders to monitor workflow health, execution success rates, and system stability at a glance.

Business Case
Platform engineers and business stakeholders often lack visibility into automated processes. Relying on the native n8n interface for monitoring is insufficient for non-technical teams and lacks the high-level aggregation needed for proactive error resolution. This dashboard bridges that gap, transforming raw execution data into actionable intelligence.

Technical Architecture & Best Practices
As a Senior Full Stack implementation, this dashboard is designed for modularity and performance:

Modular UI Architecture: Built with a "Component-First" strategy, separating data contracts (types), mocked API layers, and UI components (MetricCard, StatusIcon) to ensure the codebase remains readable and maintainable as features expand.

Strict Type Safety: Leverages TypeScript interfaces (Workflow, Metric) to guarantee consistent data structures across the application, eliminating runtime "undefined" errors common in standard JavaScript dashboards.

Industrial UI Design: Utilizes Tailwind CSS to implement a high-contrast "Industrial" aesthetic, optimized for monitoring environments where data density and clarity are paramount.

Dynamic Styling Utilities: Implements custom cn utility (using clsx and tailwind-merge) to safely merge conditional classes, ensuring UI states (healthy/warning/critical) are rendered cleanly without style conflicts.

Efficient Data Handling: Mocked API layer structured to be easily replaceable with real-world fetch or axios calls to n8n Webhooks or external APIs.

Installation & Local Development
Clone the repository:

git clone https://github.com/danielcisne/n8n-watchdog.git
cd n8n-watchdog