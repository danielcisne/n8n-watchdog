import { Activity, AlertTriangle, CheckCircle, Clock, ServerCrash } from 'lucide-react';
import { mockWorkflows } from './data/mockData';
import type { WorkflowStatus } from './types';
import { cn } from './utils/cn';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 p-6 md:p-10 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Header Industrial */}
      <header className="mb-8 border-b border-slate-800 pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white flex items-center gap-3 tracking-tight">
            <Activity className="text-orange-500 w-6 h-6" />
            n8n Watchdog Console
          </h1>
          <p className="text-sm text-slate-500 mt-1 tracking-wide uppercase">System Monitoring & Auto-Recovery</p>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-medium bg-slate-900 px-4 py-2 rounded-md border border-slate-800 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          API STATUS: CONNECTED
        </div>
      </header>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Total Executions (24h)" value="14,205" icon={<Activity className="text-slate-500" />} trend="+12%" />
        <MetricCard title="Avg. Resolution Time" value="1.2s" icon={<Clock className="text-slate-500" />} trend="-5%" />
        <MetricCard title="Critical Failures" value="3" icon={<ServerCrash className="text-red-500" />} trend="Action Required" isCritical />
      </div>

      {/* Main Panel: Workflow Health */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <h2 className="text-lg font-medium text-white">Active Workflows Health</h2>
        </div>
        <div className="divide-y divide-slate-800/50">
          {mockWorkflows.map((workflow) => (
            <div key={workflow.id} className="p-6 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
              <div className="flex items-center gap-4">
                <StatusIcon status={workflow.status} />
                <div>
                  <h3 className="font-medium text-slate-200">{workflow.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">Last execution: {workflow.lastRun}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-white">{workflow.successRate}%</span>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Success Rate</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sub-componentes
function MetricCard({ title, value, icon, trend, isCritical = false }: { title: string, value: string, icon: React.ReactNode, trend: string, isCritical?: boolean }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg relative overflow-hidden group">
      <div className={cn("absolute top-0 left-0 w-1 h-full", isCritical ? 'bg-red-500' : 'bg-slate-700')}></div>
      <div className="flex justify-between items-start mb-4 text-slate-400 group-hover:text-slate-300 transition-colors">
        <h3 className="text-sm font-medium tracking-wide">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
        <span className={cn("text-xs font-medium px-2 py-1 rounded border", isCritical ? 'text-red-400 border-red-900/50 bg-red-950/30' : 'text-emerald-400 border-emerald-900/50 bg-emerald-950/30')}>
          {trend}
        </span>
      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: WorkflowStatus }) {
  switch (status) {
    case 'healthy': return <CheckCircle className="text-emerald-500 w-5 h-5" />;
    case 'warning': return <AlertTriangle className="text-yellow-500 w-5 h-5" />;
    case 'critical': return <ServerCrash className="text-red-500 w-5 h-5" />;
  }
}