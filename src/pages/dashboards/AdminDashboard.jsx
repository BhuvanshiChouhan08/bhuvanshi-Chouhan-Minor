
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Users, BarChart3, Shield, LogOut, User, Bell, Search, Settings, Activity, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  const systemStats = {
    totalUsers: 1248,
    activeCases: 156,
    systemUptime: '99.9%',
    dataProcessed: '2.4TB'
  };

  const userManagement = [
    { id: 1, name: 'Judge Rajesh Kumar', role: 'Judge', status: 'Active', lastLogin: '2024-01-20', cases: 23 },
    { id: 2, name: 'Clerk Priya Sharma', role: 'Court Clerk', status: 'Active', lastLogin: '2024-01-20', cases: 45 },
    { id: 3, name: 'Amit Patel', role: 'User', status: 'Active', lastLogin: '2024-01-19', cases: 2 },
    { id: 4, name: 'Judge Sunita Rao', role: 'Judge', status: 'Inactive', lastLogin: '2024-01-18', cases: 18 },
    { id: 5, name: 'Clerk Vikram Singh', role: 'Court Clerk', status: 'Active', lastLogin: '2024-01-20', cases: 38 }
  ];

  const auditLogs = [
    { id: 1, action: 'User Login', user: 'Judge Rajesh Kumar', timestamp: '2024-01-20 09:15:23', details: 'Successful login from IP 192.168.1.100' },
    { id: 2, action: 'Case Created', user: 'Clerk Priya Sharma', timestamp: '2024-01-20 09:30:45', details: 'New case VV2024001239 created' },
    { id: 3, action: 'Document Upload', user: 'Amit Patel', timestamp: '2024-01-20 10:22:18', details: 'Evidence document uploaded for case VV2024001235' },
    { id: 4, action: 'Case Status Update', user: 'Judge Sunita Rao', timestamp: '2024-01-20 11:45:32', details: 'Case VV2024001234 status changed to In Progress' },
    { id: 5, action: 'System Backup', user: 'System', timestamp: '2024-01-20 12:00:00', details: 'Daily system backup completed successfully' }
  ];

  const systemAnalytics = {
    casesByType: [
      { type: 'Civil Matters', count: 45, percentage: 29 },
      { type: 'Criminal Cases', count: 38, percentage: 24 },
      { type: 'Property Disputes', count: 32, percentage: 21 },
      { type: 'Family Law', count: 25, percentage: 16 },
      { type: 'Other', count: 16, percentage: 10 }
    ],
    monthlyStats: {
      casesSubmitted: 89,
      casesResolved: 67,
      averageResolutionTime: 42,
      userSatisfaction: 94
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Judge': return 'text-purple-600 bg-purple-100';
      case 'Court Clerk': return 'text-blue-600 bg-blue-100';
      case 'System Admin': return 'text-orange-600 bg-orange-100';
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
                <Shield className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 font-medium">System Admin Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users, logs..."
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
                  <BarChart3 className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'users' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                </button>
                <button
                  onClick={() => setActiveTab('audit')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'audit' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Audit Logs</span>
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Activity className="h-5 w-5" />
                  <span>System Analytics</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* System Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900">{systemStats.totalUsers}</p>
                      </div>
                      <Users className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Active Cases</p>
                        <p className="text-3xl font-bold text-gray-900">{systemStats.activeCases}</p>
                      </div>
                      <FileText className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">System Uptime</p>
                        <p className="text-3xl font-bold text-gray-900">{systemStats.systemUptime}</p>
                      </div>
                      <Activity className="h-12 w-12 text-purple-600" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Data Processed</p>
                        <p className="text-3xl font-bold text-gray-900">{systemStats.dataProcessed}</p>
                      </div>
                      <BarChart3 className="h-12 w-12 text-yellow-600" />
                    </div>
                  </div>
                </div>
                
                {/* Quick System Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
                      <button 
                        onClick={() => setActiveTab('users')}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-3">
                      {userManagement.slice(0, 3).map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.role}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-gray-900">Recent Audit Logs</h2>
                      <button 
                        onClick={() => setActiveTab('audit')}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        View All
                      </button>
                    </div>
                    <div className="space-y-3">
                      {auditLogs.slice(0, 3).map((log) => (
                        <div key={log.id} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-gray-900">{log.action}</p>
                            <p className="text-xs text-gray-500">{log.timestamp}</p>
                          </div>
                          <p className="text-sm text-gray-600">{log.user}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* System Health */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">System Health</h2>
                  <div className="space-y-4">
                    {[
                      { name: 'Database Performance', value: 94, color: 'bg-green-500' },
                      { name: 'API Response Time', value: 87, color: 'bg-blue-500' },
                      { name: 'Storage Capacity', value: 68, color: 'bg-yellow-500' },
                      { name: 'Memory Usage', value: 45, color: 'bg-red-500' }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-gray-700 font-medium">{item.name}</p>
                          <p className="text-gray-900 font-semibold">{item.value}%</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${item.color}`} 
                            style={{width: `${item.value}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                  <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Add User
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">User Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Role</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Login</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Cases</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userManagement.map((user) => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="h-4 w-4 text-gray-600" />
                              </div>
                              <span>{user.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{user.lastLogin}</td>
                          <td className="py-3 px-4">{user.cases}</td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mr-2">
                              Edit
                            </button>
                            <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                              Deactivate
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Audit Logs</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search logs..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center">
                      <Settings className="h-4 w-4 mr-2" />
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">User</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Timestamp</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {auditLogs.map((log) => (
                        <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{log.action}</td>
                          <td className="py-3 px-4">{log.user}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{log.timestamp}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{log.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <nav className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-1 border border-blue-600 rounded bg-blue-600 text-white">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                {/* Case Type Distribution */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Type Distribution</h2>
                  <div className="space-y-6">
                    {systemAnalytics.casesByType.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full bg-blue-${(index + 5) * 100}`}></div>
                            <p className="text-gray-900 font-medium">{item.type}</p>
                          </div>
                          <p className="text-gray-900 font-medium">{item.count} cases ({item.percentage}%)</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full bg-blue-${(index + 5) * 100}`} 
                            style={{width: `${item.percentage}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monthly Performance */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Performance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {systemAnalytics.monthlyStats.casesSubmitted}
                      </div>
                      <div className="text-gray-700">Cases Submitted</div>
                    </div>
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {systemAnalytics.monthlyStats.casesResolved}
                      </div>
                      <div className="text-gray-700">Cases Resolved</div>
                    </div>
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">
                        {systemAnalytics.monthlyStats.averageResolutionTime} days
                      </div>
                      <div className="text-gray-700">Avg. Resolution Time</div>
                    </div>
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {systemAnalytics.monthlyStats.userSatisfaction}%
                      </div>
                      <div className="text-gray-700">User Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* System Recommendations */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">System Recommendations</h2>
                  <div className="space-y-4">
                    {[
                      { title: 'Optimize Database Performance', description: 'Regular maintenance and indexing to improve case search and filter operations.', impact: 'High' },
                      { title: 'User Training Sessions', description: 'Conduct training for court clerks on new document upload features.', impact: 'Medium' },
                      { title: 'System Backup Enhancement', description: 'Increase backup frequency for critical case documents.', impact: 'High' },
                      { title: 'Storage Capacity Upgrade', description: 'Current storage at 68% - plan upgrade within next 3 months.', impact: 'Medium' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.impact === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                        }`}>
                          <span className="font-bold text-sm">{item.impact}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
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

export default AdminDashboard;
