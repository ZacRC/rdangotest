import {
    Check,
    X,
    Globe,
    Layout,
    Clock,
    Shield,
    Database,
    Key,
    Zap,
    CheckIcon,
    ArrowRightIcon,
    XIcon,
  } from "lucide-react";
  import React from "react";
  import { render } from "react-dom";
  const PricingTable = () => {
    return (
      <div
        className="max-w-full px-4 py-8 bg-gray-100 relative" >
        <div
          className="absolute inset-0 bg-grid-gray-200 bg-opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "20px 20px",
          }} ></div>
        <div className="relative z-10">
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8" >
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200 flex flex-col justify-between" >
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Individual
                </h2>
                <p className="text-gray-600 mb-6">
                  For hobbyists, students, and indie hackers.
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    $0 USD
                  </span>
                  <span className="text-gray-600 ml-2">
                    per month
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="w-full mb-4 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity bg-blue-600" >
                  Get Started
                  <ArrowRightIcon
                    className="inline-block ml-2 h-5 w-5" />
                </button>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline block text-center" >
                  + Compute Costs
                </a>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-200 flex flex-col justify-between" >
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Team
                </h2>
                <p className="text-gray-600 mb-6">
                  For small teams and early-stage startups.
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    $19 USD
                  </span>
                  <span className="text-gray-600 ml-2">
                    per user/month
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="w-full mb-4 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity bg-green-600" >
                  Get Started
                  <ArrowRightIcon
                    className="inline-block ml-2 h-5 w-5" />
                </button>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline block text-center" >
                  + Compute Costs
                </a>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-200 flex flex-col justify-between" >
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Organization
                </h2>
                <p className="text-gray-600 mb-6">
                  For larger teams with complex needs.
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    $29 USD
                  </span>
                  <span className="text-gray-600 ml-2">
                    per user/month
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="w-full mb-4 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity bg-purple-600" >
                  Get Started
                  <ArrowRightIcon
                    className="inline-block ml-2 h-5 w-5" />
                </button>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline block text-center" >
                  + Compute Costs
                </a>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-pink-200 flex flex-col justify-between" >
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Enterprise
                </h2>
                <p className="text-gray-600 mb-6">
                  For ultimate power and customization.
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">
                    Custom pricing
                  </span>
                </div>
              </div>
              <div>
                <button
                  className="w-full mb-4 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity bg-pink-600" >
                  Contact Sales
                  <ArrowRightIcon
                    className="inline-block ml-2 h-5 w-5" />
                </button>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline block text-center" >
                  + Compute Costs
                </a>
              </div>
            </div>
          </div>
          <div
            className="mt-12 bg-white rounded-lg shadow-lg p-8" >
            <h3
              className="text-2xl font-bold mb-8 text-center" >
              Build &amp; Deploy Features
            </h3>
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="font-semibold text-gray-600">
                Features
              </div>
              {["Individual", "Team", "Organization", "Enterprise"].map(
                (plan, index) => (
                  <div
                    key={index}
                    className="text-center font-semibold text-gray-800" >
                    {plan}
                  </div>
                ),
              )}
            </div>
            {[
              {
                feature: "Web Services",
                icon: <Globe className="w-8 h-8 mr-3" />,
                availability: [true, true, true, true],
              },
              {
                feature: "Static Sites",
                icon: <Layout className="w-8 h-8 mr-3" />,
                availability: [true, true, true, true],
              },
              {
                feature: "Cron Jobs",
                icon: <Clock className="w-8 h-8 mr-3" />,
                availability: [true, true, true, true],
              },
              {
                feature: "Custom Domains",
                icon: <Globe className="w-8 h-8 mr-3" />,
                availability: [false, true, true, true],
              },
              {
                feature: "SSL Certificates",
                icon: <Shield className="w-8 h-8 mr-3" />,
                availability: [true, true, true, true],
              },
              {
                feature: "Database Integration",
                icon: <Database className="w-8 h-8 mr-3" />,
                availability: [false, false, true, true],
              },
              {
                feature: "API Access",
                icon: <Key className="w-8 h-8 mr-3" />,
                availability: [false, true, true, true],
              },
              {
                feature: "Serverless Functions",
                icon: <Zap className="w-8 h-8 mr-3" />,
                availability: [false, false, true, true],
              },
            ].map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-4 py-8 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} rounded-lg transition-all duration-300 hover:shadow-md`} >
                <div
                  className="flex items-center text-gray-700 text-lg" >
                  {row.icon}
                  {row.feature}
                </div>
                {row.availability.map((available, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center" >
                    {available ? (
                      <Check
                        className="h-8 w-8 text-green-500" />
                    ) : (
                      <X className="h-8 w-8 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default PricingTable;
  render(<PricingTable />, document.getElementById("root"));
  