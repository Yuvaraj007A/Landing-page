import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CanvasBackground from './CanvasBackground';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden bg-primary-900">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                    alt="Wholesale Grocery"
                    className="w-full h-full object-cover opacity-10 object-center mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-primary-900/60 to-transparent mix-blend-multiply"></div>
            </div>

            <CanvasBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
                <div className="md:w-2/3 lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white font-semibold text-sm mb-4 border border-white/20 uppercase tracking-widest shadow-lg">
                            Established Supplier
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
                            Your Trusted <br className="hidden md:block" /> Wholesale Partner <br className="hidden md:block" /> for <span className="text-primary-400">Daily Essentials</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    >
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 font-medium drop-shadow-md">
                            Supplying bulk biscuits, confectioneries, savouries, snacks and household products for retailers at unbeatable prices.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="#products" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-primary-900 bg-primary-400 hover:bg-primary-300 shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all duration-300 transform hover:-translate-y-1">
                            Explore Products
                            <ChevronRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-xl text-primary-900 bg-white hover:bg-gray-100 hover:border-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
