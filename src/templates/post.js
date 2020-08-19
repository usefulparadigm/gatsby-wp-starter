import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  // console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div>Written on {post.date}</div>
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
        nodes {
          title
          content
          excerpt
          date(formatString: "MMMM DD, YYYY")
        }
    }
  }
`