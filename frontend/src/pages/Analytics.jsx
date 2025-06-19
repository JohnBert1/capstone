
import { useState } from "react"
import { Calendar, RefreshCw, BarChart3, Users, User, FileText, TrendingUp, Users2, PieChart } from "lucide-react"
import Sidebar from '../components/Sidebar'
export default function Analytics() {
  const [activeTab, setActiveTab] = useState("membership")
  const [activeChartTab, setActiveChartTab] = useState("growth")

  const chartData = [
    { month: "Jan 2023", positive: 8, negative: 2, height: 60 },
    { month: "Feb 2023", positive: 10, negative: 4, height: 80 },
    { month: "Mar 2023", positive: 9, negative: 3, height: 70 },
    { month: "Apr 2023", positive: 12, negative: 6, height: 90 },
    { month: "May 2023", positive: 8, negative: 2, height: 60 },
    { month: "Jun 2023", positive: 11, negative: 5, height: 85 },
  ]

  const memberStatus = [
    { label: "Active", value: "1,124 (90%)", color: "bg-green-500", percentage: 90 },
    { label: "Inactive", value: "87 (7%)", color: "bg-orange-500", percentage: 7 },
    { label: "New (< 3 months)", value: "37 (3%)", color: "bg-blue-500", percentage: 3 },
  ]

  const ageDistribution = [
    { label: "0-12 years", percentage: 15 },
    { label: "13-18 years", percentage: 12 },
    { label: "19-35 years", percentage: 22 },
    { label: "36-65 years", percentage: 25 },
  ]

  const membershipDuration = [
    { label: "< 1 year", percentage: 15 },
    { label: "1-3 years", percentage: 20 },
    { label: "3-5 years", percentage: 20 },
    { label: "5-10 years", percentage: 22 },
  ]

  const ministryInvolvement = [
    { label: "Worship Team", count: 45 },
    { label: "Children's Ministry", count: 38 },
    { label: "Youth Group", count: 32 },
    { label: "Outreach", count: 28 },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "attendance", label: "Attendance", icon: Users2 },
    { id: "membership", label: "Membership", icon: User },
    { id: "resources", label: "Resources", icon: FileText },
  ]

  const chartTabs = [
    { id: "growth", label: "Growth", icon: Users },
    { id: "age", label: "Age", icon: BarChart3 },
    { id: "gender", label: "Gender", icon: PieChart },
    { id: "status", label: "Status", icon: TrendingUp },
  ]

  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className='w-70  border-r-2'>
        <Sidebar />
      </div>

      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
        {/* Analytics Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Analytics</h1>
          <p className="text-sm text-gray-600">View and analyze church data and generate reports.</p>
        </div>

        {/* Controls Row */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex gap-3 items-center flex-wrap">
            <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded text-sm">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Mar 01, 2025 - Mar 25, 2025</span>
            </div>
            <select className="px-3 py-2 bg-white border border-gray-300 rounded text-sm min-w-[180px]">
              <option>All Events</option>
              <option>Sunday Service</option>
              <option>Bible Study</option>
            </select>
            <select className="px-3 py-2 bg-white border border-gray-300 rounded text-sm min-w-[180px]">
              <option>All Demographics</option>
              <option>Age Groups</option>
              <option>Gender</option>
            </select>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search analytics..."
              className="px-3 py-2 border border-gray-300 rounded text-sm w-56"
            />
            <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
              <RefreshCw className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-4 border-b border-gray-200 pb-1">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-0 py-2 text-sm border-b-2 transition-colors ${activeTab === tab.id
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                  }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="text-right text-xs text-gray-500 mb-6">Last updated: 3/25/2025, 7:29:55 PM</div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Membership Growth Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Membership Growth</h3>
              <p className="text-sm text-gray-600">Track membership trends and demographics</p>
            </div>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              {chartTabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveChartTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs border rounded transition-colors ${activeChartTab === tab.id
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                )
              })}
              <select className="ml-auto px-3 py-1.5 border border-gray-300 rounded text-xs">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>

            <div className="h-72 bg-gray-50 rounded relative">
              {/* Chart Grid Lines */}
              <div className="absolute inset-0 grid grid-rows-4 p-5">
                {[165, 124, 83, 41].map((value, index) => (
                  <div key={index} className="border-t border-dashed border-gray-300 relative">
                    <span className="absolute -left-5 -top-2.5 text-xs text-gray-400">{value}</span>
                  </div>
                ))}
              </div>

              {/* Chart Bars */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-10 pb-10">
                {chartData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center w-10">
                    <div className="flex flex-col items-center mb-1 text-xs">
                      <span className="text-green-600 font-medium">+{data.positive}</span>
                      <span className="text-red-500 font-medium">-{data.negative}</span>
                    </div>
                    <div className="w-full bg-green-500 rounded-t" style={{ height: `${data.height}px` }}></div>
                    <div className="mt-2 text-xs text-gray-600 text-center leading-tight">{data.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Member Status */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-900">Member Status</h3>
            </div>

            <div className="space-y-4">
              {memberStatus.map((status, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${status.color}`}></div>
                      <span className="text-sm text-gray-700">{status.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{status.value}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${status.color} transition-all duration-300`}
                      style={{ width: `${status.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demographics Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Membership Demographics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Age Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Age Distribution</h3>
            <div className="space-y-3">
              {ageDistribution.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <div className="flex-1 mx-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="font-medium text-gray-900 min-w-[35px] text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Duration */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Membership Duration</h3>
            <div className="space-y-3">
              {membershipDuration.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <div className="flex-1 mx-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="font-medium text-gray-900 min-w-[35px] text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ministry Involvement */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Ministry Involvement</h3>
            <div className="space-y-3">
              {ministryInvolvement.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <div className="flex-1 mx-3 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${(item.count / 45) * 100}%` }}
                    ></div>
                  </div>
                  <span className="font-medium text-gray-900 min-w-[35px] text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}