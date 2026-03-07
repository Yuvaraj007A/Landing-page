import React from 'react';
import { ShoppingBag, ChevronRight, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Col */}
                    <div className="col-span-1 lg:col-span-2 space-y-4">
                        <div className="flex items-center">
                            <ShoppingBag className="h-8 w-8 text-primary-500 mr-3" />
                            <h3 className="text-2xl font-bold text-white tracking-wide">
                                K.R. Arumugam <span className="text-primary-500 text-lg block sm:inline">General Merchant</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed max-w-sm font-medium">
                            Your trusted wholesale partner for daily essentials, supplying biscuits, confectioneries, savouries, snacks, and household products.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary-500">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Products', 'About', 'Location', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-primary-500 group-hover:translate-x-1 transition-transform" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary-500">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-secondary-500 flex-shrink-0" />
                                <span className="leading-relaxed">
                                    Vasu Sriramalu Street,<br />
                                    Polur, Tamil Nadu 606803,<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <Phone className="w-5 h-5 mr-3 text-secondary-500 flex-shrink-0" />
                                <a href="tel:+918760777186" className="hover:text-white transition-colors">
                                    +91 8760777186
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
                    <p className="text-gray-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} K.R. Arumugam General Merchant. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <p className="text-gray-600 text-sm">
                            <span className="text-primary-600 font-bold">Wholesale</span> Excellence
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
