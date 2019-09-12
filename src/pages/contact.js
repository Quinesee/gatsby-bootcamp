import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allContentfulAuthor {
              edges {
                  node {
                      name
                      twitterHandle
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>888.888.8888 | me@here.com | <a href="https://duckduckgo.com" target="_blank" rel="noopener noreferrer">@riadtile</a></p>
      <ul>
        {data.allContentfulAuthor.edges.map((edge, i) => {
          return (
            <li key={i}>{edge.node.name} | {edge.node.twitterHandle}</li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default ContactPage;