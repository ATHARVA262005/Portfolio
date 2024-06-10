import logo from "../assets/AtharvaRalegankarLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-65">
        <div className="flex flex-shrink-0 items-center">
          <Link to={"/"}>
            <img className=" w-10" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <Link to={"https://in.linkedin.com/in/atharvaralegankar"} target="_blank">
            <FaLinkedin />
          </Link>
          <Link to={"https://github.com/atharva262005"} target="_blank">
            <FaGithub />
          </Link>
          <Link to={"https://www.instagram.com/codegeeks.yt"} target="_blank" >
            <FaInstagram />
          </Link>
          <Link to={"https://x.com/i_am_atharva26"} target="_blank" >
            <FaSquareXTwitter />
          </Link>
        </div>
    </nav>
  )
}

export default Navbar