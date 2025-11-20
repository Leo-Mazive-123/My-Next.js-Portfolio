"use client";
import { useState,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    title: "Support Ticket Classification System",
    description:
      "A web app that allows users to submit support tickets and automatically classifies them into departments (IT, HR, Finance) using Supabase and a simple frontend model built with Next.js.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Machine Learning"],
    category: "fullstack",
    link: "https://support-ticket-classifier.vercel.app",
    image: "/projects/support-ticket.png",
  },
  {
    title: "Quiz Web App",
    description:
      "Interactive quiz application using HTML, CSS, and JavaScript that tests user knowledge in a fun way.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    link: "https://leo-mazive-123.github.io/Quiz-App-Project/",
    image: "/projects/quiz-app.png",
  },
  {
    title: "Pixel Doctor",
    description:
      "A creative website showcasing professional tech repair services, sleek animations, responsive design, and a modern UI built with Next.js and Tailwind CSS. Includes sections like About, Services, Stats, and Contact with smooth scrolling and a scroll-to-top feature.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    link: "https://pixel-doctor.vercel.app",
    image: "/projects/pixel doctor.png",
  },
  {
    title: "Quotes Generator",
    description:
      "A sleek web app that generates inspiring quotes dynamically, allowing users to explore and share motivational content effortlessly.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    category: "fullstack",
    link: "https://quotes-generator-mauve-ten.vercel.app",
    image: "/projects/quotes.png",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard built with Next.js, TypeScript, and OpenWeather API. Displays real-time weather updates by city with a clean UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    category: "frontend",
    link: "https://weather-dashboard-seven-silk.vercel.app",
    image: "/projects/weather-dashboard.png",
  },
  {
    title: "Folktales App",
    description:
      "A modern web app that lets users explore folktales from around the world with search, filters, and offline support. Features smooth animations and full-screen reading mode.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    category: "fullstack",
    link: "https://folktale-app.vercel.app",
    image: "/projects/folktales-app.png",
  },
  {
    title: "Calculator",
    description:
      "A simple calculator built with HTML, CSS, and JavaScript for basic arithmetic operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    link: "https://leo-mazive-123.github.io/Calculator-Project/",
    image: "/projects/calculator.png",
  },
  {
    title: "Bakers Inn Website",
    description:
      "A Next.js + Tailwind CSS bakery site with modern design and smooth navigation. Includes Products, Recipes, and Kid’s Corner pages.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "fullstack",
    link: "https://bakers-inn-project-nextjs-git-master-leo-mazives-projects.vercel.app",
    image: "/projects/bakers-inn.png",
  },
  {
    title: "Song Lyrics Web Page",
    description:
      "A simple HTML web page showcasing song lyrics in a clean and readable format. Demonstrates HTML fundamentals and structured content creation.",
    tech: ["HTML"],
    category: "frontend",
    link: "https://leo-mazive-123.github.io/Song-Lyrics-Web/",
    image: "/projects/song.png",
  },
  {
    title: "Payslip Generator",
    description:
      "Automated Python tool that reads employee data from Excel and generates personalized PDF payslips, then emails them. Built with pandas, reportlab, and smtplib.",
    tech: ["Python", "pandas", "reportlab"],
    category: "backend",
    link: "https://github.com/Leo-Mazive-123/Payslip-Generator.git",
    image: "/projects/payslip-generator.png",
  },
  {
    title: "Job Scraper",
    description:
      "Web scraper that extracts latest job listings from vacancymail.co.zw using Selenium, pandas, and schedule. Saves data to CSV.",
    tech: ["Python", "Selenium", "pandas"],
    category: "backend",
    link: "https://github.com/Leo-Mazive-123/Job-Scraper.git",
    image: "/projects/job-scraper.png",
  },
  {
    title: "Stylish Remake Website",
    description:
      "A desktop remake of a classic website focusing on sleek UI, UX design, and functionality using modern front-end tools.",
    tech: ["HTML", "CSS", "Flexbox"],
    category: "frontend",
    link: "https://leo-mazive-123.github.io/Stylish-Port/",
    image: "/projects/stylish-remake.png",
  },
  {
    title: "Bootstrap Remake Website",
    description:
      "A responsive Bootstrap site showcasing layout design, component integration, and front-end best practices.",
    tech: ["HTML","CSS","Bootstrap"],
    category: "frontend",
    link: "https://leo-mazive-123.github.io/START-BOOTSTRAP/",
    image: "/projects/bootstrap-remake.png",
  },
  {
    title: "Tigzozo Media",
    description:
      "Photography studio design concept showcasing clean layouts and appealing visuals using HTML and CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "frontend",
    link: "https://leo-mazive-123.github.io/Tigzozo-Media/",
    image: "/projects/tigzozo-media.png",
  },
  
];


const categories = ["all", "frontend", "backend", "fullstack"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => {
      if (prev <= 3) return prev;

      // Desktop: remove last row (3 or less) first
      const remainder = prev % 3 || 3;
      const newCount = Math.max(prev - remainder, 3);

      // Scroll smoothly to the last visible project on desktop
      setTimeout(() => scrollToProject(newCount - 1), 50);

      return newCount;
    });
  };

  const scrollToProject = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const card = container.querySelectorAll<HTMLDivElement>(".motion-project")[index];
    if (!card) return;

    // Desktop vertical scroll
    if (window.innerWidth >= 768) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Mobile horizontal scroll
      const scrollAmount = card.offsetWidth + parseInt(getComputedStyle(container).gap || "16");
      container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  // Scroll exactly one project width (mobile)
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector<HTMLDivElement>(".motion-project");
    if (!card) return;

    const scrollAmount = card.offsetWidth + parseInt(getComputedStyle(container).gap || "16");
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="bg-white text-gray-900 pt-16 pb-8 sm:pt-16 sm:pb-16 px-6 min-h-[auto] sm:min-h-screen"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600"
        >
          My Projects
        </motion.h2>
        <motion.div
          className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-[240px] mx-auto sm:max-w-none sm:mx-0">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === cat
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(3);
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow (mobile) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md sm:hidden"
        >
          &#8592;
        </button>

{/* Projects List */}
<div
  ref={scrollRef}
  className={`flex flex-row gap-4 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory sm:p-4 sm:-mx-4
    md:grid md:gap-10 md:overflow-visible md:snap-none
    ${visibleProjects.length === 1 ? "md:grid-cols-1 md:justify-items-center" : ""}
    ${visibleProjects.length === 2 ? "md:grid-cols-2 md:justify-items-center" : ""}
    ${visibleProjects.length >= 3 ? "md:grid-cols-3" : ""}`}
>


          <AnimatePresence>
            {visibleProjects.map((project, index) => (
                      <motion.div
          key={project.title}
          className="motion-project bg-gray-50 hover:bg-blue-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex-shrink-0 w-[90%] sm:w-[250px] snap-start md:w-auto md:flex-shrink md:snap-none flex flex-col h-full"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <div className="h-48 w-full relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-200 hover:bg-blue-400 text-blue-800 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
  href={project.link}
  target="_blank"
  className="mt-auto inline-block text-center font-semibold rounded-lg shadow-lg text-white px-5 py-2"
>
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 rounded-lg"
  >
    View Project
  </motion.div>
</a>


          </div>
        </motion.div>

            ))}
          </AnimatePresence>
        </div>
        

        {/* Right Arrow (mobile) */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md sm:hidden"
        >
          &#8594;
        </button>
      </div>

      {/* View More / Show Less */}
<div className="flex justify-center mt-8 sm:mt-12 gap-4">
  {visibleCount < filteredProjects.length && (
    <motion.button
      onClick={handleViewMore}
      animate={{ y: -8 }} // single target
      transition={{
        y: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse", // goes back to 0 smoothly
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md"
    >
      Show More
    </motion.button>
  )}
  {visibleCount > 3 && (
    <motion.button
      onClick={handleShowLess}
      animate={{ y: -8 }}
      transition={{
        y: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md"
    >
      Show Less
    </motion.button>
  )}
</div>


    </section>
  );
}





// THIS IS THE OLD CODE



// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";


// const projects = [
//   {
//     title: "Song Lyrics Web Page",
//     description:
//       "A simple HTML web page showcasing song lyrics in a clean and readable format. Demonstrates HTML fundamentals and structured content creation.",
//     tech: ["HTML"],
//     category: "frontend",
//     link: "https://leo-mazive-123.github.io/Song-Lyrics-Web/",
//     image: "/projects/song-lyrics.png",
//   },
//   {
//     title: "Payslip Generator",
//     description:
//       "Automated Python tool that reads employee data from Excel and generates personalized PDF payslips, then emails them. Built with pandas, reportlab, and smtplib.",
//     tech: ["Python", "pandas", "reportlab"],
//     category: "backend",
//     link: "https://github.com/Leo-Mazive-123/Payslip-Generator.git",
//     image: "/projects/payslip-generator.png",
//   },
//   {
//     title: "Job Scraper",
//     description:
//       "Web scraper that extracts latest job listings from vacancymail.co.zw using Selenium, pandas, and schedule. Saves data to CSV.",
//     tech: ["Python", "Selenium", "pandas"],
//     category: "backend",
//     link: "https://github.com/Leo-Mazive-123/Job-Scraper.git",
//     image: "/projects/job-scraper.png",
//   },
//   {
//     title: "Stylish Remake Website",
//     description:
//       "A desktop remake of a classic website focusing on sleek UI, UX design, and functionality using modern front-end tools.",
//     tech: ["HTML", "CSS", "Flexbox"],
//     category: "frontend",
//     link: "https://leo-mazive-123.github.io/Stylish-Port/",
//     image: "/projects/stylish-remake.png",
//   },
//   {
//     title: "Bootstrap Remake Website",
//     description:
//       "A responsive Bootstrap site showcasing layout design, component integration, and front-end best practices.",
//     tech: ["HTML","CSS","Bootstrap"],
//     category: "frontend",
//     link: "https://leo-mazive-123.github.io/START-BOOTSTRAP/",
//     image: "/projects/bootstrap-remake.png",
//   },
//   {
//     title: "Calculator",
//     description:
//       "A simple calculator built with HTML, CSS, and JavaScript for basic arithmetic operations.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     category: "frontend",
//     link: "https://leo-mazive-123.github.io/Calculator-Project/",
//     image: "/projects/calculator.png",
//   },
//   {
//     title: "Tigzozo Media",
//     description:
//       "Photography studio design concept showcasing clean layouts and appealing visuals using HTML and CSS.",
//     tech: ["Next.js", "Tailwind CSS"],
//     category: "frontend",
//     link: "https://leo-mazive-123.github.io/Tigzozo-Media/",
//     image: "/projects/tigzozo-media.png",
//   },
//   {
//     title: "Quiz Web App",
//     description:
//       "Interactive quiz application using HTML, CSS, and JavaScript that tests user knowledge in a fun way.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     category: "frontend",
//     link: "https://leo-mazive-123.github.io/Quiz-App-Project/",
//     image: "/projects/quiz-app.png",
//   },
//   {
//     title: "Bakers Inn Website",
//     description:
//       "A Next.js + Tailwind CSS bakery site with modern design and smooth navigation. Includes Products, Recipes, and Kid’s Corner pages.",
//     tech: ["Next.js", "Tailwind CSS"],
//     category: "fullstack",
//     link: "https://bakers-inn-project-nextjs-git-master-leo-mazives-projects.vercel.app",
//     image: "/projects/bakers-inn.png",
//   },
//   {
//     title: "Support Ticket Classification System",
//     description:
//       "A web app that allows users to submit support tickets and automatically classifies them into departments (IT, HR, Finance) using Supabase and a simple frontend model built with Next.js.",
//     tech: ["Next.js", "Tailwind CSS", "Supabase", "Machine Learning"],
//     category: "fullstack",
//     link: "https://support-ticket-classifier.vercel.app",
//     image: "/projects/support-ticket.png",
//   },
//   {
//     title: "Weather Dashboard",
//     description:
//       "A responsive weather dashboard built with Next.js, TypeScript, and OpenWeather API. Displays real-time weather updates by city with a clean UI.",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
//     category: "frontend",
//     link: "https://weather-dashboard-seven-silk.vercel.app",
//     image: "/projects/weather-dashboard.png",
//   },
//   {
//     title: "Folktales App",
//     description:
//       "A modern web app that lets users explore folktales from around the world with search, filters, and offline support. Features smooth animations and full-screen reading mode.",
//     tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
//     category: "fullstack",
//     link: "https://folktale-app.vercel.app",
//     image: "/projects/folktales-app.png",
//   },
  
//    {
//     title: "Quotes Generator",
//     description:
//       "A sleek web app that generates inspiring quotes dynamically, allowing users to explore and share motivational content effortlessly.",
//     tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
//     category: "fullstack",
//     link: "https://quotes-generator-mauve-ten.vercel.app",
//     image: "/projects/quotes.png",
//   },
// ];



// const categories = ["all", "frontend", "backend", "fullstack"];

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [visibleCount, setVisibleCount] = useState(3);

//   const filteredProjects =
//     activeCategory === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   const visibleProjects = filteredProjects.slice(0, visibleCount);

//   const handleViewMore = () => {
//     setVisibleCount((prev) => {
//       const newCount = Math.min(prev + 3, filteredProjects.length);

//       // Optional: scroll to newly added projects
//       setTimeout(() => {
//         const firstNew = document.querySelector(
//           `#projects .motion-project:nth-child(${prev + 1})`
//         ) as HTMLElement;
//         if (firstNew) {
//           firstNew.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//       }, 50);

//       return newCount;
//     });
//   };

//   const handleShowLess = () => {
//   setVisibleCount((prev) => {
//     const remainder = prev % 3 || 3; // projects in last partial row
//     const newCount = Math.max(prev - remainder, 3);

//     // Scroll to the last visible project after reducing
//     setTimeout(() => {
//       const lastVisible = document.querySelector(
//         `#projects .motion-project:nth-child(${newCount})`
//       ) as HTMLElement;
//       if (lastVisible) {
//         lastVisible.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 50);

//     return newCount;
//   });
// };



//   return (
//     <section id="projects" className="min-h-screen bg-white text-gray-900 py-16 px-6">
//       {/* Header */}
//       <div className="flex flex-col items-center mb-8">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-blue-600"
//         >
//           My Projects
//         </motion.h2>
//         <motion.div
//           className="w-24 h-1 mt-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           style={{ transformOrigin: "center" }}
//         />
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-[240px] mx-auto sm:max-w-none sm:mx-0">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`px-4 py-2 rounded-full font-medium transition ${
//               activeCategory === cat
//                 ? "bg-blue-500 text-white shadow-lg"
//                 : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
//             }`}
//             onClick={() => {
//               setActiveCategory(cat);
//               setVisibleCount(3); // reset visible projects on category change
//             }}
//           >
//             {cat.charAt(0).toUpperCase() + cat.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div
//         className="grid gap-10 justify-center max-w-6xl mx-auto"
//         style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
//       >
//         <AnimatePresence>
//           {visibleProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="motion-project bg-gray-50 hover:bg-blue-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: 50, scale: 0.95 }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//             >
//               <div className="h-48 w-full relative">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h3>
//                 <p className="text-gray-700 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-sm rounded-full bg-blue-200 hover:bg-blue-400 text-blue-800 cursor-default"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md text-white font-medium transition-all"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* View More / Show Less Buttons */}
//       <div className="flex justify-center mt-8 gap-4">
//         {visibleCount < filteredProjects.length && (
//           <button
//             onClick={handleViewMore}
//             className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all"
//           >
//             View More
//           </button>
//         )}
//         {visibleCount > 3 && (
//           <button
//             onClick={handleShowLess}
//             className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg shadow-md transition-all"
//           >
//             Show Less
//           </button>
//         )}
//       </div>
//     </section>
//   );
// }