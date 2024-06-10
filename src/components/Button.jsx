/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Button = ({ label }) => {
  return (
    <motion.div
        whileInView={{opacity: 1,y: 0}}
        initial={{opacity: 0,y: 100}}
        transition={{duration: 1.5}}
        className="mb-5 text-center text-8xl">
        <button className="button">
        <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">{label}</span>
        </span>
        </button>
        </motion.div>
  );
};

export default Button;
