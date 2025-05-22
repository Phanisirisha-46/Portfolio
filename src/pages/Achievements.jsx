import React, { useRef } from 'react';

const Achievements = () => {
  const videoRefs = useRef([]);

  const handlePlayWithSound = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.muted = false;
          video.play();
        } else {
          video.muted = true;
        }
      }
    });
  };


 const achievements = [
  {
    title: 'Women Engineers Scholar – TalentSprint & Google',
    description:
      'I’m proud to be among the top 1% selected from 22,000+ applicants for the prestigious Women Engineers program. This journey empowered me with technical skills, corporate training, and leadership insights.',
    video: '/v1.mp4',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_talentsprint-google-womenengineers-activity-7307760368343298049-Mxt7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI' // Replace with actual link
  },
  {
    title: 'Aspire Leaders Program – Harvard Faculty Led',
    description:
      'Thrilled to complete the Aspire Leaders Program 2024! This leadership journey transformed my perspective, boosted my confidence, and connected me with a global network of young changemakers.',
    video: '/v2.mp4',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_aspireinspiresfirstgen-leadership-globalimpact-activity-7265606640651898880-46HY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI' // Replace with actual link
  },
  {
    title: 'ACM Winter School on DSA – Amrita Vishwa Vidyapeetham',
    description:
      'Grateful to attend the ACM Winter School on DSA with Strings, guided by Prof. K. Somasundaram. It was an immersive experience with lectures, tutorials, and insights from top researchers.',
    video: '/v3.mp4',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_acmwinterschool2024-dsawithstrings-patternmatching-activity-7279916045820174336-IiCF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI' // Replace with actual link
  },
  {
    title: 'Reliance Foundation Scholar',
    description:
      'Honored to be awarded the Reliance Foundation Scholarship! This recognition fuels my passion to continue learning, growing, and contributing meaningfully to society through tech.',
    video: '/v4.mp4',
    link: 'https://www.linkedin.com/posts/veeranki-phani-sirisha-423179249_reliancescholarship-educationforall-grateful-activity-7155548011748630528-Szsr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1tUhsBqTj_FfqR4MxuImUWC3S4VxExkZI' // Replace with actual link
  }
];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center text-[rgb(78,57,52)]">
      <h1 className="text-4xl font-bold mb-10 text-center">Achievements</h1>
       <h5 className="text-2xl  mb-10 text-center">Tap the video to relive the experience!</h5>

      {achievements.map((item, index) => (
        <div
          key={index}
          className="border  w-full max-w-2xl p-6 mb-6 text-center min-h-[500px]" // <-- Increased height
          onClick={() => handlePlayWithSound(index)}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.video}
            className="w-full h-90 mb-6  object-cover" // <-- Taller video
            autoPlay
            muted
            loop
            playsInline
          />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm">{item.description}</p>
          <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-4 py-2 bg-[#4e3934] text-white rounded-md hover:bg-[#3a2d28] transition"
>
  View Details
</a>

        </div>
      ))}
    </div>
  );
};

export default Achievements;
