import React from "react"
import styled from "styled-components"
import LayoutSmoke from "components/layout-smoke"
import AlbumPhotos from "components/album-photos"


const ContainerDiv = styled.div`
  padding-left: 2rem;
  margin:0;

`

export default function Photos() {
  return (
    <LayoutSmoke>
      <ContainerDiv>
      <h3>Φωτογραφίες</h3>        
        <AlbumPhotos />
      </ContainerDiv>
    </LayoutSmoke>
  )
}
