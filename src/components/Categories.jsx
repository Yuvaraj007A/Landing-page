import React from 'react';
import { motion } from 'framer-motion';
import { Box, Cookie, Package, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const categories = [
    {
        title: 'Biscuits',
        description: 'A wide variety of premium branded biscuits for every taste.',
        icon: <Cookie className="w-10 h-10 text-primary-500" />,
        color: 'bg-orange-50',
        borderColor: 'border-orange-200'
    },
    {
        title: 'Confectioneries',
        description: 'Chocolates, candies, and sweet treats from top brands.',
        icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
        color: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
    },
    {
        title: 'Savouries & Snacks',
        description: 'Crunchy namkeens, chips, and traditional Indian snacks.',
        icon: <Box className="w-10 h-10 text-primary-500" />,
        color: 'bg-orange-50',
        borderColor: 'border-orange-200'
    },
    {
        title: 'Household Products',
        description: 'Daily essential household items and cleaning supplies.',
        icon: <Package className="w-10 h-10 text-yellow-500" />,
        color: 'bg-yellow-50',
        borderColor: 'border-yellow-200'
    }
];

const Categories = () => {
    return (
        <section id="products" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Product <span className="text-primary-600">Categories</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        We stock a comprehensive range of fast-moving consumer goods to meet all your retail needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={15}
                                tiltMaxAngleY={15}
                                scale={1.05}
                                transitionSpeed={2000}
                                className={`h-full p-8 rounded-2xl ${category.color} border ${category.borderColor} shadow-sm hover:shadow-[0_15px_40px_-10px_rgba(251,146,60,0.4)] transition-shadow duration-300 relative overflow-hidden group`}
                            >
                                <div className="absolute top-0 right-0 -m-4 w-20 h-20 bg-white opacity-40 rounded-full group-hover:scale-[3] transition-transform duration-700 ease-out z-0 mix-blend-overlay"></div>

                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(251,146,60,0.3)] transition-all duration-300 relative z-10 rotate-3 group-hover:-rotate-3">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-3 relative z-10">{category.title}</h3>
                                <p className="text-gray-700 font-medium leading-relaxed relative z-10">
                                    {category.description}
                                </p>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
