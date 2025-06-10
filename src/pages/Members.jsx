

import { useState } from "react"
import { Search, Plus, Calendar, SlidersHorizontal, Filter, MoreVertical, ChevronDown } from "lucide-react"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const members = [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      bgColor: "bg-slate-200",
      email: "sarah.johnson@example.com",
      phone: "(555) 123-4567",
      status: "Active",
      joinDate: "3/15/2022",
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
      joinDate: "11/8/2021",
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
      joinDate: "1/20/2023",
      attendance: 45,
    },
    {
      id: 4,
      name: "David Rodriguez",
      initials: "DR",
      bgColor: "bg-amber-200",
      email: "david.r@example.com",
      phone: "(555) 876-5432",
      status: "Pending",
      joinDate: "5/10/2023",
      attendance: 0,
    },
    {
      id: 5,
      name: "Emily Thompson",
      initials: "ET",
      bgColor: "bg-green-200",
      email: "emily.t@example.com",
      phone: "(555) 345-6789",
      status: "Active",
      joinDate: "7/22/2022",
      attendance: 78,
    },
    {
      id: 6,
      name: "Robert Wilson",
      initials: "RW",
      bgColor: "bg-red-200",
      email: "robert.w@example.com",
      phone: "(555) 456-7890",
      status: "Active",
      joinDate: "5/18/2022",
      attendance: 88,
    },
    {
      id: 7,
      name: "Jennifer Martinez",
      initials: "JM",
      bgColor: "bg-indigo-200",
      email: "jennifer.m@example.com",
      phone: "(555) 567-8901",
      status: "Inactive",
      joinDate: "2/14/2023",
      attendance: 35,
    },
    {
      id: 8,
      name: "Thomas Anderson",
      initials: "TA",
      bgColor: "bg-gray-200",
      email: "thomas.a@example.com",
      phone: "(555) 678-9012",
      status: "Active",
      joinDate: "9/30/2021",
      attendance: 95,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-green-700 bg-green-50"
      case "Inactive":
        return "text-amber-700 bg-amber-50"
      case "Pending":
        return "text-gray-700 bg-gray-50"
      default:
        return "text-gray-700 bg-gray-50"
    }
  }

  const getAttendanceColor = (attendance) => {
    if (attendance >= 80) return "text-green-600"
    if (attendance >= 60) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-2xl font-semibold mb-6">Church Members</h1>

        {/* Search and Add Member */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Add Member
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Statuses</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white">
              <option>All Categories</option>
              <option>Leadership</option>
              <option>Volunteers</option>
              <option>Youth</option>
              <option>Children</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            Join Date
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <SlidersHorizontal className="w-4 h-4" />
            More Filters
          </button>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="font-medium">Church Members</h2>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="pl-10 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-48"
                />
              </div>

              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded">
                <Filter className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                Add Member
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
                  <th className="px-4 py-3 font-medium">Member</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Join Date</th>
                  <th className="px-4 py-3 font-medium">Attendance</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full ${member.bgColor} flex items-center justify-center text-sm font-medium`}
                        >
                          {member.initials}
                        </div>
                        <div className="font-medium">{member.name}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm">
                        <div>{member.email}</div>
                        <div className="text-gray-500">{member.phone}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{member.joinDate}</td>
                    <td className="px-4 py-3">
                      <span className={`font-medium ${getAttendanceColor(member.attendance)}`}>
                        {member.attendance}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-4 text-center text-xs text-gray-500 border-t border-gray-200">
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
  )
}
