import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden bg-primary-50">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                    alt="Wholesale Grocery"
                    className="w-full h-full object-cover opacity-20 object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-transparent mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
                <div className="md:w-2/3 lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary-100 text-secondary-800 font-semibold text-sm mb-4 border border-secondary-200 uppercase tracking-widest shadow-sm">
                            Established Supplier
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Your Trusted Wholesale Partner for <span className="text-primary-600">Daily Essentials</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0 font-medium">
                            Supplying bulk biscuits, confectioneries, savouries, snacks and household products for retailers at unbeatable prices.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="#products" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 transition-all duration-300 transform hover:-translate-y-1">
                            Explore Products
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-600 text-base font-bold rounded-lg text-primary-700 bg-white hover:bg-primary-50 transition-all duration-300 shadow-sm">
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Decorative wave at the bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.55,189.7,92.83C234.34,77.74,277.51,64.24,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
