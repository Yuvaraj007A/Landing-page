import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-20 bg-primary-900 text-white relative overflow-hidden">
            {/* Decorative SVGs */}
            <div className="absolute opacity-10 top-0 left-0 w-full h-full pointer-events-none">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    <polygon fill="currentColor" points="0,100 100,0 100,100" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Visit Our Shop in <span className="text-secondary-400">Polur</span>
                        </h2>
                        <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg font-medium leading-relaxed">
                            Find the best wholesale deals for your retail shop. Easy accessibility and ample loading space for bulk purchases.
                        </p>

                        <a
                            href="https://maps.app.goo.gl/NFmNC21DPjLQ9djNA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-secondary-500 text-secondary-900 font-bold rounded-lg shadow-lg shadow-secondary-500/30 hover:bg-secondary-400 hover:shadow-secondary-500/50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Navigation className="mr-3 w-5 h-5 drop-shadow-sm" />
                            Get Directions
                        </a>
                    </motion.div>
                </div>

                <div className="md:w-1/2 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-2 rounded-2xl shadow-2xl relative"
                    >
                        <div className="absolute -top-4 -right-4 bg-primary-500 text-white p-4 rounded-xl shadow-lg z-20 flex items-center justify-center font-bold">
                            <MapPin className="w-6 h-6 mr-2" />
                            Store Location
                        </div>
                        {/* Embedded Google Map iframe can be used here. Leaving a stylised placeholder linking to map if iframe not allowed, but here is a functional iframe pointing to a generic map (if no exact URL provided. Since goo.gl provided, embedding standard is tricky due to cors/redirects, using an image representation) */}
                        <a
                            href="https://maps.app.goo.gl/NFmNC21DPjLQ9djNA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-xl relative group rounded-xl bg-gray-200"
                        >
                            <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="bg-white text-primary-900 px-6 py-3 rounded-full font-bold shadow-xl flex items-center">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    View on Google Maps
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
