import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'Joined as GDSC’s ML/AI Member ',
    description: 'Selected as a member of the Machine Learning/AI team in the Google Developer Student Club, I’m excited to learn, grow, and explore new opportunities in this exciting field!',
    image: 'https://i.ibb.co/9HKX5k3f/ml-gdsc.jpg',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_gdscpvpsit-googledeveloperstudentclubspvpsit-activity-7102822260033417216-pRI1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI',
  },
  {
    title: "Google Cloud Campaign ",
    description: 'Our GDSC team successfully conducted the Google Cloud Campaign, where students gained valuable cloud skills and celebrated with goodies on January 31st, 2024. Looking forward to many more achievements ahead!',
    image: 'https://i.ibb.co/xqywbqNq/goodies-cloud.jpg',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_happy-cheers-to-everyone-i-am-here-with-activity-7158534679137058817-1ike?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI',
  },
  {
    title: 'GDSC - GDG ',
    description:
      'GDG is a global community of developers passionate about Google technologies. It provides a platform to learn, collaborate, and innovate through workshops, projects, and events focused on topics like machine learning, cloud computing, and app development.',
    image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-thumbnail_xIIW2IO.png',
    link: 'https://gdg.community.dev/gdg-on-campus-prasad-v-potluri-siddhartha-institute-of-technology-vijayawada-india/',
  },
   
  {
    title: 'Core Team Member',
    description: 'Veeranki Phani Sirisha: A creative Frontend Developer and WE Scholar, Sirisha’s eye for design and code will shape engaging and user-friendly experiences for our community!',
    image: '/gdg.jpg',
    link: 'https://www.linkedin.com/posts/gdg-pvpsit_gdgcoreteam-innovationinaction-techleaders-activity-7250482818575667203-SwqX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI',
  },
  {
    title: 'Gen AI Study Jam: Cohort 2',
    description: "Successfully Organized The Gen AI Study Jam: Cohort 2! Proud to have organized this amazing GDG event, bringing together passionate learners to explore Generative AI! From registration to course completion, it was a rewarding journey ensuring a smooth experience for all participants.",
    image: 'https://i.ibb.co/3YYHhCzk/genai.jpg',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_gdg-genai-aistudyjam-activity-7295832609350172673--arN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI',
  },
  {
  title: 'GDG Lead 2025–2026',
  description: "Honored to serve as the GDG Lead for 2025–2026! Leading a passionate community of developers, I am committed to fostering innovation, collaboration, and continuous learning. From organizing impactful tech events to empowering peers in domains like Web, AI, and Cloud, this journey is all about building a strong and inclusive developer ecosystem.",
  image: 'https://i.ibb.co/jvFVtRh2/onboarding.jpg',
  link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_gdgoc-pvpsit-techcommunity-activity-7377574476848226304-lgkj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI',
},
];

const Page3 = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-3 text-center">GDG CLUB</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
      <a
        href="https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_gdgoc-pvpsit-techcommunity-activity-7377574476848226304-lgkj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI"
        target="_blank"
        className="text-lg text-[#4e3934] px-6  bg-rgb(78, 57, 52) rounded-lg  underline"
      >
        GDG LEAD
      </a>
     
    </div>
    <br/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between bg-white border-2 border-[rgb(179,197,180)] p-4  text-justify transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={article.image}
              alt={`Article ${index + 1}`}
              className="w-full h-[300px] sm:h-[300px] md:h-[300px] object-cover object-center rounded-md mb-4"
            />

            <div className="flex flex-col flex-grow">
              <h3 className="text-xl text-center font-semibold text-[#4e3934]">{article.title}</h3>
              <p className="text-gray-700 mt-2 flex-grow">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block self-center mt-4 px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b]"
              >
                Deep Dive
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <br/>
    </div>
  );
};

export default Page3;
