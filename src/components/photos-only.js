import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const PhotoCard = styled.div`
  padding: 1rem;
  padding-left: 0px;
  margin: 0px;
  /* padding: 0rem 1rem; */
  border-bottom: solid 3px var(--brand-color);
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  margin: 0;
  padding: 0;
`

const SingleImage = ({ fileNode }) => {
  const frontmatter = fileNode.childMarkdownRemark.frontmatter
  let xfluid =
    fileNode?.childMarkdownRemark?.frontmatter.featuredImage?.childImageSharp
      .fluid
  console.log(fileNode)

  return (
    <div>
      {frontmatter.title}
      <Img
        fluid={{
          ...xfluid,
        }}
        alt="Photo not found yet"
      />
    </div>
  )
}

export default function PhotosOnly() {
  // console.log(data)

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "markdown-img" }
          ext: { eq: ".md" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              excerpt
              headings(depth: h1) {
                depth
                value
              }
              frontmatter {
                title
                description
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 900) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)
  // console.log("marjd")
  // console.log(data)

  return (
    <Container>
      {data.allFile.edges.map(edge => (
        <SingleImage key={edge.node.id} fileNode={edge.node} />
      ))}
    </Container>
  )
}
