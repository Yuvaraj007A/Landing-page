import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <Tilt
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            scale={1.02}
                            transitionSpeed={2000}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(234,88,12,0.3)] group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Wholesale store interior"
                                className="w-full h-[500px] object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white font-bold text-xl drop-shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    Our Warehouse
                                </span>
                            </div>
                        </Tilt>
                        {/* Decorative background blocks */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-300 rounded-full opacity-50 -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-secondary-600 font-bold uppercase tracking-wider text-sm mb-2 block">About Our Shop</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            A Legacy of <span className="text-primary-600">Quality</span> & <span className="text-primary-600">Trust</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                            K.R. Arumugam General Merchant is a trusted wholesale supplier located in Polur, Tamil Nadu. We provide quality daily essential products including biscuits, confectioneries, savouries, and household items to retailers at competitive wholesale prices.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            With years of experience in the wholesale market, we understand the needs of local retail shop owners. Our strong supplier network allows us to offer the best margins, consistent availability, and fresh products directly from top manufacturers.
                        </p>

                        <div className="flex items-center gap-6">
                            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-primary-500">
                                <p className="text-3xl font-extrabold text-primary-600 mb-1">100%</p>
                                <p className="text-sm text-gray-600 font-medium">Authentic Quality</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary-500">
                                <p className="text-3xl font-extrabold text-secondary-500 mb-1">24/7</p>
                                <p className="text-sm text-gray-600 font-medium">Local Support</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
