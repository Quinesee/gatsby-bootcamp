import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import blogStyles from "./blog.module.scss";
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allContentfulBlogPost (
              sort: {
                  fields: publishedDate,
                  order: DESC
              }
          ) {
              edges {
                  node {
                      title
                      slug
                      publishedDate(formatString:"MMMM Do, YYYY")
                  }
              }
          }
      }
  `);

  const listItems = data.allContentfulBlogPost.edges.map((edge, i) =>{
    return (
        <li key={i} className={blogStyles.post}>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2>{edge.node.title}</h2>
            <p>{edge.node.publishedDate}</p>
          </Link>
        </li>
      )
  })

  return(
    <Layout>
      <Head title="Blog" />
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {listItems}
      </ol>
    </Layout>
  )
}

export default BlogPage;