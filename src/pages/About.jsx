
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Target, Users, Award, Heart, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Cases Processed', icon: Scale },
    { number: '1,200+', label: 'Legal Professionals', icon: Users },
    { number: '98%', label: 'User Satisfaction', icon: Heart },
    { number: '24/7', label: 'System Uptime', icon: Globe }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer",
      image: "👨‍💼",
      description: "20+ years in legal technology innovation"
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      image: "👩‍💻",
      description: "Expert in AI and legal system automation"
    },
    {
      name: "Amit Patel",
      role: "Head of Legal Affairs",
      image: "👨‍⚖️",
      description: "Former Supreme Court advocate and legal consultant"
    },
    {
      name: "Sunita Rao",
      role: "Head of User Experience",
      image: "👩‍🎨",
      description: "Specialist in legal workflow optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">VidhiVerse</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transforming Legal
                <span className="text-blue-600 block">System Management</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                VidhiVerse was born from the vision to modernize India's legal system through technology. 
                We believe that justice should be accessible, transparent, and efficient for everyone.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2020</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Courts Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-gray-600">Cases Handled</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <Scale className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-center">
                    To make legal processes transparent, efficient, and accessible to all citizens through innovative technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at VidhiVerse
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Transparency",
                description: "We believe in complete transparency in legal processes, ensuring all stakeholders have access to relevant information.",
                color: "bg-blue-500"
              },
              {
                icon: Users,
                title: "Accessibility",
                description: "Legal services should be accessible to everyone, regardless of their technical expertise or location.",
                color: "bg-green-500"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in everything we do, continuously improving our platform and services.",
                color: "bg-purple-500"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experienced professionals dedicated to revolutionizing legal technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-200 font-medium mb-3">{member.role}</p>
                <p className="text-blue-100 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us in Our Mission</h2>
          <p className="text-xl text-gray-600 mb-12">
            Be part of the digital transformation of India's legal system. Together, we can make justice more accessible and efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get Started Today
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Partner With Us
            </Link>
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

export default About;
