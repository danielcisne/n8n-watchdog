import type { Workflow } from '../types';

export const mockWorkflows: Workflow[] = [
  { id: '1', name: 'Lead Enrichment (Lujo CRM)', status: 'healthy', lastRun: '2 mins ago', successRate: 99.8 },
  { id: '2', name: 'Stripe Payment Sync', status: 'healthy', lastRun: '5 mins ago', successRate: 100 },
  { id: '3', name: 'Hubspot Backup', status: 'warning', lastRun: '1 hour ago', successRate: 85.5 },
  { id: '4', name: 'Legacy Email Scraper', status: 'critical', lastRun: '10 secs ago', successRate: 42.0 },
];