import { FETUREDPROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaEye, FaTimesCircle } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [noVideoMessage, setNoVideoMessage] = useState(false);
  const videoRefs = useRef({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleVideoPlay = (index) => {
    if (FETUREDPROJECTS[index].previewVideo) {
      setActiveVideo(index);
      setNoVideoMessage(false);
      setTimeout(() => {
        if (videoRefs.current[index]) {
          videoRefs.current[index].play();
        }
      }, 100);
    } else {
      setActiveVideo(null);
      setNoVideoMessage(true);
    }
  };

  const handleCloseVideo = () => {
    if (videoRefs.current[activeVideo]) {
      videoRefs.current[activeVideo].pause();
      videoRefs.current[activeVideo].currentTime = 0; 
    }
    setActiveVideo(null);
    setNoVideoMessage(false);
  };

  const closeButtonColor = activeVideo !== null && activeVideo >= 0 ? 
    (FETUREDPROJECTS[activeVideo].bgColor === 'black' ? 'text-white' : 'text-black') 
    : 'text-black';

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Featured Projects
      </motion.h1>
      <div>
        {FETUREDPROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 px-5 pt-3 relative"
            >
              <img
                src={project.image}
                height={150}
                alt={project.title}
                className="mb-6 rounded w-full"
              />
              <div 
                className="absolute z-20 
                  transition-all duration-300 ease-in-out
                  flex items-center justify-center
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                "
                onClick={() => handleVideoPlay(index)}
                style={{ cursor: 'pointer' }}
              >
                <GoPlay className="text-slate-600 md:text-white text-4xl" />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex mb-4 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-1 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="projectBtns">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-icon"
                >
                  <div className="icon">
                    <FaEye style={{ height: "25", width: "25" }} />
                  </div>
                  <div className="cube">
                    <span className="side front">Live Demo</span>
                    <span className="side top">Check Live Demo</span>
                  </div>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-icon"
                >
                  <div className="icon">
                    <FaGithub style={{ height: "25", width: "25" }} />
                  </div>
                  <div className="cube">
                    <span className="side front">Github</span>
                    <span className="side top">Check it on Github</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {activeVideo !== null && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <video 
              ref={el => videoRefs.current[activeVideo] = el}
              loop 
              muted 
              playsInline
              preload="auto"
              className="w-[80vw] h-[80vh] object-cover"
            >
              <source src={FETUREDPROJECTS[activeVideo].previewVideo} type="video/mp4" />
            </video>
            <button 
              onClick={handleCloseVideo} 
              className={`absolute top-4 right-4 text-3xl z-60 ${closeButtonColor}`}
            >
              <FaTimesCircle />
            </button>
          </div>
        </motion.div>
      )}
      {noVideoMessage && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-[80vw] h-[80vh] bg-neutral-800 flex items-center justify-center text-white text-lg">
            <p>Video not provided. You can check the website using the Live Demo.</p>
            <button 
              onClick={handleCloseVideo} 
              className={`absolute top-4 right-4 text-3xl z-60 text-white`}
            >
              <FaTimesCircle />
            </button>
          </div>
        </motion.div>
      )}
      <Link to={"/projects"}>
        <Button label="Load More" />
      </Link>
    </div>
  );
};

export default Projects;
