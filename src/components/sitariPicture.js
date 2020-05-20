import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImgDiv = styled.div`
  background: yellow;
  margin: 0;

  flex: 0 0 auto;
  overflow: hidden;
`

export default function SitariPicture() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/peri-sitari.png" }) {
        childImageSharp {
          fluid(cropFocus: NORTH, maxWidth: 1900, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `)
  return (
    <div>
      <ImgDiv>
        <Img
          fluid={{
            ...data.file.childImageSharp.fluid,
          }}
          alt="A corgi smiling happily"
        />
      </ImgDiv>
    </div>
  )
}
