import React from "react"
import styled from "styled-components"
import LayoutSmoke from "components/layout-smoke"
import PhotosSchool from "../components/photos-school"

const ContainerDiv = styled.div`
  margin: 0;
  margin-left: 2rem;
  padding:0;
  display:flex;
  flex-flow:column nowrap;
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
