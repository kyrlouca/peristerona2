import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImgDiv = styled.div`
  /* background: yellow;    */
  position: relative;
  display: flexbox;
  align-content:center;

  font-size: 0.8rem;
  margin: 0px;
  .abc {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    margin-right: 12px;
  }
`

export default function SitariPicture() {
  const data = useStaticQuery(graphql`
    {
      avatar: file(
        relativePath: { eq: "images/eusimplelogoSmall.png" }
        sourceInstanceName: { eq: "xassets" }
      ) {
        childImageSharp {
          fixed(width:90) {
            ...GatsbyImageSharpFixed
          }
        }
        name
      }
    }
  `)

  return (
    <ImgDiv>
      <div className="abc">Powered by </div>
      <Img
        fixed={{
          ...data.avatar.childImageSharp.fixed,
        }}
        alt="Powered by euSimple "
        style={{ marginBottom: "0px" }}
      />
    </ImgDiv>
  )
}
