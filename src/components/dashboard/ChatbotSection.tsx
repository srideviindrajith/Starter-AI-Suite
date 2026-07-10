import { useState } from 'react';
import {
  Send,
  HelpCircle,
  Bot,
  User,
  TrendingUp,
  BookOpen,
  Sparkles,
  MoreVertical,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Card, Button, Badge } from '../ui';
import { faqData, chatMessages, suggestedReplies, conversationsData } from '../../data/mockData';

function FAQSection() {
  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20">
            <HelpCircle className="w-5 h-5 text-primary-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">FAQ Manager</h3>
            <p className="text-xs text-dark-400">{faqData.length} questions configured</p>
          </div>
        </div>
        <Button size="sm">Add FAQ</Button>
      </div>

      <div className="space-y-3">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="p-4 rounded-xl bg-dark-800/40 border border-dark-700/50 hover:border-accent-glow/30 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-white mb-1">{faq.question}</p>
                <p className="text-xs text-dark-400 line-clamp-2">{faq.answer}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="badge-primary">
                  <TrendingUp className="w-3 h-3" />
                  {faq.usage}
                </span>
                <button className="p-1.5 rounded-lg text-dark-400 hover:text-white hover:bg-dark-700 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ConversationHistory() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />;
      case 'pending':
        return <Clock className="w-3.5 h-3.5 text-amber-400" />;
      case 'resolved':
        return <CheckCircle className="w-3.5 h-3.5 text-primary-400" />;
      default:
        return <AlertCircle className="w-3.5 h-3.5 text-dark-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'resolved':
        return <Badge variant="primary">Resolved</Badge>;
      default:
        return <Badge variant="neutral">Unknown</Badge>;
    }
  };

  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20">
            <BookOpen className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Conversation History</h3>
            <p className="text-xs text-dark-400">{conversationsData.length} conversations</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {conversationsData.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setSelectedConversation(conv.id)}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
              selectedConversation === conv.id
                ? 'bg-accent-glow/10 border border-accent-glow/30'
                : 'bg-dark-800/40 border border-dark-700/50 hover:border-dark-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/30 to-accent-glow/30 flex items-center justify-center text-sm font-medium text-white">
                {conv.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-white">{conv.customer}</p>
                  {getStatusIcon(conv.status)}
                </div>
                <p className="text-xs text-dark-400 truncate">{conv.message}</p>
              </div>
              <div className="flex flex-col items-end gap-2 flex-shrink-0">
                <span className="text-[10px] text-dark-500">{conv.time}</span>
                {getStatusBadge(conv.status)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function LiveChat() {
  const [message, setMessage] = useState('');
  const [messages] = useState(chatMessages);
  const [replies] = useState(suggestedReplies);

  return (
    <Card className="flex flex-col h-[500px]" glow>
      <div className="p-4 border-b border-dark-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-glow to-primary-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-dark-900" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">AI Assistant</p>
            <p className="text-xs text-emerald-400">Online - Handling 12 conversations</p>
          </div>
        </div>
        <Badge variant="success">
          <Sparkles className="w-3 h-3" />
          AI Powered
        </Badge>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
          >
            {msg.sender === 'customer' && (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-dark-300" />
              </div>
            )}
            <div
              className={`max-w-[70%] p-3 rounded-2xl ${
                msg.sender === 'customer'
                  ? 'bg-dark-800/60 rounded-bl-sm'
                  : 'bg-gradient-to-br from-primary-500/20 to-accent-glow/20 rounded-br-sm border border-accent-glow/20'
              }`}
            >
              <p className="text-xs text-dark-400 mb-1">{msg.name} - {msg.time}</p>
              <p className="text-sm text-white">{msg.message}</p>
            </div>
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-glow to-primary-500 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-dark-700/50 space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-dark-500 py-1">Suggested:</span>
          {replies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => setMessage(reply)}
              className="px-3 py-1.5 text-xs rounded-lg bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700/50 border border-dark-600/50 hover:border-accent-glow/30 transition-all duration-200"
            >
              {reply}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="input-primary flex-1"
          />
          <Button icon={<Send className="w-4 h-4" />}>
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
}

function SuggestedRepliesManager() {
  return (
    <Card className="p-6" glow>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-glow/20 to-primary-500/20">
            <Sparkles className="w-5 h-5 text-accent-glow" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Suggested Replies</h3>
            <p className="text-xs text-dark-400">AI-generated response templates</p>
          </div>
        </div>
        <Button size="sm" variant="secondary">Manage</Button>
      </div>

      <div className="grid gap-3">
        {suggestedReplies.map((reply, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-dark-800/40 border border-dark-700/50 hover:border-accent-glow/30 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-dark-300 group-hover:text-white transition-colors">
                "{reply}"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-dark-500">{45 + idx * 12} uses</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ChatbotSection() {
  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xl font-semibold text-white">Customer Service Chatbot</h2>
          <p className="text-sm text-dark-400">Manage your AI-powered customer interactions</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Bot Online
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FAQSection />
        <ConversationHistory />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LiveChat />
        </div>
        <SuggestedRepliesManager />
      </div>
    </div>
  );
}
