import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'THE BREATH OF OUR LIFE ',
    description:
      'In the journey of life, there exists a silent strength that shapes our existence — a mother. Her love, sacrifices, and guidance go unnoticed, yet she remains the anchor of our lives. Through every joy and sorrow, she nurtures and protects, symbolized by the purest word "AMMA." This piece is a tribute to her endless love and the unspoken bond that holds us together.',
    image: 'https://img.freepik.com/premium-photo/watercolor-painting-mother-her-baby_244157-3103.jpg?w=2000',
    link: 'https://www.miraquill.com/user.html?username=m_siri',
  },
  {
    title: 'THE EVERLASTING PRESENCE',
    description: 'Love is the most powerful and profound force that binds us together. It transcends time and space, bringing light to our darkest moments and warmth to the coldest of days. Love is not just a feeling; it is an experience that shapes who we are and how we connect with the world around us.',
    image: 'https://w0.peakpx.com/wallpaper/620/119/HD-wallpaper-pink-roses-a-bouquet-of-roses-pink-rose-petals-flowers-on-white-boards-white-wooden-background-beautiful-flowers-roses.jpg',
    link: 'https://www.yourquote.in/veeranki-phani-sirisha-di922/quotes/undefined-cmpixm',
  },
  {
    title: 'HEARTFELT BEAUTY : NATURE ',
    description: 'Nature is a timeless wonder, full of life and beauty. It provides peace, balance, and strength, reminding us of the world’s interconnectedness. Every tree, mountain, and ocean tells a story of resilience and harmony. In nature’s embrace, we find both solace and renewal.',
    image: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F497cb6c8-9d94-4565-9b8d-0b019e45eaa3_3840x2160.jpeg',
    link: 'https://eaditya.substack.com/p/heartfelt-beauty-nature?r=3nq1hw&utm_campaign=post&utm_medium=web&triedRedirect=true',
  },
  {
    title: "IT'S MAGICAL ",
    description: 'What could be the best way to propose to a girl? Giving gifts to her or making anything special to her or talking nicely to her and so on… But in reality…. all are wrong. These actions just make attractive and is always temporary. So, is there any way which can cherish a girl heart permanently?',
    image: 'https://peerlesswritings.wordpress.com/wp-content/uploads/2024/01/real.jpg?w=718',
    link: 'https://peerlesswritings.wordpress.com/wp-admin/post.php?post=115&action=edit',
  },
  {
    title: 'SEASON OF ETERNAL LOVE',
    description: 'Reaching this milestone marks the beginning of my fulfilling writing journey. I am thrilled to have published two poems with Thought_Hymns, and excited for the path ahead.',
    image: '/season.png',
    link: 'https://drive.google.com/file/d/1cn6ikJT-tKIE0Op17dC4sLvFqUd8eWX5/view?usp=sharing',
  },
  {
    title: 'BUTTERFLY EFFECT',
    description: "Everything happens for a reason, even if it's not immediately clear. Each moment, action, and decision is part of a larger journey. Trust that the pieces will fall into place when the time is right.",
    image: 'https://wallpaperaccess.com/full/371580.jpg',
    link: 'https://www.canva.com/design/DAGmo_ylnbo/dgZoOaX2lpDg_rPfTA9BNQ/edit?utm_content=DAGmo_ylnbo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  },
];

const Page2 = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-3 text-center">Article Gallery</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
      <a
        href="https://www.pvpsiddhartha.ac.in/dep_cse/docs/NL-July-2024.pdf#page=25"
        target="_blank"
        className="text-lg text-[#4e3934] px-6  bg-rgb(78, 57, 52) rounded-lg  underline"
      >
        Editorial Board Member
      </a>
      <p className="text-lg mb-3 text-center">Explore these articles with joy!</p>
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
                Read Article
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <br/>
    </div>
  );
};

export default Page2;
