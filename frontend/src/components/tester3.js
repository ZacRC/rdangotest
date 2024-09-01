import { ZapIcon, LayersIcon, ShieldIcon, BoltIcon, ServerIcon, LockIcon, UsersIcon, CloudIcon, DatabaseIcon, RefreshCwIcon, SettingsIcon, TrendingUpIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const cardRefs = useRef([]);
  const contentRefs = useRef([]);
  const features = [
    {
      icon: <ZapIcon size={64} />,
      title: "Lightning Fast",
      miniFeatures: [
        { icon: <BoltIcon size={48} />, description: "Quick Load" },
        { icon: <ServerIcon size={48} />, description: "Optimized Backend" },
        { icon: <CloudIcon size={48} />, description: "Cloud Acceleration" },
        { icon: <DatabaseIcon size={48} />, description: "Efficient Caching" },
      ],
    },
    {
      icon: <LayersIcon size={64} />,
      title: "Scalable",
      miniFeatures: [
        { icon: <ServerIcon size={48} />, description: "Elastic Infrastructure" },
        { icon: <UsersIcon size={48} />, description: "Multi-tenant Support" },
        { icon: <SettingsIcon size={48} />, description: "Easy Configuration" },
        { icon: <TrendingUpIcon size={48} />, description: "Growth Ready" },
      ],
    },
    {
      icon: <ShieldIcon size={64} />,
      title: "Secure",
      miniFeatures: [
        { icon: <LockIcon size={48} />, description: "End-to-end Encryption" },
        { icon: <ShieldIcon size={48} />, description: "Advanced Firewall" },
        { icon: <UsersIcon size={48} />, description: "User Authentication" },
        { icon: <RefreshCwIcon size={48} />, description: "Regular Updates" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let newActiveFeature = 0;

      cardRefs.current.forEach((card, index) => {
        if (card && scrollPosition >= card.offsetTop) {
          newActiveFeature = index;
        }
      });

      setActiveFeature(newActiveFeature);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col items-center">
        {features.map((feature, index) => (
          <div key={index} className="w-full flex flex-col lg:flex-row items-start justify-center mb-24 last:mb-0">
            <motion.div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`w-full lg:w-1/3 flex flex-col items-center p-4 rounded-lg transition-colors border-2 ${
                activeFeature === index
                  ? "bg-gray-900 border-green-500"
                  : "bg-black border-gray-700"
              } sticky top-24`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: activeFeature === index ? 1 : 0.5, 
                y: 0,
                scale: activeFeature === index ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 text-green-500">
                {feature.icon}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
            <motion.div
              ref={(el) => (contentRefs.current[index] = el)}
              className="w-full lg:w-2/3 p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden flex flex-col justify-center shadow-lg mt-8 lg:mt-0 lg:ml-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: activeFeature === index ? 1 : 0, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xl font-medium text-center text-gray-200 mb-8">
                <div className="flex justify-center mb-4 text-green-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-12">
                {feature.miniFeatures.map((miniFeature, miniIndex) => (
                  <motion.div
                    key={miniIndex}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: miniIndex * 0.1 }}
                  >
                    <div className="text-green-500 mb-4">{miniFeature.icon}</div>
                    <p className="text-sm text-gray-400 text-center">{miniFeature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

