import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = () => {
  return(
    <div>
      <Header/>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magni modi voluptate voluptates. Accusantium in, iure molestiae natus quibusdam quis veritatis. Aliquid at eos hic illum obcaecati optio sit velit!</p>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
      <Footer/>
    </div>
  )
}

export default AboutPage;