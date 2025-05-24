
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Send, Bot, User, Home, MessageSquare, Lightbulb } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m VidhiBot, your legal assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const quickQuestions = [
    "How do I file a complaint?",
    "Track my case status",
    "What documents do I need?",
    "Court hearing procedures",
    "Legal fees information",
    "Appeal process"
  ];

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('complaint') || message.includes('file')) {
      return 'To file a complaint: 1) Login to your account 2) Go to the complaint submission page 3) Fill in all required details 4) Upload supporting documents 5) Submit for review. You\'ll receive a complaint ID for tracking.';
    } else if (message.includes('track') || message.includes('status')) {
      return 'You can track your case using your complaint ID on our tracking page. Enter your ID to see real-time updates including submission, review, hearing scheduling, and resolution status.';
    } else if (message.includes('document')) {
      return 'Required documents typically include: 1) Identity proof 2) Address proof 3) Relevant case documents 4) Evidence/supporting materials 5) Police reports (if applicable). Specific requirements vary by case type.';
    } else if (message.includes('hearing') || message.includes('court')) {
      return 'Court hearing information: 1) You\'ll be notified of hearing dates via SMS/email 2) Arrive 30 minutes early 3) Bring all required documents 4) Dress formally 5) Follow court etiquette. Your lawyer can guide you through the process.';
    } else if (message.includes('fee') || message.includes('cost')) {
      return 'Legal fees vary by case type: 1) Court filing fees 2) Lawyer consultation charges 3) Document processing fees 4) Administrative costs. Fee waivers may be available for eligible applicants.';
    } else if (message.includes('appeal')) {
      return 'Appeal process: 1) Appeals must be filed within specified time limits 2) Higher court reviews lower court decisions 3) New evidence may be considered 4) Legal representation is recommended. Contact our support for specific guidance.';
    } else {
      return 'I\'m here to help with legal queries, case tracking, and general guidance. You can ask me about filing complaints, tracking cases, required documents, court procedures, or any other legal questions.';
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: getBotResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2">
                <Scale className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">VidhiVerse</span>
              </Link>
              <span className="text-gray-400">|</span>
              <div className="flex items-center space-x-2">
                <Bot className="h-6 w-6 text-purple-600" />
                <span className="text-lg font-semibold text-gray-900">VidhiBot</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-xl h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-white font-semibold">VidhiBot AI Assistant</h3>
                <p className="text-purple-200 text-sm">Online - Ready to help with legal queries</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-purple-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-3">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Quick Questions:</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg transition-colors text-left"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your legal question here..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <MessageSquare className="h-8 w-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
            <p className="text-sm text-gray-600">Get instant answers anytime</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <Scale className="h-8 w-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">Legal Expertise</h3>
            <p className="text-sm text-gray-600">Trained on legal knowledge</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <Bot className="h-8 w-8 text-purple-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-1">AI Powered</h3>
            <p className="text-sm text-gray-600">Smart responses and guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
