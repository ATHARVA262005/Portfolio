import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial : {y:-10 },
    animate : {
        y: [10 , -10],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
         whileInView={{opacity: 1,y: 0}}
         initial={{opacity: 0,y: -100}}
         transition={{duration: 1.5}}
         className="my-20 text-center text-4xl"> Technologies</motion.h1>
        <motion.div
         whileInView={{opacity: 1,x: 0}}
         initial={{opacity: 0,x: -100}}
         transition={{duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TiHtml5 className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-300" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl  bg-clip-content" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl text-cyan-600" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap  className="text-7xl text-purple-600" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandFramerMotion className="text-7xl text-white-600" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt  className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl " />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-600" />
            </motion.div>

            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl " />
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies