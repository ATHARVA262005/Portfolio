/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
        <Link to="https://www.linkedin.com/in/atharvaralegankar" target='_blank' className="card1 text-cyan-500 hover:text-white">
          <FaLinkedinIn className='ml-10' style={{ marginTop:"45", scale: "1.5" }} />
        </Link>
        <Link to="https://github.com/atharva262005" target='_blank' className="card2 text-white hover:text-white">
          <FaGithub className='ml-8 mt-5' style={{ marginTop:"45", scale: "1.5" }} />
        </Link>
      </div>
      <div className={`fixed bottom-4 right-4 flex flex-row gap-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden lg:flex`}>
        <Link to="https://www.instagram.com/codegeeks.yt/" target='_blank' className="card3 text-pink-500 hover:text-white">
          <FaInstagram className='ml-10' style={{ marginTop:"30",scale: "1.5" }} />
        </Link>
        <Link to="https://x.com/i_am_atharva26" target='_blank' className="card4 text-white hover:text-white">
          <FaXTwitter className='ml-8' style={{ marginTop:"30",scale: "1.5" }} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
