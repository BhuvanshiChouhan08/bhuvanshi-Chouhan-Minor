
import React, { useState, useEffect } from 'react';
import { Search, FileText, Clock, CheckCircle, AlertCircle, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tracking = () => {
  const [complaintId, setComplaintId] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  // Mock tracking data
  const mockTrackingData = {
    id: 'VV2024001234',
    title: 'Property Dispute Case',
    status: 'In Progress',
    priority: 'High',
    submittedDate: '2024-01-15',
    lastUpdate: '2024-01-20',
    estimatedResolution: '2024-02-15',
    stages: [
      { 
        title: 'Complaint Submitted', 
        date: '2024-01-15', 
        completed: true, 
        description: 'Your complaint has been successfully submitted and assigned ID VV2024001234'
      },
      { 
        title: 'Initial Review', 
        date: '2024-01-16', 
        completed: true, 
        description: 'Complaint reviewed by court clerk and classified as high priority'
      },
      { 
        title: 'Document Verification', 
        date: '2024-01-18', 
        completed: true, 
        description: 'All submitted documents have been verified and approved'
      },
      { 
        title: 'Case Assignment', 
        date: '2024-01-20', 
        completed: true, 
        description: 'Case assigned to Judge M.K. Sharma for hearing'
      },
      { 
        title: 'Hearing Scheduled', 
        date: '2024-01-25', 
        completed: false, 
        description: 'First hearing scheduled for February 1, 2024'
      },
      { 
        title: 'Case Resolution', 
        date: 'TBD', 
        completed: false, 
        description: 'Final judgment and case closure'
      }
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!complaintId.trim()) return;
    
    setIsLoading(true);
    setAnimationStep(0);
    
    setTimeout(() => {
      setTrackingData(mockTrackingData);
      setIsLoading(false);
      // Start animation sequence
      animateSteps();
    }, 1500);
  };

  const animateSteps = () => {
    let step = 0;
    const interval = setInterval(() => {
      setAnimationStep(step);
      step++;
      if (step > mockTrackingData.stages.length) {
        clearInterval(interval);
      }
    }, 500);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'resolved':
        return 'text-green-600 bg-green-100';
      case 'in progress':
        return 'text-blue-600 bg-blue-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Complaint Tracking</h1>
              <p className="text-gray-600 mt-2">Track the status of your legal complaints in real-time</p>
            </div>
            <Link 
              to="/" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Track Your Complaint</h2>
            <p className="text-gray-600">Enter your complaint ID to view real-time status updates</p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                placeholder="Enter Complaint ID (e.g., VV2024001234)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                  Searching...
                </div>
              ) : (
                'Track'
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {trackingData && (
          <div className="space-y-6 animate-fade-in">
            {/* Case Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{trackingData.id}</div>
                  <div className="text-gray-600">Complaint ID</div>
                </div>
                <div className="text-center">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingData.status)}`}>
                    {trackingData.status}
                  </div>
                  <div className="text-gray-600 mt-1">Status</div>
                </div>
                <div className="text-center">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(trackingData.priority)}`}>
                    {trackingData.priority}
                  </div>
                  <div className="text-gray-600 mt-1">Priority</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{trackingData.estimatedResolution}</div>
                  <div className="text-gray-600">Expected Resolution</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Case Timeline</h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {trackingData.stages.map((stage, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-start mb-8 transition-all duration-500 ${
                      animationStep > index ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-4'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                      stage.completed 
                        ? 'bg-green-100 border-green-500' 
                        : index === trackingData.stages.findIndex(s => !s.completed)
                        ? 'bg-blue-100 border-blue-500 animate-pulse'
                        : 'bg-gray-100 border-gray-300'
                    }`}>
                      {stage.completed ? (
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      ) : index === trackingData.stages.findIndex(s => !s.completed) ? (
                        <Clock className="h-8 w-8 text-blue-500" />
                      ) : (
                        <AlertCircle className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 flex-1">
                      <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        stage.completed 
                          ? 'border-green-200 bg-green-50' 
                          : index === trackingData.stages.findIndex(s => !s.completed)
                          ? 'border-blue-200 bg-blue-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{stage.title}</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-1" />
                            {stage.date}
                          </div>
                        </div>
                        <p className="text-gray-700">{stage.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">Download Case Documents</span>
                </button>
                <button className="flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-700 font-medium">View Court Location</span>
                </button>
                <Link 
                  to="/chatbot"
                  className="flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <AlertCircle className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-medium">Get Legal Help</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracking;
