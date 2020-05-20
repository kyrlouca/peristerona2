import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"

const ContainerDiv = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  /* background:red; */
`
const SmokeBar = styled.div`
  display: flex;
  min-height: 3rem;
  margin: 0;
  padding: 0;
  background: whitesmoke;
  border-bottom: solid 0.4rem  var(--brand-color);
`

export default function LayoutSmoke({ children }) {
  return (
    <ContainerDiv>
      <Navbar />
      <SmokeBar></SmokeBar>
      {children}
    </ContainerDiv>
  )
}
