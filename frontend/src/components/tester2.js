import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Camera, Video } from "lucide-react";

const LandingSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const secondaryControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			secondaryControls.start("visible");
		}
	}, [isInView, mainControls, secondaryControls]);

	return (
		<section
			ref={ref}
			className="w-full max-w-full min-h-[66vh] flex flex-col justify-center items-center overflow-hidden relative bg-black"
		>
			<div className="absolute top-8 left-8">
				<Camera className="text-gray-600" size={36} />
			</div>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.5, delay: 0.25 }}
				className="text-center mb-6"
			>
				<h1 className="text-3xl md:text-5xl font-bold mb-3">
					Spend your time
				</h1>
			</motion.div>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={secondaryControls}
				transition={{ duration: 0.5, delay: 0.75 }}
				className="text-center"
			>
				<motion.h2
					className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
					animate={{
						scale: [1, 1.05, 1],
						rotate: [0, 3, -3, 0],
						textShadow: [
							"0px 0px 6px rgba(0, 255, 0, 0.7)",
							"0px 0px 12px rgba(0, 255, 0, 0.8)",
							"0px 0px 6px rgba(0, 255, 0, 0.7)",
						],
					}}
					transition={{
						duration: 4,
						ease: "easeInOut",
						times: [0, 0.5, 1],
						repeat: Infinity,
						repeatDelay: 1,
					}}
				>
					EFFICIENTLY
				</motion.h2>
			</motion.div>
			<div className="absolute bottom-8 right-8">
				<Video className="text-gray-600" size={36} />
			</div>
		</section>
	);
};

export default LandingSection;
