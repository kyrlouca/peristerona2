import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import LayoutSmoke from "components/layout-smoke"

const Container = styled.div`
  /* background: #f4f4f4; */
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`
const CardDiv = styled.div`
  /* background: yellow; */
  display: flex;
  flex-flow: column nowrap;  
  margin-bottom: 2rem;  
  padding-left:1rem;
  padding-right:1rem;
  border-bottom: solid 3px  var(--brand-color);;
`
const TitleDiv = styled.div`
  /* font-size: 1.2rem; */
  text-align: center;
  background: whitesmoke;
`
const CardTeacherDiv = styled.div`
  font-size: 0.9rem;
  font-style: italic;
  margin-left: 1rem;
`

function Card({ fileNode }) {
  const markdown = fileNode.childMarkdownRemark

  let xfluid = markdown?.frontmatter.featuredImage?.childImageSharp.fluid
  // console.log(markdown)
  return (
    <CardDiv>
      <TitleDiv><h5>{markdown.frontmatter.title}</h5></TitleDiv>
      {/* <p>{fileNode.name}</p> */}
      <Img
        fluid={{
          ...xfluid,
        }}
        alt="Photo not found yet"
      />

      <span style={{ fontSize: "1rem",marginTop:"1rem" }}>Δάσκαλοι</span>
      {markdown.headings.map((item, index) => (
        <CardTeacherDiv key={index}>{item.value}</CardTeacherDiv>
      ))}
    </CardDiv>
  )
}

export default function MarkdownPhotos() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "markdown-img" }
          ext: { eq: ".md" }
        }
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
    <LayoutSmoke>
      <Container>
        {data.allFile.edges.map(edge => (
          <Card key={edge.node.id} fileNode={edge.node} />
        ))}
      </Container>
    </LayoutSmoke>
  )
}
