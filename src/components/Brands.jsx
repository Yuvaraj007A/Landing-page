import React, { useState } from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Britannia', domain: 'britannia.co.in', color: 'group-hover:text-red-600', width: 'w-32 md:w-40' },
  { name: 'Godrej', domain: 'godrejenterprises.com', color: 'group-hover:text-orange-500', width: 'w-32 md:w-40' },
  { name: 'Parle', domain: 'parleproducts.com', color: 'group-hover:text-yellow-500', width: 'w-24 md:w-32' },
  { name: 'Unilever', domain: 'hul.co.in', color: 'group-hover:text-blue-700', width: 'w-16 md:w-20' },
  { name: 'P&G', domain: 'pg.com', color: 'group-hover:text-blue-600', width: 'w-16 md:w-20' },
  { name: 'CavinKare', domain: 'cavinkare.com', color: 'group-hover:text-green-600', width: 'w-36 md:w-48' },
  { name: 'Emami', domain: 'emamiltd.in', color: 'group-hover:text-purple-600', width: 'w-28 md:w-36' },
  { name: 'Kaleesuwari', domain: 'kaleesuwari.com', color: 'group-hover:text-yellow-600', width: 'w-36 md:w-48' },
  { name: 'Gopuram', domain: 'gopuramproducts.com', color: 'group-hover:text-red-500', width: 'w-32 md:w-40' },
  { name: 'GRB', domain: 'grbdairyfood.com', color: 'group-hover:text-orange-600', width: 'w-24 md:w-32' },
  { name: 'Nestle', domain: 'nestle.com', color: 'group-hover:text-blue-500', width: 'w-32 md:w-40' },
  { name: 'Nescafe', domain: 'nescafe.com', color: 'group-hover:text-blue-500', width: 'w-32 md:w-40' },
  { name: 'Aachi', domain: 'aachifoods.com', color: 'group-hover:text-red-600', width: 'w-28 md:w-36' },
  { name: 'Anil', domain: 'theanilgroup.com', color: 'group-hover:text-red-600', width: 'w-28 md:w-36' },
  { name: 'ITC', domain: 'itcportal.com', color: 'group-hover:text-blue-800', width: 'w-24 md:w-32' },
  { name: 'Bingo', domain: 'bingosnacks.com', color: 'group-hover:text-blue-800', width: 'w-24 md:w-32' },
  { name: 'Lion Dates', domain: 'liondates.com', color: 'group-hover:text-red-700', width: 'w-24 md:w-32' },
  { name: 'Tata Tea', domain: 'tataconsumer.com', color: 'group-hover:text-green-700', width: 'w-48 md:w-56' },
  { name: 'Eveready', domain: 'evereadyindia.com', color: 'group-hover:text-red-600', width: 'w-32 md:w-40' },
  { name: 'Reckitt', domain: 'reckitt.com', color: 'group-hover:text-pink-600', width: 'w-32 md:w-40' },
  { name: 'Lizol', domain: 'lizol.co.in', color: 'group-hover:text-pink-600', width: 'w-32 md:w-40' },
  { name: 'Oshon', domain: 'oshonindia.com', color: 'group-hover:text-yellow-600', width: 'w-28 md:w-36' },
  { name: 'Nabati', domain: 'nabatisnack.co.id', color: 'group-hover:text-yellow-600', width: 'w-28 md:w-36' },
  { name: 'Rathnas', domain: 'rathnasweets.com', color: 'group-hover:text-yellow-600', width: 'w-28 md:w-36' },
  { name: 'Manimark', domain: 'manimark.com', color: 'group-hover:text-orange-600', width: 'w-48 md:w-56' },
  { name: 'Cadbuary', domain: 'cadbury.co.uk', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
  { name: 'VVD', domain: 'vvd.in', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
  { name: 'Parachute', domain: 'parachuteadvansed.com', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
  { name: 'GokulSantol', domain: 'gokulsantol.com', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
  { name: 'Colgate', domain: 'colgate.com', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
  { name: 'Dabur', domain: 'dabur.com', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
  { name: 'Himalaya', domain: 'himalayawellness.in', color: 'group-hover:text-purple-600', width: 'w-32 md:w-40' },
];

const BrandLogo = ({ brand }) => {
  const [imgError, setImgError] = useState(false);
  const showText = imgError || !brand.domain;

  return (
    <div className={`flex items-center justify-center group cursor-pointer h-16 ${brand.width}`}>
      {!showText ? (
        <img
          src={`https://img.logo.dev/${brand.domain}?token=pk_Vgnn2BaHS72krLmVjSybew`}
          alt={`${brand.name} Logo`}
          className="max-h-12 w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={`text-2xl md:text-3xl font-black tracking-tight text-gray-400 opacity-60 group-hover:opacity-100 transition-colors duration-300 ${brand.color}`}>
          {brand.name}
        </span>
      )}
    </div>
  );
};

const Brands = () => {
  // Duplicating the array multiple times to ensure smooth infinite scrolling
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-lg md:text-xl font-bold text-gray-400 uppercase tracking-widest">
          Trusted Brands We Supply
        </h3>
      </div>

      {/* Gradient masks for smooth fade in/out on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none mt-16"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none mt-16"></div>

      <div className="relative flex w-full overflow-hidden bg-gray-50/30 py-6">
        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap pl-16 md:pl-24"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <BrandLogo key={`${brand.name}-${index}`} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
