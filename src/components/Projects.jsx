/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 projectContainer">
        <motion.h1
         whileInView={{opacity: 1,y: 0}}
         initial={{opacity: 0,y: -100}}
         transition={{duration: 1.5}}
         className="my-20 text-center text-4xl ">Projects</motion.h1>
        <div className="projectPage ">
            {PROJECTS.map((project, index) =>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center  overflow-hidden" >
                    <motion.div
                     whileInView={{opacity: 1,x: 0}}
                     initial={{opacity: 0,x: -100}}
                     transition={{duration: 1}}
                     className="w-full lg:w-1/4 px-8  ">
                        <img 
                            src={project.image} 
                            height={200}
                            alt={project.title}
                            className=" rounded " 
                        />
                    </motion.div>
                    <motion.div
                     whileInView={{opacity: 1,x: 0}}
                     initial={{opacity: 0,x: 100}}
                     transition={{duration: 1}}
                     className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map( (tech , index) => (
                            <span 
                                key={index} 
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                            >
                            {tech}
                            </span>
                        ))}
                        <div className="projectBtns">
                            <div className="button-icon">
                            <div className="icon">
                                <FaEye style={{height:"25",width:"25"}} />                            
                            </div>
                            <div className="cube">
                                <span className="side front">Live Demo</span>
                                <span className="side top">check Live Demo</span>
                            </div>
                            </div>
                            <div className="button-icon">
                            <div className="icon">
                            <FaGithub style={{height:"25",width:"25"}} />
                            </div>
                            <div className="cube">
                                <span className="side front">Github</span>
                                <span className="side top">check it on github</span>
                            </div>
                            </div>
                        </div>
                                                
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project