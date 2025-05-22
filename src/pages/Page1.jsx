import React from 'react';
import { motion } from 'framer-motion';

const paintings = [
  { src: '/akka.jpg' },
  { src: '/me.jpg' },
  { src: '/mom.jpg' },
  { src: 'sri.jpg' },
  { src: '/panda.jpg' },
  { src: '/fish.jpg' },
];

const Page1 = () => {
  // Group into rows of 2 images
  const rows = [];
  for (let i = 0; i < paintings.length; i += 3) {
    rows.push(paintings.slice(i, i + 3));
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-3 text-center">Art Gallery</h1>
      <p className="text-lg mb-3 text-center">Get cherished with these drawings & paintings</p>
      <br/>
      <div className="flex flex-col gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6">
            {row.map((painting, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-[rgb(179,197,180)] p-2 flex justify-center items-center transition-transform duration-500"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img
                  src={painting.src}
                  alt={`Painting ${index + 1}`}
                  className="w-[350px] h-[440px] object-cover object-center rounded-md"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <br />
    </div>
  );
};

export default Page1;
