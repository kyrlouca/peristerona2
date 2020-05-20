import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 0;
`
const ImageDiv = styled.div`
  margin-bottom: 2rem;
`
const SingleImage = ({ imgNode }) => {
  // console.log(imgNode)
  return (
    <ImageDiv>
      <Img
        fluid={{
          ...imgNode.fluid,
        }}
        alt="A corgi smiling happily"
      />
    </ImageDiv>
  )
}

export default function FrontPagePhotos() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "pictures" }
        }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
            absolutePath
            name
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <ImageList>
      {data.allFile.edges.map(edge => (
        <SingleImage
          key={edge.node.childImageSharp.id}
          imgNode={edge.node.childImageSharp}
        />
      ))}
    </ImageList>
  )
}
