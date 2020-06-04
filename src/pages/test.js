import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Modal from "react-modal"
import Img from "gatsby-image"
import Cross from "../components/cross"
import styled from "styled-components"
// import { kashalos } from "../xassets/images/kashalos.jpg"
Modal.setAppElement("body")

const customStyles = {
  content: {
    background: "green",
    padding: "0",
    width: "100vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",

    transform: "translate(-50%, -50%)",
  },
}
const XClose = styled.div`
  z-index: 1;
  position: fixed;
  top: 2px;
  left: 2px;
  margin: 0;
`
const Container = styled.div`
  background: red;
  margin: 0;
  padding: 0;
  position: relative;
  /* display: flex; */
  /* flex-flow: column; */
  height: 100vh;

  /* display:block; */
  
`
const SetImg = styled(Img)`
  background:yellow;
  /* display: block !important; */
  margin: 0 auto;
  /* flex-grow: 1; // use as much space as available */
  width: 110vh; 
  /* width:90%; */
`

const TestDiv = styled.div`
  background: blue;
  position: fixed;
  width: calc( 2 * 100px);  
  z-index:100;
`

export default function Test() {
  const [modalIsOpen, setOpenModal] = useState(false)

  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "xassets" }
        relativePath: { eq: "images/kashalos.jpg" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 1400 fit: FILL) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const LineS = styled(line)``

  const fluid = data.file.childImageSharp.fluid
  console.log(fluid)
  const openModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  return (
    <Container>
      oudt asasass Oz3
      <TestDiv>Test</TestDiv>
      <button onClick={openModal}>hello </button>
      {false && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <XClose>
            <Cross />
            aaaa
          </XClose>
          <Img objectFit="contain" fluid={fluid} />
        </Modal>
      )}
      
      <SetImg fluid={fluid} />
    </Container>
  )
}
