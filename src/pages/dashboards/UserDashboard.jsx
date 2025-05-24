
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, FileText, Calendar, CheckCircle, LogOut, User, Bell, Search, Eye, AlertCircle } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const userData = {
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    totalComplaints: 3
  };

  const userComplaints = [
    { id: 'VV2024001234', title: 'Property Dispute with Neighbor', filed: '2024-01-10', status: 'In Progress', nextHearing: '2024-02-01', type: 'Property' },
    { id: 'VV2024001235', title: 'Contract Breach by Vendor', filed: '2024-01-15', status: 'Scheduled', nextHearing: '2024-01-28', type: 'Civil' },
    { id: 'VV2024001236', title: 'Motor Vehicle Accident Claim', filed: '2023-12-20', status: 'Document Verification', nextHearing: 'Pending', type: 'Accident' }
  ];

  const notifications = [
    { id: 1, type: 'hearing', message: 'Hearing scheduled for case VV2024001234 on Feb 1, 2024', time: '2 days ago' },
    { id: 2, type: 'document', message: 'Document verification completed for case VV2024001236', time: '1 week ago' },
    { id: 3, type: 'update', message: 'Status updated for case VV2024001235 to Scheduled', time: '2 weeks ago' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'text-blue-600 bg-blue-100';
      case 'scheduled': return 'text-green-600 bg-green-100';
      case 'resolved': return 'text-purple-600 bg-purple-100';
      case 'document verification': return 'text-yellow-600 bg-yellow-100';
      case 'denied': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCaseTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'property': return 'text-blue-600 bg-blue-100';
      case 'civil': return 'text-green-600 bg-green-100';
      case 'criminal': return 'text-red-600 bg-red-100';
      case 'accident': return 'text-orange-600 bg-orange-100';
      case 'family': return 'text-purple-600 bg-purple-100';
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
                <span className="text-gray-700 font-medium">User Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  {notifications.length}
                </span>
              </div>
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
              {/* User Info */}
              <div className="text-center mb-6">
                <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{userData.name}</h3>
                <p className="text-gray-600 text-sm">{userData.email}</p>
              </div>
              
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
                  onClick={() => setActiveTab('complaints')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'complaints' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>My Complaints</span>
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                  <span className="ml-auto bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                    {notifications.length}
                  </span>
                </button>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  to="/tracking"
                  className="flex items-center justify-center space-x-2 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                >
                  <Search className="h-5 w-5" />
                  <span>Track Complaints</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Total Complaints</p>
                        <p className="text-3xl font-bold text-gray-900">{userData.totalComplaints}</p>
                      </div>
                      <FileText className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">In Progress</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {userComplaints.filter(c => c.status === 'In Progress').length}
                        </p>
                      </div>
                      <AlertCircle className="h-12 w-12 text-yellow-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Resolved</p>
                        <p className="text-3xl font-bold text-gray-900">
                          {userComplaints.filter(c => c.status === 'Resolved').length}
                        </p>
                      </div>
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Recent Complaints */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Recent Complaints</h2>
                    <button
                      onClick={() => setActiveTab('complaints')}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {userComplaints.map((complaint) => (
                      <div
                        key={complaint.id}
                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{complaint.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                            {complaint.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">ID:</span> {complaint.id}
                          </div>
                          <div>
                            <span className="font-medium">Filed:</span> {complaint.filed}
                          </div>
                          <div>
                            <span className="font-medium">Next Hearing:</span> {complaint.nextHearing}
                          </div>
                          <div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCaseTypeColor(complaint.type)}`}>
                              {complaint.type}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Link
                            to={`/tracking?id=${complaint.id}`}
                            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Track Status
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Link
                      to="/tracking"
                      className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center"
                    >
                      <Search className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-blue-700 font-medium">Track Complaint</span>
                    </Link>
                    <Link
                      to="/chatbot"
                      className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center"
                    >
                      <User className="h-8 w-8 text-purple-600 mb-2" />
                      <span className="text-purple-700 font-medium">Legal Assistant</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center"
                    >
                      <Bell className="h-8 w-8 text-green-600 mb-2" />
                      <span className="text-green-700 font-medium">Contact Support</span>
                    </Link>
                    <div
                      className="flex flex-col items-center p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-center cursor-pointer"
                    >
                      <Calendar className="h-8 w-8 text-yellow-600 mb-2" />
                      <span className="text-yellow-700 font-medium">Hearing Calendar</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'complaints' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">My Complaints</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search complaints..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <Link
                      to="/dashboard/user/new-complaint"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      New Complaint
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  {userComplaints.map((complaint) => (
                    <div
                      key={complaint.id}
                      className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                              {complaint.status}
                            </span>
                          </div>
                          <div className="text-gray-600">
                            <p>Complaint ID: <span className="font-medium text-blue-600">{complaint.id}</span></p>
                            <p>Filed on: {complaint.filed}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCaseTypeColor(complaint.type)}`}>
                          {complaint.type}
                        </span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Next Hearing:</span> {complaint.nextHearing}
                          </div>
                          <div className="flex space-x-2">
                            <Link
                              to={`/tracking?id=${complaint.id}`}
                              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm flex items-center"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Track Status
                            </Link>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                              Upload Document
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>

                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-gray-900">{notification.message}</p>
                          <p className="text-sm text-gray-600 mt-1">{notification.time}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Mark All as Read
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
