import React from "react"
import styled from "styled-components"
import LayoutSmoke from "components/layout-smoke"
import PhotosOnly from "../components/photos-only";


const ContainerDiv = styled.div`
  padding-left: 2rem;
  margin:0;

`

export default function Photos() {
  return (
    <LayoutSmoke>
      <ContainerDiv>
      <h3>Φωτογραφίες</h3>        
        <PhotosOnly />
      </ContainerDiv>
    </LayoutSmoke>
  )
}
