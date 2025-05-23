import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "🛒 Dynamic E-Commerce Store",
    description:
      "A full-stack e-commerce app built with Next.js and Strapi. All content is fully dynamic and managed through a Strapi dashboard, allowing clients to handle their store content without any technical skills. Includes product search, a responsive layout, and image slider...and many more features",
    src: "ecommerce.jpg",
    link: "https://i.postimg.cc/nzG27CL7/e-commerce.png",
    color: "#f3f4f6",
    githubLink:
      "https://github.com/hunchodragovic/Full-Stack-E-commerce-with-NextJS-and-Strapi--Front-End-Part-",
    liveLink:
      "https://github.com/hunchodragovic/Full-Stack-E-commerce-with-NextJS-and-Strapi--Back-End-Part-",
  },
  {
    title: "📝 Real-Time Text Analyzer",
    description:
      "A fully accessible and responsive text analysis app built with React and Vite. Features include character/word/sentence counters, letter density, character limit warnings, and keyboard-only navigation—all developed without AI to enhance logical thinking.",
    src: "text-analyzer.jpg",
    link: "https://i.postimg.cc/Fs7qtVRB/counterapp.png",
    color: "#e0f7fa",
    githubLink: "https://github.com/hunchodragovic/character-counter2",
    liveLink: "https://character-counter-tan.vercel.app/",
  },
  {
    title: "Full-Stack Authentication App 🔐🛡️",
    description: "A full-stack authentication app built with the MERN stack",
    src: "water.jpg",
    link: "https://i.postimg.cc/jdK9hXz2/authapp.png",
    color: "#fff",
    githubLink: "https://github.com/hunchodragovic/authStyles",
    liveLink: "https://auth-styles.vercel.app/",
  },
  {
    title: "🌍 Planet Voyage",
    description:
      "Planet Voyage is a dynamic travel agency website built with Vite and ReactJS. Featuring interactive destination maps, real-time booking functionality, and a user-friendly interface to help travelers explore and plan their next adventure with ease.",
    src: "water.jpg",
    link: "https://i.postimg.cc/wxSsdYR7/planet.png",
    color: "#fff",
    githubLink: "https://github.com/hunchodragovic/travel",
    liveLink: "https://travel-1f52e.web.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "A simple Amazon-inspired e-commerce web app built with React and Firebase, featuring product listings and a shopping cart.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/tgTc5PKf/amazon.png",
    color: "#5196fd",
    githubLink: "https://github.com/hunchodragovic/amazon-clone",
    liveLink: "https://clone-9b843.web.app/",
  },
  {
    title: "LinkedIn Clone",
    description:
      "A LinkedIn-inspired platform built with React and Firebase, offering post creation, authentication, and real-time updates — showcasing key social networking functionalities.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/NjsmKB99/linkedin-Clone.png",
    color: "#5196fd",
    githubLink: "https://github.com/hunchodragovic/linkedin",
    liveLink: "https://github.com/hunchodragovic/linkedin",
  },
  {
    title: "Dynamic MovieApp",
    description:
      "A responsive movie search app powered by the OMDb API. Users can search for movies, view detailed info, and browse through results in a clean, dynamic layout.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/ZR4SS7DS/movieapp.png",
    color: "#5196fd",
    githubLink: "https://github.com/hunchodragovic/movieapp",
    liveLink: "https://github.com/hunchodragovic/movieapp",
  },
  {
    title: "Social Media Platform with Vanilla JS",
    description:
      "A simple social media prototype built using only HTML, CSS, and JavaScript. It features user posts, likes, comments, and a clean responsive UI — all without using any front-end frameworks.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/SRP3JDVj/socialmediaapp.png",
    color: "#5196fd",
    githubLink:
      "https://github.com/hunchodragovic/My-first-social-media-project-with-vanilla-javascript",
    liveLink:
      "https://github.com/hunchodragovic/My-first-social-media-project-with-vanilla-javascript",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
