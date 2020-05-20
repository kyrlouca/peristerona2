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
  /* background: gray; */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-style: italic;
  padding-right: 15px;

  margin-left: 15px;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  white-space: pre;
`

const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  @media ${devices.mobile} {
    justify-content: flex-start;
  }
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
        <div>Περιστερωνοπηγή </div> <div>- Ιστορικές Αναμνήσεις</div>
      </TitleDiv>
      <LinksContainer>
        <XLink to="/">Home</XLink>
        <XLink to="/markdown-photos">Σχολικές Φωτογραφίες</XLink>
        <XLink to="/photos">Φωτογραφίες</XLink>
        <XLink to="/interviews">Συνεντεύξεις</XLink>
        {/* <MLink to="/test">test</MLink> */}
      </LinksContainer>
    </ContainerDiv>
  )
}
