import ErrorTv from '../components/ErrorTv';
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import { Helmet } from 'react-helmet-async';

const Error404 = () => {
  return (<>
  <Helmet>
            <title>Web Development Projects by Atharva Ralegankar</title>
            <meta name="description" content="Explore a diverse range of web development projects by Atharva Ralegankar, a full stack developer specializing in modern technologies such as React, Node.js, and MongoDB." data-rh="true" />
            <link rel="canonical" href="*" />
        </Helmet>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-8">
                <Navbar />
                <ErrorTv />
            </div>
        </div>
        </>
  )
}

export default Error404