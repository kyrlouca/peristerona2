import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'

export default function BlogEntries() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "blog" }
        }
      ) {
        edges {
          node {
            name
            id
            absolutePath
            childMarkdownRemark {
              frontmatter {
                description
                title
              }              
              excerpt(pruneLength: 600)
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allFile.edges.map(edge => (
        <Blog key={edge.node.id} blog={edge.node.childMarkdownRemark} />
      ))}
    </div>
  )
}

const BlogDiv = styled.div`  
  padding-bottom:3rem;
  margin:0;
  text-align:justify;

  h5{
      margin-top:0;
    padding-top:0px;
    margin-top:0px;
    margin-bottom:0.5rem;
  }
`
const Blog = function({ blog }) {
  return (
    <BlogDiv>
      <h5>{blog.frontmatter.title}</h5>
      {blog?.excerpt}
    </BlogDiv>
  )
}
