import { TrendingUp, TrendingDown, Zap, MessageSquare, Clock, Bot } from 'lucide-react';
import { Card } from '../ui';
import { aiUsageData, conversationsData, todaysRequests, automationStatus } from '../../data/mockData';

function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  gradient,
}: {
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
  icon: typeof Zap;
  gradient: string;
}) {
  return (
    <Card className="p-6 relative overflow-hidden group hover-lift" glow>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20">
        <div className={`w-full h-full rounded-full ${gradient}`} />
      </div>

      <div className="flex items-start justify-between relative z-10">
        <div className="space-y-3">
          <p className="text-sm text-dark-400">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-dark-400">{subtitle}</span>
            {trend && (
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <TrendingUp className="w-3 h-3" />
                {trend}
              </span>
            )}
          </div>
        </div>
        <div className={`p-3 rounded-xl ${gradient}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </Card>
  );
}

function UsageRing() {
  const { usedCredits, totalCredits, usagePercentage, remainingCredits } = aiUsageData;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (usagePercentage / 100) * circumference;

  return (
    <Card className="p-6 relative overflow-hidden" glow>
      <div className="absolute top-0 right-0 w-40 h-40 -translate-y-1/4 translate-x-1/4 opacity-30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-glow to-primary-500 blur-3xl animate-glow-pulse" />
      </div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div>
          <p className="text-sm text-dark-400">AI Usage</p>
          <p className="text-xl font-semibold text-white mt-1">This Month</p>
        </div>
        <span className="badge-primary">{usagePercentage}% Used</span>
      </div>

      <div className="flex items-center gap-8 relative z-10">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="72"
              cy="72"
              r={radius}
              stroke="rgba(26, 26, 42, 1)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="72"
              cy="72"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#0073ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">{usedCredits.toLocaleString()}</span>
            <span className="text-xs text-dark-400">used</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-dark-400">Total Credits</span>
              <span className="text-white font-medium">{totalCredits.toLocaleString()}</span>
            </div>
            <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-cyan to-primary-500 rounded-full transition-all duration-1000"
                style={{ width: `${usagePercentage}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-dark-800/50 rounded-xl">
              <p className="text-xs text-dark-400">Remaining</p>
              <p className="text-lg font-semibold text-white">{remainingCredits.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-dark-800/50 rounded-xl">
              <p className="text-xs text-dark-400">Daily Avg</p>
              <p className="text-lg font-semibold text-white">{aiUsageData.dailyAverage}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function ActiveConversations() {
  const activeCount = conversationsData.filter((c) => c.status === 'active').length;

  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Active Conversations</p>
            <p className="text-xs text-dark-400">Right now</p>
          </div>
        </div>
        <span className="badge-success">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          {activeCount} live
        </span>
      </div>

      <div className="space-y-3 max-h-48 overflow-y-auto">
        {conversationsData.slice(0, 4).map((conv) => (
          <div
            key={conv.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-dark-800/30 hover:bg-dark-800/50 transition-colors duration-200 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-glow flex items-center justify-center text-xs font-medium text-white">
              {conv.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{conv.customer}</p>
              <p className="text-xs text-dark-400 truncate">{conv.message}</p>
            </div>
            <span className="text-xs text-dark-500 group-hover:text-dark-300 transition-colors">
              {conv.time}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TodaysRequests() {
  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20">
            <Clock className="w-4 h-4 text-primary-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Today's Requests</p>
            <p className="text-xs text-dark-400">Last 24 hours</p>
          </div>
        </div>
        <span className="text-2xl font-bold gradient-text">
          {todaysRequests.reduce((acc, r) => acc + r.count, 0)}
        </span>
      </div>

      <div className="space-y-2">
        {todaysRequests.slice(0, 4).map((req) => (
          <div
            key={req.id}
            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-dark-800/30 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-0.5 rounded ${req.type === 'FAQ' ? 'bg-primary-500/10 text-primary-400' : 'bg-accent-glow/10 text-accent-cyan'}`}>
                {req.type}
              </span>
              <span className="text-sm text-dark-300">{req.query}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">{req.count}</span>
              <span className={`text-xs flex items-center gap-0.5 ${req.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {req.trend.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {req.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function AutomationStatusCard() {
  const enabledCount = Object.values(automationStatus).filter((a) => a.enabled).length;

  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20">
            <Bot className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Automation Status</p>
            <p className="text-xs text-dark-400">All systems</p>
          </div>
        </div>
        <span className="badge-warning">{enabledCount}/4 Active</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {Object.entries(automationStatus).map(([key, value]) => {
          const labels: Record<string, string> = {
            leadNotification: 'Lead Notification',
            emailTrigger: 'Email Trigger',
            whatsappTrigger: 'WhatsApp',
            taskAutomation: 'Task Automation',
          };

          return (
            <div
              key={key}
              className={`p-3 rounded-xl border transition-all duration-200 ${
                value.enabled
                  ? 'bg-emerald-500/5 border-emerald-500/20'
                  : 'bg-dark-800/30 border-dark-700/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-dark-300">{labels[key]}</span>
                <span
                  className={`w-2 h-2 rounded-full ${value.enabled ? 'bg-emerald-400 animate-pulse' : 'bg-dark-600'}`}
                />
              </div>
              {value.enabled ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">{value.processed}</span>
                  <span className="text-xs text-emerald-400">{value.successRate}%</span>
                </div>
              ) : (
                <span className="text-xs text-dark-500">Paused</span>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export function DashboardCards() {
  const totalRequests = todaysRequests.reduce((acc, r) => acc + r.count, 0);
  const activeConvs = conversationsData.filter((c) => c.status === 'active').length;
  const totalAutomated = Object.values(automationStatus).reduce((acc, a) => acc + a.processed, 0);
  const avgResponseTime = '1.2s';

  return (
    <div className="space-y-6 animate-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Requests"
          value={totalRequests.toString()}
          subtitle="Today"
          trend="+15%"
          icon={Zap}
          gradient="bg-gradient-to-br from-accent-glow to-primary-500"
        />
        <StatCard
          title="Active Chats"
          value={activeConvs.toString()}
          subtitle="Right now"
          icon={MessageSquare}
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
        />
        <StatCard
          title="Automated"
          value={totalAutomated.toLocaleString()}
          subtitle="This month"
          trend="+23%"
          icon={Bot}
          gradient="bg-gradient-to-br from-amber-500 to-orange-600"
        />
        <StatCard
          title="Avg Response"
          value={avgResponseTime}
          subtitle="Response time"
          trend="-0.3s"
          icon={Clock}
          gradient="bg-gradient-to-br from-primary-500 to-primary-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UsageRing />
        <ActiveConversations />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TodaysRequests />
        <AutomationStatusCard />
      </div>
    </div>
  );
}
