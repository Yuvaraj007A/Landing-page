import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Building2, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Get In <span className="text-primary-600">Touch</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary-500 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-start mb-6">
                            <div className="bg-primary-50 p-3 rounded-full text-primary-600 mr-4">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Business Name</h3>
                                <p className="text-gray-700 font-medium text-lg">K.R. Arumugam General Merchant</p>
                                <p className="text-gray-500 text-sm mt-1">Wholesale Supplier</p>
                            </div>
                        </div>

                        <div className="flex items-start mb-6">
                            <div className="bg-secondary-50 p-3 rounded-full text-secondary-600 mr-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Phone Number</h3>
                                <a href="tel:+918760777186" className="text-primary-600 hover:text-primary-800 font-bold text-lg inline-flex items-center transition-colors">
                                    +91 8760777186
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-gray-100 p-3 rounded-full text-gray-600 mr-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Business Hours</h3>
                                <p className="text-gray-700 font-medium">Monday - Saturday</p>
                                <p className="text-gray-600">9:00 AM - 9:00 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-secondary-400 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-start mb-6">
                                <div className="bg-primary-50 p-3 rounded-full text-primary-600 mr-4">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                                    <address className="not-italic text-gray-700 leading-relaxed font-medium">
                                        Vasu Sriramalu Street,<br />
                                        Polur,<br />
                                        Tamil Nadu 606803,<br />
                                        India
                                    </address>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/NFmNC21DPjLQ9djNA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 w-full py-4 bg-primary-600 text-white font-bold rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            <MapPin className="w-5 h-5 mr-2" />
                            Open in Google Maps
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
