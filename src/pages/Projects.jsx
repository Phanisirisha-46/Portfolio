import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const articles = [
  {
    title: 'EDULIB',
    description:
      "EduLib is a comprehensive and user-friendly library management system specifically designed to streamline the operations of libraries in educational institutions. The primary goal of EduLib is to simplify the process of searching, borrowing, returning, and managing books for students, faculty, and librarians alike.",
    images: ['/edulib.png', '/edulib1.png'],
    link: 'https://edulib.vercel.app/',
  },
   {
    title: 'SMARTBRIDGE',
    description: 'SmartBridge is an innovative platform that connects mentors and learners, fostering a seamless learning environment. It helps users bridge gaps between ideas and progress through expert mentorship, continuous learning, and user-friendly features. This platform allows individuals to find mentors, sign up as mentors, and engage in a collaborative learning experience.',
    images: ['/smart1.png','/smart2.png'],
    link: 'https://smart-bridge.vercel.app',
  },
  {
    title: 'AQUASHRIMP',
    description:
      'The AquaShrimp application is a React-based app focused on prawn farming in Machilipatnam. Features include prawn info, weather, news, charts, and Q&A.',
    images: ['/aqua1.png', '/aqua2.png'],
    link: 'https://aqua-culture.netlify.app',
  },

  {
    title: 'VOICE-NAVIGATION-APP',
    description:
      'Voice-Navigation is an accessible Android app for the visually impaired, enabling users to navigate using voice commands and audio guidance. It allows voice input for source and destination, tap-to-select starting points, and provides real-time audio cues for step-by-step navigation.',
    images: ['/voice1.png', '/voice2.png'],
    link: 'https://github.com/Phanisirisha-46/Voice-Navigation-app',
  },

  {
    title: 'FETAL-HEALTH-CLASSIFICATION',
    description:
      'This project involves classifying fetal health based on various features extracted from a dataset. The aim is to use machine learning techniques to predict the health status of the fetus from the available data.',
    images: ['/fetal1.png', '/fetal2.png'],
    link: 'https://github.com/Phanisirisha-46/Fetal_Health_Classification',
  },
  {
    title: 'EMERGENCY ALERT TRIGGERING SYSTEM',
    description:"The system uses advanced data structures to manage and prioritize alerts efficiently. Hashtables ensure quick access to critical data like contacts and locations. Priority Queues rank alerts by urgency, enabling timely delivery of the most critical messages.",
    images: ['/em1.png', '/em2.png'],
    link: 'https://github.com/Phanisirisha-46/Emergency-Alert-Triggering-System',
  },



 
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
};

const Projects = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 text-center">INTERNSHIP</h1>

{/* Video Card Start */}
<div className="max-w-3xl mx-auto   overflow-hidden mb-8">
  <video className="w-70 h-90" autoPlay muted loop>
    <source src="\Screen Recording 2024-09-22 150946.mp4" type="video/mp4" />
  </video>
  <div className="p-4">
    <h2 className="text-lg text-[#4e3934] font-semibold">Rhyno EV Web App Demo</h2>
    <a
      href="https://drive.google.com/drive/folders/1vlI9xdKR5SWKt-tUvHqa8qwFVhOcLzRJ?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="text- underline"
    >
      Internship Details
    </a>
    <br/>
    <a
      href="https://github.com/Phanisirisha-46/RHYNO-EV"
      target="_blank"
      rel="noopener noreferrer"
      className="text- underline"
    >
      Git Repo
    </a>
  </div>
</div>
{/* Video Card End */}

<h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>




      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  className="flex flex-col h-[600px] bg-white border border-gray-300 overflow-hidden transition-shadow "
>

            <Slider {...sliderSettings}>
  {article.images.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`Slide ${idx + 1}`}
      className="w-full h-[400px] object-cover  px-2 py-2 rounded-md"
    />
  ))}
</Slider>


            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-[#4e3934] mt-3 text-center">{article.title}</h3>
              <p className="text-sm text-[#4e3934] flex-grow text-justify">{article.description}</p>
              <a
    href={article.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 px-4 py-2 bg-[#4e3934] text-white text-sm md:text-base rounded self-center hover:bg-[#3a2f2b]"
  >
    Link
  </a>
            </div>
          </motion.div>
        ))}
      </div>
      <br/>
    </div>
  );
};

export default Projects;
