import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Layers, BadgeCheck, Truck } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const features = [
    {
        title: 'Competitive Wholesale Pricing',
        description: 'We offer the best margins for retail shop owners to maximize your profits.',
        icon: <IndianRupee className="w-8 h-8 text-white" />,
        gradient: 'from-orange-400 to-orange-600'
    },
    {
        title: 'Wide Range of Products',
        description: 'A comprehensive catalog of fast-moving products under one roof.',
        icon: <Layers className="w-8 h-8 text-white" />,
        gradient: 'from-yellow-400 to-yellow-600'
    },
    {
        title: 'Trusted Local Supplier',
        description: 'Years of credibility and trust built with retail shops in Polur.',
        icon: <BadgeCheck className="w-8 h-8 text-white" />,
        gradient: 'from-orange-500 to-red-500'
    },
    {
        title: 'Reliable Supply',
        description: 'Consistent stock availability ensuring your shop never runs out.',
        icon: <Truck className="w-8 h-8 text-white" />,
        gradient: 'from-yellow-500 to-orange-500'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Why Choose <span className="text-primary-600">Us</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.05}
                                transitionSpeed={2000}
                                className="h-full bg-white border text-center p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,0.3)] transition-shadow duration-300 relative overflow-hidden group border-gray-100"
                            >
                                <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-gradient-to-br opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500 ease-in-out z-0"></div>

                                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 transform rotate-3 group-hover:-rotate-3 transition-transform duration-300 relative z-10`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                                <p className="text-gray-600 font-medium relative z-10">
                                    {feature.description}
                                </p>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
