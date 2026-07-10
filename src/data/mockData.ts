export const packageInfo = {
  name: 'Starter AI Suite',
  price: '₹4,999',
  description: 'Perfect for startups and small businesses to automate customer interactions.',
};

export const aiUsageData = {
  totalCredits: 10000,
  usedCredits: 7642,
  remainingCredits: 2358,
  usagePercentage: 76.4,
  dailyAverage: 254,
  monthlyProjection: 7620,
};

export const conversationsData = [
  { id: 1, customer: 'Priya Sharma', message: 'Need help with my order #12345', time: '2 min ago', status: 'active', avatar: 'PS' },
  { id: 2, customer: 'Rahul Mehta', message: 'What are your business hours?', time: '5 min ago', status: 'resolved', avatar: 'RM' },
  { id: 3, customer: 'Ananya Patel', message: 'Can I change my delivery address?', time: '12 min ago', status: 'pending', avatar: 'AP' },
  { id: 4, customer: 'Vikram Singh', message: 'Payment failed but money deducted', time: '25 min ago', status: 'active', avatar: 'VS' },
  { id: 5, customer: 'Neha Gupta', message: 'Looking for product warranty info', time: '1 hour ago', status: 'resolved', avatar: 'NG' },
];

export const todaysRequests = [
  { id: 1, type: 'FAQ', query: 'Return Policy', count: 45, trend: '+12%' },
  { id: 2, type: 'FAQ', query: 'Shipping Time', count: 38, trend: '+8%' },
  { id: 3, type: 'FAQ', query: 'Payment Options', count: 29, trend: '+5%' },
  { id: 4, type: 'Chat', query: 'Order Status', count: 23, trend: '+15%' },
  { id: 5, type: 'Chat', query: 'Product Info', count: 18, trend: '-3%' },
];

export const automationStatus = {
  leadNotification: { enabled: true, processed: 156, successRate: 99.2 },
  emailTrigger: { enabled: true, processed: 892, successRate: 98.7 },
  whatsappTrigger: { enabled: true, processed: 445, successRate: 97.8 },
  taskAutomation: { enabled: false, processed: 0, successRate: 0 },
};

export const faqData = [
  { id: 1, question: 'What is your return policy?', answer: 'We offer a 30-day return policy for all unused products in original packaging.', usage: 234 },
  { id: 2, question: 'How long does shipping take?', answer: 'Standard shipping takes 5-7 business days. Express shipping is 2-3 days.', usage: 189 },
  { id: 3, question: 'Do you offer COD?', answer: 'Yes, Cash on Delivery is available for orders under ₹10,000.', usage: 156 },
  { id: 4, question: 'How can I track my order?', answer: 'You\'ll receive a tracking link via SMS and email once your order ships.', usage: 143 },
];

export const workflowTriggers = [
  { id: 1, name: 'New Lead Alert', type: 'lead', status: 'active', lastTriggered: '5 min ago', count: 156 },
  { id: 2, name: 'Welcome Email', type: 'email', status: 'active', lastTriggered: '12 min ago', count: 892 },
  { id: 3, name: 'Order Confirmation WhatsApp', type: 'whatsapp', status: 'active', lastTriggered: '3 min ago', count: 445 },
  { id: 4, name: 'Daily Report Task', type: 'task', status: 'paused', lastTriggered: '2 hours ago', count: 28 },
];

export const chatMessages = [
  { id: 1, sender: 'customer', name: 'Priya Sharma', message: 'Hi, I need help with my order #12345', time: '10:30 AM' },
  { id: 2, sender: 'ai', name: 'AI Assistant', message: 'Hello Priya! I\'d be happy to help you with your order. Let me look that up for you.', time: '10:30 AM' },
  { id: 3, sender: 'ai', name: 'AI Assistant', message: 'Your order #12345 is currently out for delivery and should arrive by 6 PM today.', time: '10:31 AM' },
  { id: 4, sender: 'customer', name: 'Priya Sharma', message: 'Great! Can I reschedule it to tomorrow?', time: '10:32 AM' },
  { id: 5, sender: 'ai', name: 'AI Assistant', message: 'Yes, I can arrange that for you. Would you prefer delivery between 9 AM - 12 PM or 2 PM - 6 PM?', time: '10:32 AM' },
];

export const suggestedReplies = [
  '9 AM - 12 PM works for me',
  '2 PM - 6 PM is better',
  'Can I pick it up instead?',
  'Let me check my schedule first',
];
