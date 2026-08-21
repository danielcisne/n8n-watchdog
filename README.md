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
- Component-based UI architecture.
- Conditional styling for different workflow states.

## Technical Architecture

The application is structured around a separation between data models, mock data, utility functions, and UI components.

```text
n8n Watchdog Console
│
├── src/
│   ├── components/
│   │   └── Reusable dashboard UI components
│   │
│   ├── data/
│   │   └── Mock workflow and metric data
│   │
│   ├── types/
│   │   └── TypeScript data contracts
│   │
│   ├── lib/
│   │   └── UI utility functions
│   │
│   └── App.tsx
│       └── Main dashboard application
│
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── vite.config.ts
└── eslint.config.js
```

### Component Architecture

The UI follows a component-based structure that separates reusable presentation components from application state and data definitions.

Examples include:

- Metric cards
- Workflow status indicators
- Dashboard sections
- Reusable UI utilities

This structure keeps the interface maintainable and allows additional monitoring features to be added without coupling the entire application to a single component.

### Type Safety

The application uses TypeScript interfaces to define workflow and metric data structures.

This provides consistent contracts between the mock data layer and the UI components and reduces the risk of inconsistent data being passed through the application.

### Styling

Tailwind CSS is used to implement the dashboard interface and its operational status states.

The visual design uses a high-contrast industrial monitoring aesthetic with an emphasis on data density, hierarchy, and rapid status recognition.

### Data Layer

The current implementation uses mock workflow data.

The data layer is intentionally separated from the UI so that the mock implementation can be replaced by a real data source in a future version.

Potential integrations could include:

- n8n webhooks
- n8n API endpoints
- External monitoring APIs
- Custom backend services

The current repository does not claim to provide a live n8n API integration.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- clsx
- tailwind-merge
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

This is intentional: the repository focuses on the frontend architecture and observability experience rather than claiming a production connection to an n8n instance.

A future implementation could replace the mock data layer with real execution data without requiring a complete redesign of the dashboard components.

## Project Status

**Functional Prototype**

The dashboard interface and frontend architecture are implemented and functional.

The current version uses mock data and does not establish a live connection to an n8n instance.

## What This Project Demonstrates

This project demonstrates the ability to:

- Translate an operational monitoring requirement into a focused web interface.
- Build a React application using TypeScript.
- Design reusable UI components.
- Define typed data contracts.
- Separate application data from presentation components.
- Build dashboards around operational metrics.
- Use conditional styling to communicate system states.
- Structure a mock data layer for future API integration.
- Develop and iterate on an AI-assisted coding workflow.
- Produce a maintainable frontend foundation for future backend integration.

## AI-Assisted Development

This project was developed using AI-assisted programming workflows.

AI was used as a development accelerator for tasks including:

- Component implementation
- UI development
- TypeScript implementation
- Debugging
- Refactoring
- Iterative feature development

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
