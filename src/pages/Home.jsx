import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Categories from '../components/Categories';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="font-sans bg-gray-50 max-w-[100vw] overflow-x-hidden selection:bg-primary-500 selection:text-white">
            <Navbar />
            <Hero />
            <Brands />
            <Categories />
            <About />
            <WhyChooseUs />
            <Location />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
