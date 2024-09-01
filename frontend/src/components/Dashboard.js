import {
    SearchIcon,
    MoonIcon,
    BellIcon,
    LayoutDashboardIcon,
    BarChartIcon,
    UsersIcon,
    MailIcon,
    CalendarIcon,
    SettingsIcon,
    LogOutIcon,
    MoreVerticalIcon,
  } from "lucide-react";
  import { render } from "react-dom";
  import React from "react";
  const Dashboard = () => {
    return (
      <div className="flex h-screen bg-gray-900 text-white">
        <aside className="w-64 p-6 space-y-4">
          <div className="flex items-center space-x-2 mb-8">
            <div
              className="w-8 h-8 bg-blue-500 rounded-full" ></div>
            <span className="text-xl font-bold">
              SPECTRA
            </span>
          </div>
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 p-2 bg-gray-800 rounded" >
              <LayoutDashboardIcon size={20} />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2" >
              <BarChartIcon size={20} />
              <span>Analytics</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2" >
              <UsersIcon size={20} />
              <span>Contacts</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2" >
              <MailIcon size={20} />
              <span>Mail</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2" >
              <CalendarIcon size={20} />
              <span>Calendar</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 p-2" >
              <SettingsIcon size={20} />
              <span>Settings</span>
            </a>
          </nav>
          <div className="absolute bottom-6 left-6">
            <a
              href="#"
              className="flex items-center space-x-2 p-2" >
              <LogOutIcon size={20} />
              <span>Log out</span>
            </a>
          </div>
        </aside>
        <main className="flex-1 p-8">
          <header
            className="flex justify-between items-center mb-8" >
            <h1 className="text-3xl font-bold">
              Overview
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="bg-gray-800 rounded-full py-2 px-4 pl-10" />
                <SearchIcon
                  className="absolute left-3 top-2.5"
                  size={20} />
              </div>
              <button
                className="p-2 bg-gray-800 rounded-full" >
                <MoonIcon size={20} />
              </button>
              <button
                className="p-2 bg-gray-800 rounded-full" >
                <BellIcon size={20} />
              </button>
              <img
                src="https://example.com/avatar.jpg"
                alt="User avatar"
                className="w-10 h-10 rounded-full" />
            </div>
          </header>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-indigo-400 rounded-3xl p-6">
              <div
                className="flex justify-between items-start mb-4" >
                <div className="flex items-center space-x-2">
                  <div className="bg-white p-2 rounded">
                    <LayoutDashboardIcon
                      size={20}
                      className="text-indigo-400" />
                  </div>
                  <span className="font-bold">
                    Profit
                  </span>
                </div>
                <MoreVerticalIcon size={20} />
              </div>
              <div className="mb-4">
                <img
                  src="https://example.com/profit-image.png"
                  alt="Profit visualization"
                  className="w-full" />
              </div>
              <div>
                <p className="text-sm">
                  +14% Since last week
                </p>
                <p className="text-4xl font-bold">
                  $12 895.5
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl p-6">
              <div
                className="flex justify-between items-center mb-4" >
                <h2 className="font-bold">
                  Sales Report
                </h2>
                <button
                  className="text-sm bg-gray-700 px-3 py-1 rounded-full" >
                  Week
                </button>
              </div>
              <div className="flex space-x-2 mb-2">
                <span className="text-sm text-gray-400">
                  Earnings
                </span>
                <span className="text-sm text-gray-400">
                  Payments
                </span>
              </div>
              <div className="h-40 flex items-end space-x-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day, index) => (
                    <div
                      key={day}
                      className="flex-1 flex flex-col items-center" >
                      <div
                        className="w-full bg-gray-700 rounded"
                        style={{
                          height: `${Math.random() * 100}%`,
                        }} ></div>
                      <span className="text-xs mt-2">
                        {day}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl p-6">
              <div
                className="flex justify-between items-center mb-4" >
                <h2 className="font-bold">
                  Analytical AI
                </h2>
                <span className="text-sm text-gray-400">
                  September 2023
                </span>
              </div>
              <div className="h-40 relative">
                <svg
                  viewBox="0 0 100 20"
                  className="w-full h-full" >
                  <path
                    d="M0,10 Q25,20 50,10 T100,10"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="0.5" />
                </svg>
              </div>
              <div
                className="flex justify-between text-xs text-gray-400" >
                <span>1</span>
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>25</span>
                <span>30</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div
              className="col-span-2 bg-gray-800 rounded-3xl p-6" >
              <div
                className="flex justify-between items-center mb-4" >
                <div>
                  <h2 className="font-bold">
                    Invoices
                  </h2>
                  <p className="text-sm text-gray-400">
                    3,251 invoices
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="p-2 bg-gray-700 rounded" >
                    <LayoutDashboardIcon size={16} />
                  </button>
                  <button
                    className="flex items-center space-x-1 bg-gray-700 px-3 py-1 rounded" >
                    <LayoutDashboardIcon size={16} />
                    <span>Report</span>
                  </button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="pb-2">
                      Customer name
                    </th>
                    <th className="pb-2">
                      Date
                    </th>
                    <th className="pb-2">
                      Amount
                    </th>
                    <th className="pb-2">
                      Product ID
                    </th>
                    <th className="pb-2">
                      Status
                    </th>
                    <th className="pb-2">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Arlene McCoy",
                      date: "31 Aug 2023",
                      amount: "$3,230.2",
                      productId: "001423",
                      status: "Paid",
                    },
                    {
                      name: "Jacob Jones",
                      date: "30 Aug 2023",
                      amount: "$5,630.5",
                      productId: "004533",
                      status: "Unpaid",
                    },
                    {
                      name: "Marvin Butcher",
                      date: "30 Aug 2023",
                      amount: "$4,230.0",
                      productId: "001784",
                      status: "Paid",
                    },
                    {
                      name: "Ralph Edwards",
                      date: "29 Aug 2023",
                      amount: "$3,082.2",
                      productId: "001515",
                      status: "Paid",
                    },
                  ].map((invoice, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-700" >
                      <td
                        className="py-2 flex items-center space-x-2" >
                        <img
                          src={`https://example.com/avatar${index + 1}.jpg`}
                          alt={invoice.name}
                          className="w-8 h-8 rounded-full" />
                        <span>{invoice.name}</span>
                      </td>
                      <td className="py-2">
                        {invoice.date}
                      </td>
                      <td className="py-2">
                        {invoice.amount}
                      </td>
                      <td className="py-2">
                        {invoice.productId}
                      </td>
                      <td className="py-2">
                        <span
                          className={`px-2 py-1 rounded ${invoice.status === "Paid" ? "bg-green-900 text-green-300" : "bg-orange-900 text-orange-300"}`} >
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-2 text-indigo-400">
                        More
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-800 rounded-3xl p-6">
              <div
                className="flex justify-between items-center mb-4" >
                <h2 className="font-bold">
                  Activity
                </h2>
                <MoreVerticalIcon size={20} />
              </div>
              <div
                className="relative w-48 h-48 mx-auto mb-4" >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full" >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4c1d95"
                    strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="10"
                    strokeDasharray="282.7"
                    strokeDashoffset="70" />
                </svg>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center" >
                  <span className="text-4xl font-bold">
                    +13%
                  </span>
                  <span className="text-sm text-gray-400">
                    Since last week
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Transactions
                    </span>
                    <span className="text-sm font-bold">
                      452
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 h-1 mt-1" >
                    <div
                      className="bg-indigo-400 h-full"
                      style={{
                        width: "70%",
                      }} ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Payouts
                    </span>
                    <span className="text-sm font-bold">
                      412
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 h-1 mt-1" >
                    <div
                      className="bg-orange-400 h-full"
                      style={{
                        width: "60%",
                      }} ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Sales
                    </span>
                    <span className="text-sm font-bold">
                      715
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 h-1 mt-1" >
                    <div
                      className="bg-gray-400 h-full"
                      style={{
                        width: "90%",
                      }} ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      Reports
                    </span>
                    <span className="text-sm font-bold">
                      128
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 h-1 mt-1" >
                    <div
                      className="bg-red-400 h-full"
                      style={{
                        width: "40%",
                      }} ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  export default Dashboard;
  render(<Dashboard />, document.getElementById("root"));
  