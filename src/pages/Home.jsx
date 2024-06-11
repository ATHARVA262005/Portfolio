import About from '../components/About';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/FeturedProjects';
import Technologies from '../components/Technologies';
import Social from '../components/Social';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
    <>
        <Helmet>
            <title>Atharva Ralegankar | Full Stack Web Developer</title>
            <meta name="description" content="Discover the portfolio of Atharva Ralegankar, a full stack web developer with expertise in creating dynamic and responsive web applications." data-rh="true" />
            <link rel="canonical" href="/home" />
        </Helmet>

        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-8">
                <Navbar />
                <Hero />
                <About />
                <Technologies />
                <Experiences />
                <Projects />
                <Contact />
                <Social />
            </div>
        </div>
        
    </>
    );
};

export default Home;
