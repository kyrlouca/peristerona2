import React from "react"
import styled from "styled-components"
import LayoutSmoke from "components/layout-smoke"
import PhotosSchool from "../components/photos-school";


const ContainerDiv = styled.div`
  padding-left: 2rem;
  margin:0;

`

export default function Photos() {
  return (
    <LayoutSmoke>
      <ContainerDiv>
      <h3>Σχολικές</h3>        
        <PhotosSchool />
      </ContainerDiv>
    </LayoutSmoke>
  )
}
