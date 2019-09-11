import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node{
                      frontmatter {
                          title
                          date
                      }
                  }
              }
          }
      }
  `);

  const listItems = data.allMarkdownRemark.edges.map((edge, i) =>{
    return (
        <li key={i}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
        </li>
      )
  })

  return(
    <Layout>
      <h1>Blog Page</h1>
      <ol>
        {listItems}
      </ol>
    </Layout>
  )
}

export default BlogPage;