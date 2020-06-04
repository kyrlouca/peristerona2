import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import periFile from "xassets/perist.pdf"

const Container = styled.div`
  border: none;

  display: flex;
  flex-flow: column nowrap;
  margin: 5px;
  padding: 5px;
`
const BookDiv=styled.a`
  margin: 0.8rem 0;
  margin-top:3rem;
  font-size:0.9rem;
  color: blue;
  /* box-shadow: none; */
  display: flex;
  flex-flow: column nowrap;
  text-align: center;  
`
const TextDiv = styled.div`
  margin: 0.8rem;
  font-style:italic;
`
const NameDiv = styled.div`
  margin: 0 0.8rem ;
  margin-bottom:1rem;

`

export default function DownloadButton() {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "images/BookCoverKashalos.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
        name
      }
    }
  `)
  // console.log(data.avatar)
  return (
    <Container>
      <TextDiv>
        “Αναθυμούμαι με πόνο ψυχής τις όμορφες μέρες που περνούσαμε στην
        Περιστερωνοπηγή. Η Περιστερωνοπηγή!... Δυο χωριά – η Περιστερώνα και η
        Πηγή – τόσο ενωμένα και αδιαίρετα στην εμφάνισή τους, που φαντάζουνε σαν
        μια κοινότητα απλωμένη στον κάμπο της Μεσαριάς.”
      </TextDiv>
      <NameDiv>
        Δημήτρης Λουκά
        <br/>
        Δάσκαλος εκ Περιστερωνοπηγής
      </NameDiv>
      <div style={{ borderBottom: "solid whitesmoke 3rem" }}></div>
      <BookDiv
        href={periFile}
        download ="Περιστερωνοπηγή - Ιστορικές Αναμνήσεις"
      >
        <NameDiv>
          Οι αναμνήσεις μου σε βιβλίο
        </NameDiv>
        <Img
          fixed={{
            ...data.avatar.childImageSharp.fixed,
          }}
          alt="Kashalos picture"
          style={{ margin: "0 auto" }}
        />
        Περιστερωνοπηγή - Ιστορικές Αναμνήσεις
      </BookDiv>
    </Container>
  )
}
