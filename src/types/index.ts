export type WorkflowStatus = 'healthy' | 'warning' | 'critical';

export interface Workflow {
  id: string;
  name: string;
  status: WorkflowStatus;
  lastRun: string;
  successRate: number;
}

export interface Metric {
  title: string;
  value: string | number;
  trend: string;
  isCritical?: boolean;
}