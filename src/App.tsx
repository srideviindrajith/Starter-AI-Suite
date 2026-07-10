import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardCards } from './components/dashboard/DashboardCards';
import { ChatbotSection } from './components/dashboard/ChatbotSection';
import { WorkflowSection } from './components/dashboard/WorkflowSection';
import { packageInfo } from './data/mockData';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'chatbot':
        return <ChatbotSection />;
      case 'workflow':
        return <WorkflowSection />;
      default:
        return <DashboardCards />;
    }
  };

  return (
    <div className="min-h-screen bg-background glass relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-accent-glow/10 to-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-primary-500/10 to-accent-cyan/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-gradient-to-t from-accent-glow/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex h-screen">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="flex-1 overflow-y-auto p-4 lg:p-6">
            {/* Package Info Banner */}
            <div className="glass-card p-4 lg:p-6 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-glow/20 to-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-glow to-primary-500 shadow-glow">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-white">{packageInfo.name}</h2>
                      <span className="badge-success">Active</span>
                    </div>
                    <p className="text-sm text-dark-400 mt-1">{packageInfo.description}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-dark-500 uppercase tracking-wider">Your Plan</p>
                    <p className="text-2xl font-bold gradient-text">{packageInfo.price}</p>
                    <p className="text-xs text-dark-400">per month</p>
                  </div>
                  <button className="btn-primary whitespace-nowrap">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>

            {/* Dynamic Content */}
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
