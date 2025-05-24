
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, FileText, Calendar, BarChart3, LogOut, User, Bell, Search, Filter, Clock } from 'lucide-react';

const JudgeDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const navigate = useNavigate();

  const pendingCases = [
    { id: 'VV2024001234', title: 'Property Dispute - XYZ vs ABC', priority: 'High', assignedDate: '2024-01-15', nextHearing: '2024-02-01', status: 'Pending Review' },
    { id: 'VV2024001235', title: 'Civil Matter - Contract Breach', priority: 'Medium', assignedDate: '2024-01-18', nextHearing: '2024-02-05', status: 'In Progress' },
    { id: 'VV2024001236', title: 'Criminal Case - Theft Charges', priority: 'High', assignedDate: '2024-01-20', nextHearing: '2024-01-30', status: 'Urgent' },
    { id: 'VV2024001237', title: 'Family Law - Custody Dispute', priority: 'Medium', assignedDate: '2024-01-22', nextHearing: '2024-02-10', status: 'Scheduled' },
    { id: 'VV2024001238', title: 'Labor Dispute - Wrongful Termination', priority: 'Low', assignedDate: '2024-01-19', nextHearing: '2024-02-15', status: 'Pending' }
  ];

  const todaySchedule = [
    { time: '09:00 AM', case: 'VV2024001240', title: 'Property Dispute Hearing', type: 'Initial Hearing' },
    { time: '10:30 AM', case: 'VV2024001241', title: 'Contract Breach Review', type: 'Evidence Review' },
    { time: '02:00 PM', case: 'VV2024001242', title: 'Criminal Case Proceeding', type: 'Final Arguments' },
    { time: '03:30 PM', case: 'VV2024001243', title: 'Family Court Session', type: 'Mediation' }
  ];

  const caseStats = {
    totalCases: 147,
    pendingCases: 23,
    resolvedThisMonth: 18,
    avgResolutionTime: '45 days'
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-100 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'in progress': return 'text-blue-600 bg-blue-100';
      case 'scheduled': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredCases =
    priorityFilter === "all"
      ? pendingCases
      : pendingCases.filter(
          (legalCase) => legalCase.priority.toLowerCase() === priorityFilter
        );

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
                <span className="text-gray-700 font-medium">Judge Dashboard</span>
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
                  onClick={() => setActiveTab('pending')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'pending' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Pending Cases</span>
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Today's Schedule</span>
                </button>
                <button
                  onClick={() => setActiveTab('statistics')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'statistics' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Statistics</span>
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
                        <p className="text-gray-500 text-sm">Total Cases</p>
                        <p className="text-3xl font-bold text-gray-900">{caseStats.totalCases}</p>
                      </div>
                      <Scale className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Pending Cases</p>
                        <p className="text-3xl font-bold text-gray-900">{caseStats.pendingCases}</p>
                      </div>
                      <FileText className="h-12 w-12 text-yellow-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Resolved This Month</p>
                        <p className="text-3xl font-bold text-gray-900">{caseStats.resolvedThisMonth}</p>
                      </div>
                      <BarChart3 className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Avg Resolution</p>
                        <p className="text-3xl font-bold text-gray-900">{caseStats.avgResolutionTime}</p>
                      </div>
                      <Clock className="h-12 w-12 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Today's Schedule Preview */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Today's Schedule</h2>
                    <button 
                      onClick={() => setActiveTab('schedule')}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {todaySchedule.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-600 w-20">{item.time}</div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.case} - {item.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pending' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Pending Cases</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Filter className="h-4 w-4 text-gray-500" />
                      <select
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="all">All Priorities</option>
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low">Low Priority</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Case ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Title</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Priority</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Assigned Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Next Hearing</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCases.map((case_) => (
                        <tr key={case_.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-blue-600">{case_.id}</td>
                          <td className="py-3 px-4 max-w-xs">
                            <p className="truncate">{case_.title}</p>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(case_.priority)}`}>
                              {case_.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">{case_.assignedDate}</td>
                          <td className="py-3 px-4">{case_.nextHearing}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                              {case_.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mr-2">
                              Review
                            </button>
                            <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                              Schedule
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Schedule</h2>
                <div className="space-y-4">
                  {todaySchedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-6 p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{item.time}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">Case ID: {item.case}</p>
                        <p className="text-sm text-gray-500">{item.type}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Start Session
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'statistics' && (
              <div className="space-y-6">
                {/* Statistics Overview */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Statistics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">147</div>
                      <div className="text-gray-700">Total Cases Handled</div>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">124</div>
                      <div className="text-gray-700">Cases Resolved</div>
                    </div>
                    <div className="text-center p-6 bg-yellow-50 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">23</div>
                      <div className="text-gray-700">Pending Cases</div>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">45</div>
                      <div className="text-gray-700">Avg Days to Resolve</div>
                    </div>
                    <div className="text-center p-6 bg-red-50 rounded-lg">
                      <div className="text-3xl font-bold text-red-600 mb-2">8</div>
                      <div className="text-gray-700">High Priority Cases</div>
                    </div>
                    <div className="text-center p-6 bg-indigo-50 rounded-lg">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                      <div className="text-gray-700">Resolution Rate</div>
                    </div>
                  </div>
                </div>

                {/* Case Types Breakdown */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Case Types Distribution</h3>
                  <div className="space-y-4">
                    {[
                      { type: 'Civil Matters', count: 45, percentage: 31 },
                      { type: 'Criminal Cases', count: 38, percentage: 26 },
                      { type: 'Property Disputes', count: 28, percentage: 19 },
                      { type: 'Family Law', count: 22, percentage: 15 },
                      { type: 'Contract Disputes', count: 14, percentage: 9 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                          <span className="font-medium text-gray-900">{item.type}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{width: `${item.percentage}%`}}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeDashboard;
