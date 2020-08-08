import React from "react"
// import Hero from './Hero'
// import { graphql, useStaticQuery} from 'gatsby'
import './index.scss'
import Header from "../components/Header/Header.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import imageModernApproach from '../images/MODERN APPROACH.gif'
import imageAwards from '../images/awards.png'
// import Img from "gatsby-image"
import 'react-fontawesome'
import VideosModal from '../components/VideosModal/VideosModal.jsx'

const HomePage= () => {
  const dashboardRoutes = [];
  return(
    <>
    <div id="header">
    <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="LokB Photo"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          
        />
    </div>
    <div className="imageDiv"></div>
    



    <section id="about" className=" container mx-auto my-10 py-21 px-2 sm:px-8 rounded-lg text-center lg:pt-16 ">
      <div className="flex justify-center">
      <img src={imageModernApproach} className="h-32" alt="About us"/>
      </div>
      <div className="flex justify-center py-2">
      <img src={imageAwards}  alt="Awards" className="sm:h-56"/>
      </div>
      <div className="divText sm:px-16 pb-12">
      We are wanderers, explorers of light, driven by a strong desire to capture fleeting moments onto frames and stitching them together to create a visual symphony which is both organic and timeless. We do not follow trends and have our own unique non-linear approach of presenting stories. Our wedding films are carefully crafted to blend traditional with modern, combining stunning visuals with creative storytelling .  
      </div>
    </section>


    <section  className="container mx-auto my-10 sm:px-8 px-4 rounded-lg">
      <VideosModal />
    </section>

    <hr width="90%" style={{margin:"auto"}} />
    <div id="advertise" className="imageAdDiv mt-4"></div>

    <section id="contact" className="container-fluid mx-0 pb-10">
      <div className="flex flex-wrap justify-center">
        <div className="w-full text-center pt-10"><strong>Contact Us</strong></div>
        <div className="w-full sm:w-1/2 text-center ">Call: 7013381031</div>
        <div className="w-full sm:w-1/2 text-center ">Email: kumar.lokesh879@gmail.com</div>
      </div>

    </section>
    </>
  )
}

export default HomePage;
