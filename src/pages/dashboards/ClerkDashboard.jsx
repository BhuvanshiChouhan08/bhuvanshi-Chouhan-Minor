
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Plus, FileText, Upload, Calendar, MapPin, LogOut, User, Bell, Search } from 'lucide-react';

const ClerkDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  
  const [complaintForm, setComplaintForm] = useState({
    caseType: '',
    description: '',
    date: '',
    area: '',
    priority: 'medium'
  });

  const recentComplaints = [
    { id: 'VV2024001234', type: 'Property Dispute', date: '2024-01-20', status: 'Under Review', priority: 'High' },
    { id: 'VV2024001235', type: 'Civil Matter', date: '2024-01-19', status: 'Assigned', priority: 'Medium' },
    { id: 'VV2024001236', type: 'Criminal Case', date: '2024-01-18', status: 'Pending', priority: 'High' },
    { id: 'VV2024001237', type: 'Family Law', date: '2024-01-17', status: 'In Progress', priority: 'Low' },
    { id: 'VV2024001238', type: 'Contract Dispute', date: '2024-01-16', status: 'Resolved', priority: 'Medium' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleComplaintSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/clerk/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(complaintForm),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Complaint submitted successfully! Complaint ID: ${data.id}`);
        setShowComplaintForm(false);
        setComplaintForm({
          caseType: "",
          description: "",
          date: "",
          area: "",
          priority: "medium",
        });
      } else {
        alert("Failed to submit complaint.");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Error connecting to the server.");
    }
  };
  

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'in progress': return 'text-blue-600 bg-blue-100';
      case 'assigned': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <Scale className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">VidhiVerse</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Court Clerk Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cases..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Bell className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Scale className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('submit')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'submit' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Plus className="h-5 w-5" />
                  <span>Submit Complaint</span>
                </button>
                <button
                  onClick={() => setActiveTab('recent')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'recent' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Recent Complaints</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Today's Submissions</p>
                        <p className="text-3xl font-bold text-gray-900">12</p>
                      </div>
                      <Plus className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Pending Review</p>
                        <p className="text-3xl font-bold text-gray-900">25</p>
                      </div>
                      <FileText className="h-12 w-12 text-yellow-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">High Priority</p>
                        <p className="text-3xl font-bold text-gray-900">8</p>
                      </div>
                      <Calendar className="h-12 w-12 text-red-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Total This Month</p>
                        <p className="text-3xl font-bold text-gray-900">156</p>
                      </div>
                      <Scale className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button 
                      onClick={() => setActiveTab('submit')}
                      className="flex items-center justify-center space-x-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <Plus className="h-5 w-5 text-blue-600" />
                      <span className="text-blue-700 font-medium">New Complaint</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                      <Upload className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 font-medium">Upload Documents</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-purple-700 font-medium">Schedule Hearing</span>
                    </button>
                    <Link 
                      to="/tracking"
                      className="flex items-center justify-center space-x-2 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    >
                      <Search className="h-5 w-5 text-orange-600" />
                      <span className="text-orange-700 font-medium">Track Case</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'submit' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Complaint</h2>
                <form onSubmit={handleComplaintSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Case Type</label>
                      <select
                        value={complaintForm.caseType}
                        onChange={(e) => setComplaintForm({...complaintForm, caseType: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Case Type</option>
                        <option value="civil">Civil Matter</option>
                        <option value="criminal">Criminal Case</option>
                        <option value="property">Property Dispute</option>
                        <option value="family">Family Law</option>
                        <option value="contract">Contract Dispute</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                      <select
                        value={complaintForm.priority}
                        onChange={(e) => setComplaintForm({...complaintForm, priority: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={complaintForm.date}
                        onChange={(e) => setComplaintForm({...complaintForm, date: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Area/Jurisdiction</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={complaintForm.area}
                          onChange={(e) => setComplaintForm({...complaintForm, area: e.target.value})}
                          required
                          placeholder="Enter area or jurisdiction"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={complaintForm.description}
                      onChange={(e) => setComplaintForm({...complaintForm, description: e.target.value})}
                      required
                      rows="6"
                      placeholder="Provide detailed description of the complaint..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Drag and drop files here or click to browse</p>
                      <input type="file" multiple className="hidden" />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Submit Complaint
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('dashboard')}
                      className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'recent' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Complaints</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Complaint ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentComplaints.map((complaint) => (
                        <tr key={complaint.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-blue-600">{complaint.id}</td>
                          <td className="py-3 px-4">{complaint.type}</td>
                          <td className="py-3 px-4">{complaint.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                              {complaint.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                              {complaint.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClerkDashboard;
