import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { devices } from "utils/device-size"

const ContainerDiv = styled.div`
  /* background: lightcyan; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: space-between;
  justify-items: left;
  align-items: center;
`
const TitleDiv = styled.div`
  /* background: blue; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-style: italic;
  padding-right: 15px;

  margin-left: 15px;
  padding: 1.2rem;
  display: flex;
  flex-flow: row wrap;
  white-space: pre;
  justify-content: center;
  @media ${devices.tablet} {
    justify-content: center;
  }
`
const DashDiv = styled.div`
  @media ${devices.tablet} {
    display: none;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const XLink = styled(Link).attrs({
  activeStyle: { borderBottom: "blue 2px solid" },
})`
  :hover {
    color: var(--brand-color);
  }
  color: blue;
  box-shadow: none;
  margin: 0 10px;
  white-space: nowrap;
`

export default function navbar() {
  return (
    <ContainerDiv>
      <TitleDiv>
        <div> Περιστερωνοπηγή </div>
        <DashDiv> - </DashDiv>
        <div>Ιστορικές Αναμνήσεις</div>
      </TitleDiv>
      <LinksContainer>
        <XLink to="/">Home</XLink>
        <XLink to="/photos-school-page">Σχολικές Φωτογραφίες</XLink>
        <XLink to="/photos-only-page">Φωτογραφίες</XLink>
        <XLink to="/interviews">Συνεντεύξεις</XLink>
        {/* <XLink to="/test">test</XLink> */}
      </LinksContainer>
    </ContainerDiv>
  )
}
