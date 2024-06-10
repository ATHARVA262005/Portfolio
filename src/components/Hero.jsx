import { HERO_CONTENT} from "../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

const container = (delay) => ({
    hidden: { x:-100, opacity: 0 },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start  ">
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-8 text-6xl font-thin tracking-tight lg:mt-32 lg:text-5xl sm:max-md:text-2xl"
                    >
                        Atharva Ralegankar
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="animated-gradient-text bg-clip-text text-2xl tracking-tight text-transparent"
                    >
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                    <div className="flex flex-row ">
                    <Link to={"https://drive.google.com/file/d/1eSBJva5TEHEtyriNz3UVbUdqixN5S-xu/view?usp=sharing"} target="_blank" >
                        <Button label="My Resume"/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <motion.img
                    variants={container(1.5)}
                    initial={{x:100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{ duration: 3}}
                    src="src/assets/AtharvaProfile.jpg"
                    alt="hero"
                    width={450}
                    height={450}
                    className="mt-10"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero