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
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
  grid-gap:2rem;  
  margin: 0;
  padding: 0;
`

const SingleImage = ({ imgNode }) => {
  // console.log(imgNode)
  return (
    <PhotoCard>      
      <Img
        fluid={{
          ...imgNode.childImageSharp.fluid,
        }}
        alt="A corgi smiling happily"
      />

    
    </PhotoCard>
  )
}

export default function AlbumPhotos() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "album" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
            name
            absolutePath
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Container>
      {data.allFile.edges.map(edge => (
        <SingleImage key={edge.node.childImageSharp.id} imgNode={edge.node} />
      ))}
    </Container>
  )
}
