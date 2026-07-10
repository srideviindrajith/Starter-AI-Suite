import { useState } from 'react';
import {
  Bell,
  Mail,
  MessageCircle,
  CheckSquare,
  Settings,
  Clock,
  ChevronRight,
  Zap,
  RefreshCw,
  Plus,
} from 'lucide-react';
import { Card, Button } from '../ui';
import { workflowTriggers, automationStatus } from '../../data/mockData';

const iconMap: Record<string, typeof Bell> = {
  lead: Bell,
  email: Mail,
  whatsapp: MessageCircle,
  task: CheckSquare,
};

const colorMap: Record<string, { bg: string; icon: string; text: string }> = {
  lead: { bg: 'bg-emerald-500/20', icon: 'text-emerald-400', text: 'text-emerald-400' },
  email: { bg: 'bg-primary-500/20', icon: 'text-primary-400', text: 'text-primary-400' },
  whatsapp: { bg: 'bg-emerald-500/20', icon: 'text-emerald-400', text: 'text-emerald-400' },
  task: { bg: 'bg-amber-500/20', icon: 'text-amber-400', text: 'text-amber-400' },
};

function WorkflowCard({
  trigger,
  onToggle,
}: {
  trigger: (typeof workflowTriggers)[0];
  onToggle: () => void;
}) {
  const Icon = iconMap[trigger.type] || Bell;
  const colors = colorMap[trigger.type] || colorMap.lead;

  return (
    <Card className="p-5 relative overflow-hidden group hover-lift" glow>
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-2xl">
        <div className={`w-full h-full rounded-full ${colors.bg}`} />
      </div>

      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${colors.bg}`}>
            <Icon className={`w-5 h-5 ${colors.icon}`} />
          </div>
          <div>
            <h4 className="text-base font-medium text-white">{trigger.name}</h4>
            <p className="text-xs text-dark-400 capitalize">{trigger.type} trigger</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
            trigger.status === 'active' ? 'bg-emerald-500' : 'bg-dark-700'
          }`}
        >
          <span
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
              trigger.status === 'active' ? 'left-7' : 'left-1'
            }`}
          />
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-dark-700/50 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-dark-500">Executions</p>
            <p className="text-lg font-semibold text-white">{trigger.count}</p>
          </div>
          <div className="h-8 w-px bg-dark-700" />
          <div>
            <p className="text-xs text-dark-500">Last Triggered</p>
            <p className="text-sm text-dark-300">{trigger.lastTriggered}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-dark-800 transition-colors duration-200">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg text-dark-400 hover:text-white hover:bg-dark-800 transition-colors duration-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}

function AutomationMetrics() {
  const metrics = [
    {
      label: 'Lead Notifications',
      value: automationStatus.leadNotification.processed,
      rate: automationStatus.leadNotification.successRate,
      trend: '+12%',
      icon: Bell,
      color: 'emerald',
    },
    {
      label: 'Email Triggers',
      value: automationStatus.emailTrigger.processed,
      rate: automationStatus.emailTrigger.successRate,
      trend: '+8%',
      icon: Mail,
      color: 'primary',
    },
    {
      label: 'WhatsApp Messages',
      value: automationStatus.whatsappTrigger.processed,
      rate: automationStatus.whatsappTrigger.successRate,
      trend: '+23%',
      icon: MessageCircle,
      color: 'emerald',
    },
    {
      label: 'Task Automations',
      value: automationStatus.taskAutomation.processed,
      rate: 0,
      trend: 'Paused',
      icon: CheckSquare,
      color: 'amber',
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; text: string }> = {
    emerald: { bg: 'bg-emerald-500/20', icon: 'text-emerald-400', text: 'text-emerald-400' },
    primary: { bg: 'bg-primary-500/20', icon: 'text-primary-400', text: 'text-primary-400' },
    amber: { bg: 'bg-amber-500/20', icon: 'text-amber-400', text: 'text-amber-400' },
  };

  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-glow/20 to-primary-500/20">
            <Zap className="w-5 h-5 text-accent-glow" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Automation Overview</h3>
            <p className="text-xs text-dark-400">This month's performance</p>
          </div>
        </div>
        <Button size="sm" variant="ghost">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          const colors = colorClasses[metric.color] || colorClasses.primary;

          return (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-2 rounded-lg ${colors.bg}`}>
                  <Icon className={`w-4 h-4 ${colors.icon}`} />
                </div>
                <span className="text-xs text-dark-400">{metric.label}</span>
              </div>
              <p className="text-2xl font-bold text-white">{metric.value.toLocaleString()}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-dark-400">Success rate</span>
                <span className={`text-xs font-medium ${colors.text}`}>
                  {metric.rate ? `${metric.rate}%` : 'N/A'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function WorkflowTimeline() {
  const timeline = [
    {
      time: '2 min ago',
      event: 'New lead captured',
      type: 'lead',
      details: 'Contact form submission from priya@example.com',
    },
    {
      time: '5 min ago',
      event: 'Welcome email sent',
      type: 'email',
      details: 'Automated welcome sequence initiated',
    },
    {
      time: '12 min ago',
      event: 'WhatsApp notification',
      type: 'whatsapp',
      details: 'Order confirmation sent to +91 98765****',
    },
    {
      time: '25 min ago',
      event: 'Lead qualified',
      type: 'lead',
      details: 'High-value lead identified from pricing page visit',
    },
    {
      time: '1 hour ago',
      event: 'Email campaign triggered',
      type: 'email',
      details: 'Abandoned cart recovery sequence started',
    },
  ];

  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20">
            <Clock className="w-5 h-5 text-primary-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Activity Timeline</h3>
            <p className="text-xs text-dark-400">Recent automation events</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {timeline.map((item, idx) => {
          const Icon = iconMap[item.type] || Bell;
          const colors = colorMap[item.type] || colorMap.lead;

          return (
            <div key={idx} className="flex gap-4 relative">
              {idx !== timeline.length - 1 && (
                <div className="absolute left-5 top-10 w-px h-full bg-dark-700/50" />
              )}
              <div className={`p-2.5 rounded-xl ${colors.bg} flex-shrink-0 z-10`}>
                <Icon className={`w-4 h-4 ${colors.icon}`} />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-white">{item.event}</p>
                  <span className="text-xs text-dark-500">{item.time}</span>
                </div>
                <p className="text-xs text-dark-400">{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function WorkflowSection() {
  const [triggers, setTriggers] = useState(workflowTriggers);

  const handleToggle = (id: number) => {
    setTriggers((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'active' ? 'paused' : 'active' }
          : t
      )
    );
  };

  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl font-semibold text-white">Workflow Automation</h2>
          <p className="text-sm text-dark-400">Automate your business processes</p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />}>
          Create Workflow
        </Button>
      </div>

      <AutomationMetrics />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {triggers.map((trigger) => (
          <WorkflowCard
            key={trigger.id}
            trigger={trigger}
            onToggle={() => handleToggle(trigger.id)}
          />
        ))}
      </div>

      <WorkflowTimeline />
    </div>
  );
}
