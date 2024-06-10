/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Social = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex-col mb-10">
            <div className={`fixed bottom-20 mb-8 right-4 flex flex-row gap-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden lg:flex`}>
                <button className="card1 text-cyan-500  hover:text-white">
                <FaLinkedinIn className='ml-10 mt-5 ' style={{scale:"1.5"}} />
                </button>
                <button className="card2 text-white hover:text-white">
                <FaGithub className='ml-8 mt-5 ' style={{scale:"1.5"}} />
                </button>
                
            </div>
            <div className={`fixed bottom-4 right-4 flex flex-row gap-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden lg:flex`}>
                <button className="card3 text-pink-500 hover:text-white">
                <FaInstagram className='ml-10  ' style={{scale:"1.5"}} />
                </button>
                
                <button className="card4 text-white hover:text-white">
                <FaXTwitter className='ml-8  ' style={{scale:"1.5"}} />
                </button>
            </div>
    </div>
  );
};

export default Social;
