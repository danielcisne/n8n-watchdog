# n8n Watchdog Console

A React-based workflow observability dashboard designed to provide a focused view of workflow health, execution metrics, and operational status.

The current version is a functional frontend prototype that uses mock data to demonstrate the dashboard experience and monitoring workflow. The data layer is structured so it can be replaced by a real n8n API, webhook, or external monitoring service in a future implementation.

## Business Case

Platform engineers and business stakeholders often need a simpler operational view of automated workflows than the native automation platform interface provides.

n8n Watchdog explores how workflow execution data can be transformed into a focused observability dashboard that makes operational status, execution metrics, and potential issues easier to understand at a glance.

The project focuses on presenting information in a format suitable for both technical and non-technical stakeholders.

## Current Capabilities

- Dashboard for workflow health and execution metrics.
- Visual status indicators for workflow conditions.
- Execution success and failure metrics.
- High-density monitoring interface designed for operational visibility.
- Responsive React-based interface.
- Typed data models using TypeScript.
- Mock data layer representing workflow and metric information.
- Reusable UI patterns for dashboard metrics and workflow status.
- Conditional styling for different workflow states.

## Technical Architecture

The application is intentionally lightweight and separates mock data, TypeScript data contracts, UI utilities, and the main dashboard flow.

```text
n8n Watchdog Console
│
├── src/
│   ├── data/
│   │   └── mockData.ts
│   │       └── Mock workflow data
│   │
│   ├── types/
│   │   └── index.ts
│   │       └── TypeScript data contracts
│   │
│   ├── utils/
│   │   └── cn.ts
│   │       └── Tailwind class merging utility
│   │
│   ├── App.tsx
│   │   └── Main dashboard and UI patterns
│   │
│   ├── index.css
│   │   └── Global Tailwind styles
│   │
│   └── main.tsx
│       └── Application entry point
│
├── public/
│   └── favicon.svg
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

### Main Application Flow

The dashboard currently follows this frontend flow:

```text
Mock workflow data
        ↓
Typed workflow models
        ↓
Dashboard state and presentation
        ↓
Workflow status indicators
        ↓
Execution metrics
        ↓
Operational dashboard
```

### App.tsx

The main application coordinates the dashboard presentation and renders:

- Workflow health information.
- Execution metrics.
- Status indicators.
- Monitoring-oriented UI states.
- The current demo mode indicator.

The dashboard uses reusable UI patterns such as `MetricCard` and `StatusIcon` within the main application file.

### Data Layer

The current implementation uses a dedicated mock data module:

```text
src/data/mockData.ts
```

This separation allows the dashboard UI to remain independent from the source of workflow data.

A future implementation could replace the mock data source with real execution data without requiring a complete redesign of the presentation layer.

### Type System

Workflow data is defined through TypeScript types in:

```text
src/types/index.ts
```

The `WorkflowStatus` union type restricts workflow states to:

- `healthy`
- `warning`
- `critical`

The `Workflow` interface provides a typed contract for workflow records displayed by the dashboard.

### Styling Utilities

The project uses a small `cn` utility based on `clsx` and `tailwind-merge` to handle conditional Tailwind CSS classes.

This is used for UI states such as critical and non-critical metrics.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- clsx
- tailwind-merge
- lucide-react
- ESLint

## Local Development

### Requirements

- Node.js
- npm

### Installation

```bash
git clone https://github.com/danielcisne/n8n-watchdog.git
cd n8n-watchdog
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### Lint

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

The production build can be previewed locally with:

```bash
npm run preview
```

## Demo Data

The current dashboard uses mock data to demonstrate workflow monitoring and visualization.

This is intentional. The repository focuses on the frontend architecture and observability experience rather than claiming a production connection to an n8n instance.

The current interface explicitly indicates:

```text
DEMO MODE: MOCK DATA
```

A future implementation could replace the mock data layer with real execution data from an n8n API, webhook, or external monitoring service.

## n8n Integration

The current version does not establish a live connection to an n8n instance.

The project is designed as a frontend observability prototype whose data layer can be replaced by a real integration in a future version.

Potential integration approaches include:

- n8n API endpoints.
- n8n webhooks.
- A dedicated backend service.
- External monitoring or observability APIs.

Keeping the data source separate from the dashboard presentation allows these integrations to be introduced without coupling the UI directly to a specific backend implementation.

## Project Status

**Functional Frontend Prototype**

The dashboard interface and frontend architecture are implemented and functional.

The current version uses mock data and does not provide live n8n workflow monitoring.

## What This Project Demonstrates

This project demonstrates the ability to:

- Translate an operational monitoring requirement into a focused web interface.
- Build a React application using TypeScript.
- Define typed data contracts.
- Build dashboards around operational metrics.
- Use conditional styling to communicate workflow states.
- Separate mock data from presentation logic.
- Create a frontend architecture that can accommodate future API integration.
- Build responsive interfaces with Tailwind CSS.
- Use modern React and Vite tooling.
- Develop and iterate on an AI-assisted coding workflow.

## AI-Assisted Development

This project was developed using AI-assisted programming workflows.

AI was used as a development accelerator for tasks including:

- UI implementation.
- TypeScript development.
- Component and interaction implementation.
- Debugging.
- Refactoring.
- Iterative feature development.

The implementation was reviewed and adapted to maintain control over the application's architecture, behavior, and technical direction.

## Future Development

Potential next steps include:

- Connect the dashboard to a live n8n instance.
- Retrieve real workflow execution data.
- Add execution history and filtering.
- Implement workflow-level error details.
- Add configurable monitoring thresholds.
- Add alerting and notification capabilities.
- Introduce backend authentication and secure API handling.
- Implement automated recovery workflows where appropriate.

## License

This repository is provided for portfolio and demonstration purposes.
