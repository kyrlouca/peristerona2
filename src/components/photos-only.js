import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  display: grid;
  margin: 0;
  margin-top: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  
  padding: 0;
`

const CardDiv = styled.div`
  /* background: yellow; */
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 2rem;
  /* padding-left: 1rem; */
  padding-right: 1rem;
  border-bottom: solid 3px var(--brand-color);
`

const TitleDiv = styled.div`
  /* font-size: 1.2rem; */
  text-align: center;
  background: whitesmoke;
`
const FooterDiv = styled.div`
  font-size: 0.6rem;
  text-align: right;
`

const SingleImage = ({ fileNode }) => {
  const frontmatter = fileNode.childMarkdownRemark?.frontmatter
  let xfluid =
    fileNode?.childMarkdownRemark?.frontmatter?.featuredImage?.childImageSharp
      .fluid
  // console.log(fileNode)

  return (
    <CardDiv>
      <TitleDiv>
        <h5>{frontmatter?.title}</h5>
      </TitleDiv>
      <Img
        fluid={{
          ...xfluid,
        }}
        alt="Photo not found yet"
      />
      <FooterDiv>{fileNode?.name}</FooterDiv>
    </CardDiv>
  )
}

export default function PhotosOnly() {
  // console.log(data)

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "markdown-photos-only" }
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
