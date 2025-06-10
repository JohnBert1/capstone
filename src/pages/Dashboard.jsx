import { useState } from "react";
import {
  Search,
  Plus,
  Calendar,
  Users,
  ClipboardList,
  Clock,
  UserPlus,
  CheckCircle,
  BookOpen,
  MessageSquare,
  BarChart3,
  Settings,
  Eye,
  Filter,
  MoreVertical,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    {
      title: "Total Members",
      value: "1,248",
      change: "+3.2% from last month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Today's Attendance",
      value: "187",
      change: "+2.5% from last month",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Upcoming Events",
      value: "12",
      change: "",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Pending Requests",
      value: "5",
      change: "",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const quickActions = [
    { title: "Add Member", icon: UserPlus, color: "text-blue-600" },
    {
      title: "Record Attendance",
      icon: ClipboardList,
      color: "text-green-600",
    },
    { title: "Book Resource", icon: BookOpen, color: "text-purple-600" },
    { title: "Send Message", icon: MessageSquare, color: "text-indigo-600" },
    { title: "View Reports", icon: BarChart3, color: "text-orange-600" },
    { title: "Settings", icon: Settings, color: "text-gray-600" },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "New Member Added",
      description: "Sarah Johnson was added to the database",
      user: "Admin User",
      time: "10 minutes ago",
      status: "Completed",
      icon: UserPlus,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      id: 2,
      type: "Sunday Service Check-in",
      description: "42 members checked in for Sunday service",
      user: "John Volunteer",
      time: "2 hours ago",
      status: "Completed",
      icon: CheckCircle,
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
    },
    {
      id: 3,
      type: "Resource Booking",
      description: "Main Hall booked for Youth Group meeting",
      user: "Youth Pastor",
      time: "3 hours ago",
      status: "Pending",
      icon: BookOpen,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
    },
  ];

  const recentMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      bgColor: "bg-slate-200",
      email: "sarah.johnson@example.com",
      phone: "(555) 123-4567",
      status: "Active",
      joinDate: "5/15/2023",
      attendance: 85,
    },
    {
      id: 2,
      name: "Michael Chen",
      initials: "MC",
      bgColor: "bg-purple-200",
      email: "michael.chen@example.com",
      phone: "(555) 987-6543",
      status: "Active",
      joinDate: "4/8/2023",
      attendance: 92,
    },
    {
      id: 3,
      name: "Jessica Williams",
      initials: "JW",
      bgColor: "bg-blue-200",
      email: "jessica.w@example.com",
      phone: "(555) 234-5678",
      status: "Inactive",
      joinDate: "6/20/2023",
      attendance: 45,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-700 bg-green-50";
      case "Inactive":
        return "text-amber-700 bg-amber-50";
      case "Pending":
        return "text-gray-700 bg-gray-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 80) return "text-green-600";
    if (attendance >= 60) return "text-amber-600";
    return "text-red-600";
  };

  const getActivityStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-700 bg-green-50";
      case "Pending":
        return "text-orange-700 bg-orange-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <aside className="w-70">
        <Sidebar />
      </aside>
      <div className="w-full h-174">
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h1 className="text-lg font-medium">Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>

            <button className="relative">
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                1
              </div>
              <svg
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button>
              <svg
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M19.4 15C19.1277 15.8031 19.2583 16.6718 19.7601 17.3C20.2619 17.9282 21.0377 18.2951 21.8625 18.26C21.9375 18.26 22 18.3225 22 18.3975V20.5225C22 20.5975 21.9375 20.66 21.8625 20.66C21.0375 20.6249 20.2616 20.9919 19.7599 21.5901C19.2581 22.1883 19.1276 23.0571 19.4 23.86"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className="w-8 h-8 rounded-full bg-orange-500"></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="text-blue-600 text-sm">Welcome back, John!</div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{stat.title}</div>
                  {stat.change && (
                    <div className="text-xs text-green-600">{stat.change}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <button
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center gap-2"
                  >
                    <IconComponent className={`w-6 h-6 ${action.color}`} />
                    <span className="text-sm font-medium text-center">
                      {action.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity and Recent Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold">Recent Activity</h3>
                <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                  <Eye className="w-4 h-4" />
                  View All
                </button>
              </div>
              <div className="p-4 space-y-4">
                {recentActivity.map((activity) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${activity.iconBg} flex-shrink-0`}
                      >
                        <IconComponent
                          className={`w-4 h-4 ${activity.iconColor}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium text-sm">
                            {activity.type}
                          </div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getActivityStatusColor(
                              activity.status
                            )}`}
                          >
                            {activity.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          {activity.description}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{activity.user}</span>
                          <span>•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div>
                  <h3 className="font-semibold">Recent Members</h3>
                  <p className="text-sm text-gray-600">
                    Latest members added to the system
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Church Members</h4>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search members..."
                        className="pl-10 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-40"
                      />
                    </div>
                    <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                      <Plus className="w-4 h-4" />
                      Add Member
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-200">
                        <th className="pb-2 font-medium">Member</th>
                        <th className="pb-2 font-medium">Contact</th>
                        <th className="pb-2 font-medium">Status</th>
                        <th className="pb-2 font-medium">Join Date</th>
                        <th className="pb-2 font-medium">Attendance</th>
                        <th className="pb-2 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="border-b border-gray-100"
                        >
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-6 h-6 rounded-full ${member.bgColor} flex items-center justify-center text-xs font-medium`}
                              >
                                {member.initials}
                              </div>
                              <div className="font-medium text-sm">
                                {member.name}
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="text-xs">
                              <div>{member.email}</div>
                              <div className="text-gray-500">
                                {member.phone}
                              </div>
                            </div>
                          </td>
                          <td className="py-3">
                            <span
                              className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(
                                member.status
                              )}`}
                            >
                              {member.status}
                            </span>
                          </td>
                          <td className="py-3 text-xs">{member.joinDate}</td>
                          <td className="py-3">
                            <span
                              className={`font-medium text-xs ${getAttendanceColor(
                                member.attendance
                              )}`}
                            >
                              {member.attendance}%
                            </span>
                          </td>
                          <td className="py-3">
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 text-center text-xs text-gray-500 border-t border-gray-200 mt-8">
          © 2025 LampConnect Church Management System
          <span className="mx-2">·</span>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <span className="mx-2">·</span>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </a>
          <span className="mx-2">·</span>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Help
          </a>
        </footer>
      </div>
    </div>
  );
}
