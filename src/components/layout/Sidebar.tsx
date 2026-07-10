import {
  LayoutDashboard,
  MessageSquare,
  Workflow,
  HelpCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'chatbot', label: 'AI Chatbot', icon: MessageSquare },
  { id: 'workflow', label: 'Workflows', icon: Workflow },
];

const secondaryItems = [
  { id: 'faq', label: 'FAQ Manager', icon: HelpCircle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ collapsed, onToggle, activeTab, onTabChange }: SidebarProps) {
  return (
    <aside
      className={`glass border-r border-dark-700/50 h-screen sticky top-0 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-dark-700/50">
          {!collapsed && (
            <span className="text-sm font-medium text-dark-300">Navigation</span>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-dark-800 transition-colors duration-200 ml-auto"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4 text-dark-400" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-dark-400" />
            )}
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary-500/10 text-accent-glow border border-accent-glow/20'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? 'text-accent-glow' : 'text-dark-400 group-hover:text-white'
                    }`}
                  />
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-accent-glow rounded-r-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="px-3 mt-6">
            {!collapsed && (
              <p className="text-xs font-medium text-dark-500 uppercase tracking-wider px-3 mb-2">
                Tools
              </p>
            )}
            <div className="space-y-1">
              {secondaryItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-dark-400 hover:text-white hover:bg-dark-800 transition-all duration-200 group"
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 group-hover:text-white" />
                    {!collapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-dark-700/50">
          {!collapsed ? (
            <div className="glass-card p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-glow/20 to-primary-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-glow" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Upgrade Plan</p>
                  <p className="text-[10px] text-dark-400">Get more AI credits</p>
                </div>
              </div>
              <button className="btn-primary w-full text-xs py-2">
                View Plans
              </button>
            </div>
          ) : (
            <button className="w-full p-2 rounded-xl hover:bg-dark-800 transition-colors duration-200">
              <Sparkles className="w-5 h-5 text-accent-glow mx-auto" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

import { Sparkles } from 'lucide-react';
