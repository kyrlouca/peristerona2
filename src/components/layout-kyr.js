import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
// import { devices } from "../utils/device-size"

const ContainerDiv = styled.div`
  margin: 0px;
  padding: 0px;
  /* background: lightskyblue; */
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`

export default function LayoutKyr({ children }) {
  return (
    <ContainerDiv>
      <Navbar />

      {children}
    </ContainerDiv>
  )
}
