import React from 'react';
import { motion } from 'framer-motion';
import { Box, Cookie, Package, Sparkles } from 'lucide-react';

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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-2xl ${category.color} border ${category.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
                        >
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {category.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
