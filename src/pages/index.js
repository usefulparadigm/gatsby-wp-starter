import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
        <SEO title="home" />
        {data.allWpPost.nodes.map((node) => (
          <div key={node.slug}>
            <Link to={node.link}>
              <p>{node.title}</p>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
        nodes {
            title
            excerpt
            slug
            link
        }
    }
  }
`