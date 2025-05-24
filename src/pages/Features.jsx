
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Monitor, Users, Bot, Shield, Clock, FileText, BarChart3, MessageSquare, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Multi-Role Dashboards",
      description: "Specialized interfaces for Court Clerks, Judges, System Admins, and Users with role-specific functionalities.",
      color: "bg-primary"
    },
    {
      icon: Search,
      title: "Real-time Tracking",
      description: "Track complaint status with interactive animations and live updates throughout the legal process.",
      color: "bg-emerald-600"
    },
    {
      icon: Bot,
      title: "AI-Powered Chatbot",
      description: "Get instant legal guidance and support through our intelligent chatbot assistant.",
      color: "bg-indigo-600"
    },
    {
      icon: FileText,
      title: "Complaint Management",
      description: "Easy submission and management of legal complaints with document upload capabilities.",
      color: "bg-amber-700"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive analytics and reporting tools for case management and system monitoring.",
      color: "bg-accent"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full compliance to legal data protection requirements.",
      color: "bg-indigo-700"
    },
    {
      icon: Clock,
      title: "Case Scheduling",
      description: "Automated scheduling system for hearings and court proceedings with calendar integration.",
      color: "bg-teal-700"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Complete user lifecycle management with role-based access control and permissions.",
      color: "bg-gray-700"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Integrated communication system for stakeholders throughout the legal process.",
      color: "bg-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">VidhiVerse</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-primary font-medium">Features</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
              <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-primary block">Legal Management</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover how VidhiVerse revolutionizes legal system management with cutting-edge technology and intuitive design.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">See VidhiVerse in Action</h2>
          <p className="text-xl text-primary-foreground mb-12 max-w-3xl mx-auto">
            Experience the power of our platform with interactive demos and real-time examples.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Court Clerk", desc: "Manage complaints", link: "/dashboard/clerk" },
              { title: "Judge", desc: "Review cases", link: "/dashboard/judge" },
              { title: "Admin", desc: "System oversight", link: "/dashboard/admin" },
              { title: "User", desc: "Track complaints", link: "/dashboard/user" }
            ].map((demo, index) => (
              <Link
                key={index}
                to="/login"
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{demo.title}</h3>
                <p className="text-primary-foreground text-sm mb-4">{demo.desc}</p>
                <span className="text-primary-foreground text-sm font-medium">Try Demo →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of legal professionals who trust VidhiVerse for their case management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="h-8 w-8 text-primary-foreground" />
              <span className="text-2xl font-bold">VidhiVerse</span>
            </div>
            <div className="text-gray-400">
              © 2024 VidhiVerse. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
