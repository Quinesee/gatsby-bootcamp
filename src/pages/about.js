import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head"

const AboutPage = () => {
  return(
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magni modi voluptate voluptates. Accusantium in, iure molestiae natus quibusdam quis veritatis. Aliquid at eos hic illum obcaecati optio sit velit!</p>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default AboutPage;