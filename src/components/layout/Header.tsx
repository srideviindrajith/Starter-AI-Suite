import { Bell, Search, Settings, User, Sparkles } from 'lucide-react';
import { packageInfo } from '../../data/mockData';

export function Header() {
  return (
    <header className="h-16 glass border-b border-dark-700/50 sticky top-0 z-50 backdrop-blur-2xl">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-glow to-primary-500 flex items-center justify-center shadow-glow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-accent-glow to-primary-500 opacity-30 blur-md -z-10 animate-glow-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-semibold gradient-text">PhoenixAI</h1>
              <p className="text-[10px] text-dark-400 -mt-0.5">{packageInfo.name}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="input-primary pl-10 pr-4 py-2 w-64 lg:w-80"
            />
          </div>

          <button className="btn-ghost p-2 rounded-lg relative md:hidden">
            <Search className="w-5 h-5" />
          </button>

          <button className="btn-ghost p-2 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent-glow rounded-full animate-pulse" />
          </button>

          <button className="btn-ghost p-2 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>

          <div className="h-8 w-px bg-dark-700 mx-1 hidden sm:block" />

          <button className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-dark-800 transition-colors duration-200">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-glow flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium hidden sm:block">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}
