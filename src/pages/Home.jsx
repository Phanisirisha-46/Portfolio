import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';  // Ensure this file exists
import Page4 from './Page4';
function Home() {

  return (
    <div className="flex flex-col min-h-screen font-sans  fade-in">

      {/* Main Content */}
        <main className="flex-grow p-6 bg-opacity-80">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="fcard flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 sm:gap-12 md:gap-20 lg:gap-28 xl:gap-40">

              {/* Text Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="roboto-slab-name-bold text-3xl sm:text-4xl lg:text-4xl">
                  Hi! I'm <span className="text-[#4e3934]">
                    <Typewriter
                      words={[ " Full Stack Developer", " Programmer", "an Artist", "an Author"]}
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h2>

                <p className="roboto-italic mt-2">Always eager to explore new things and learn from them.</p>
                <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
                  <p>
                    Passionate web developer who loves transforming ideas into elegant digital solutions. With my curiosity, I explore technologies that empower creativity and efficiency. Whether it's crafting responsive interfaces or solving logical puzzles through code, I enjoy every step of building something meaningful. I believe great design is where aesthetics meet purpose.
                  </p>
                </div>

                {/* Circle Buttons Section */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-10 md:gap-12 mt-6 animate-fade-in">
                  <Link to="/projects">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full transition duration-300 border-2 border-[#4e3934] font-bold text-base sm:text-lg md:text-xl bg-[#e5eee5] text-[#4e3934] hover:bg-[rgb(78,57,52)] hover:text-white">
                      Projects
                    </div>
                  </Link>
                  <Link to="/achievements">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full transition duration-300 border-2 border-[#4e3934] font-bold text-base sm:text-lg md:text-xl bg-[#e5eee5] text-[#4e3934] hover:bg-[rgb(78,57,52)] hover:text-white">
                      Achievements
                    </div>
                  </Link>
                  <a href="/CSE_22501A05J2.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full transition duration-300 border-2 border-[#4e3934] font-bold text-base sm:text-lg md:text-xl bg-[#e5eee5] text-[#4e3934] hover:bg-[rgb(78,57,52)] hover:text-white">
                      Resume
                    </div>
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-48 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-[28rem] flex-shrink-0 overflow-hidden border-2 border-[rgb(78,57,52)] rounded-2xl transition-transform duration-300">
                <img src="/port_pic.jpg" alt="Siri" className="w-full h-full object-cover" />
              </div>
            </div>
          
          <br/><br/>

          {/*coding*/}

           <h3 className="text-2xl font-bold text-center text-[#4e3934]">Coding Profiles</h3>
    <br/>
      <div className="flex flex-wrap justify-center gap-11">
        
 <div className="bg-white border-2 border-[rgb(179,197,180)] p-4 w-[300px] h-[200px] text-center transition-transform duration-500">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    alt="LeetCode"
    className="w-12 h-12 mx-auto mb-7"
  />
  <h3 className="text-xl font-semibold text-[#4e3934]">LeetCode</h3>
  <p className="text-gray-700 mt-2">Username: veerankiphanisirisha</p>
  <a
    href="https://leetcode.com/u/veerankiphanisirisha/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b]"
  >
    View Profile
  </a>
</div>


  {/* CodeChef */}
  <div className="bg-white border-2 border-[rgb(179,197,180)] p-4 w-[300px] h-[200px] text-center transition-transform duration-500">
    <img
      src="https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg"
      alt="CodeChef"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-[#4e3934]">CodeChef</h3>
    <p className="text-gray-700 mt-2">Username: phanisirisha</p>
    <a
      href="https://www.codechef.com/users/phanisirisha"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b]"
    >
      View Profile
    </a>
  </div>

  {/* HackerRank */}
  <div className="bg-white border-2 border-[rgb(179,197,180)] p-4 w-[300px] h-[200px] text-center transition-transform duration-500">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png"
      alt="HackerRank"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-[#4e3934]">HackerRank</h3>
    <p className="text-gray-700 mt-2">Username: veerankiphanisi1</p>
    <a
      href="https://www.hackerrank.com/veerankiphanisi1"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b]"
    >
      View Profile
    </a>
  </div>
</div>
            <div className="mt-20">
                <h3 className="text-2xl font-bold text-center text-[#4e3934]">Skills</h3><br/>
              <Page4 />
            </div>
         
            <br/><br/>
          {/* Creative Life Section */}
          <div className="mt-19 text-center">
            <h3 className="text-2xl font-bold text-[#4e3934]">My Creative Life</h3>
            <div className="flex flex-col gap-8 items-center mt-8">
              {/* Articles Card */}
              <div className="flex bg-white border-2 border-[rgb(179,197,180)] overflow-hidden w-full max-w-6xl transition-transform duration-500">
                <div className="p-6 text-left flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-[#4e3934] mb-2">Articles & Writings</h2>
                 <p className="text-[#4e3934] leading-relaxed">
                  <p>
  I started by sharing short quotes on <strong>YourQuote</strong> and poetry on <strong>Miraquill</strong>. This led to launching my website - <strong>Peerless Writings</strong> and joining my college's <strong>editorial board</strong>. I published two poems in "<strong>Season of Eternal Love</strong>" and became a <strong>Substack author for GrindKit</strong>, where I continue sharing my creative work using <strong>Canva</strong>.. Click on the link to explore more.
</p>
      </p>
      <p className="mt-4 italic text-[#4e3934] font-medium">
        “Expect the unexpected, because it’s true to happen”
      </p>

                  <a href="/page2" className="mt-4 text-center px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b] w-48">Explore</a>
                </div>
              </div>

              {/* Paintings Card */}
              <div className="flex bg-white border-2 border-[rgb(179,197,180)] overflow-hidden w-full max-w-6xl transition-transform duration-500">
                <div className="p-6 text-left flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold text-[#4e3934] mb-2">Colors & Canvases</h2>
                  <p className="text-[#4e3934] leading-relaxed">
                    Just like words, <strong>colors speak emotions</strong>. Painting has been my <strong>silent escape</strong> — a world where <strong>brushes become storytellers</strong>. I started painting when I was in <strong>3rd grade</strong>, and my passion has  <strong>grown stronger over the years</strong>.
  This began as a <strong>simple interest</strong> and has turned into a <strong>deep connection with colors and creativity</strong>.
  I never took formal classes or followed tutorials — everything I do comes from <strong>self-exploration</strong> and a <strong>love for blending colors</strong>.
  Today, I can complete any painting or drawing in just <strong>3 hours</strong>, purely driven by <strong>intuition and experience</strong>..
   Click on the link to explore the hues of my heart. </p>
                  <a href="/page1" className="mt-4 text-center px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b] w-48">Explore</a>
                </div>
              </div>

                 <div className="flex bg-white border-2 border-[rgb(179,197,180)] overflow-hidden w-full max-w-6xl transition-transform duration-500">
  <div className="p-6 text-left flex flex-col justify-center">
    <h2 className="text-2xl font-semibold text-[#4e3934] mb-2">Code & Community</h2>
    <p className="text-[#4e3934] leading-relaxed">
      My journey with <strong>GDSC (Google Developer Student Clubs)</strong> to <strong>GDG (Google Developer Groups)</strong> has been nothing short of transformational.
      Being part of this vibrant tech community gave me a chance to <strong>collaborate, contribute, and grow</strong> alongside passionate developers.
      From <strong>hands-on workshops</strong> to <strong>tech talks and hackathons</strong>, I’ve had the opportunity to learn.
      This community aren't just about code — they’re about <strong>building meaningful connections</strong>, <strong>sharing knowledge</strong>, and <strong>supporting each other's growth</strong>.
      Whether it’s hosting an event or contributing to open source, every moment has helped me <strong>evolve into a more confident and curious developer</strong>.
    </p>
    <a href="/page3" className="mt-4 text-center px-4 py-2 bg-[#4e3934] text-white rounded hover:bg-[#3a2f2b] w-48">Discover More</a>
  </div>
</div>


            </div>
          </div>
        </div>
        

        

        


        
      </main>
    </div>
  );
}

export default Home;
