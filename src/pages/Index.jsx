
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, Users, FileText, ChevronRight, Star } from 'lucide-react';

const Index = () => {
  const [mascotAnimation, setMascotAnimation] = useState('bounce');

  useEffect(() => {
    const interval = setInterval(() => {
      setMascotAnimation(prev => prev === 'bounce' ? 'float' : 'bounce');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">VidhiVerse</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Mascot */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to
              <span className="text-blue-600 block">VidhiVerse</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary Legal System Management Platform. Streamline complaints, track cases, and ensure justice with our intelligent digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/signup" 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/tracking" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Track Complaint
              </Link>
            </div>
          </div>

          {/* 3D Mascot */}
          <div className="relative flex justify-center">
            <div className={`transform transition-transform duration-2000 ${mascotAnimation === 'bounce' ? 'animate-bounce' : 'animate-pulse'}`}>
              <div className="relative">
                {/* Main Mascot Body */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full relative shadow-2xl">
                  {/* Eyes */}
                  <div className="absolute top-20 left-20 w-8 h-8 bg-white rounded-full">
                    <div className="w-4 h-4 bg-black rounded-full absolute top-2 left-2 animate-pulse"></div>
                  </div>
                  <div className="absolute top-20 right-20 w-8 h-8 bg-white rounded-full">
                    <div className="w-4 h-4 bg-black rounded-full absolute top-2 right-2 animate-pulse"></div>
                  </div>
                  
                  {/* Mouth */}
                  <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-16 h-8 border-4 border-white rounded-full border-t-transparent"></div>
                  
                  {/* Scale Symbol */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                    <Scale className="h-12 w-12 text-white animate-spin" style={{animationDuration: '4s'}} />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 animate-float">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <div className="absolute -bottom-10 -left-10 animate-float" style={{animationDelay: '1s'}}>
                  <FileText className="h-8 w-8 text-blue-500" />
                </div>
                <div className="absolute top-1/2 -right-16 animate-float" style={{animationDelay: '2s'}}>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Cases Managed', icon: FileText },
              { number: '500+', label: 'Active Users', icon: Users },
              { number: '98%', label: 'Efficiency Rate', icon: Star },
              { number: '24/7', label: 'Support Available', icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose VidhiVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-time Tracking',
                description: 'Track your complaints with interactive animations and live updates',
                icon: '🔍'
              },
              {
                title: 'Multi-role Dashboard',
                description: 'Specialized interfaces for Clerks, Judges, Admins, and Users',
                icon: '👥'
              },
              {
                title: 'AI-Powered Chatbot',
                description: 'Get instant help and guidance through our intelligent assistant',
                icon: '🤖'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Scale className="h-8 w-8 text-blue-400" />
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

export default Index;
