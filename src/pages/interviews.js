import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import LayoutSmoke from "components/layout-smoke"
import { devices } from "../utils/device-size"

import audio31 from "../xassets/audio/Παντελης Σιημητρας.mp3"
import audio32 from "../xassets/audio/Αντρέας Λουκά.mp3"
import audio33 from "../xassets/audio/Αδαμος Μαγνητης mono.mp3"
import audio34 from "../xassets/audio/Δημήτρης Παπαθεράποντος Στράτος.mp3"
import audio35 from "../xassets/audio/Χρηστος Μιχαλόπουλος.mp3"
import audio36 from "../xassets/audio/Κυριακού Ζαχαρια.mp3"
import audio37 from "../xassets/audio/Χριστάκης Ιακώβου.mp3"
import audio38 from "../xassets/audio/Δημητράκης Λουκά.mp3"

import file1 from "../xassets/audio/REM 34.pdf"
import file2 from "../xassets/audio/REM 34.pdf"
import file3 from "../xassets/audio/REM 36.pdf"
import file4 from "../xassets/audio/REM 37.pdf"
import file5 from "../xassets/audio/REM 35.pdf"
import file6 from "../xassets/audio/REM 34.pdf"
import file7 from "../xassets/audio/REM 39.pdf"
import file8 from "../xassets/audio/REM 38.pdf"
//TODO have two queuries, one for the markdown files and one for the pdf (and audio) files
//TODO for each markdown find the corresponding pdf file
const myMap = new Map([
  ["Δημητράκης", audio38],
  ["Σιημητράς", audio31],
  ["Λουκά", audio32],
  ["Μαγνητης", audio33],
  ["Στράτος", audio34],
  ["Μιχαλόπουλος", audio35],
  ["Κυριακού", audio36],
  ["Ιακώβου", audio37],
])
const fileMap = new Map([
  ["Δημητράκης", file1],
  ["Σιημητράς", file2],
  ["Λουκά", file3],
  ["Μαγνητης", file4],
  ["Στράτος", file5],
  ["Μιχαλόπουλος", file6],
  ["Κυριακού", file7],
  ["Ιακώβου", file8],
])

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 80%;
  margin: 0px auto 10px 10px;
  padding-left: 10px;
  padding-right: 10px;
`
const CardDiv = styled.div`
  background: white;
  border-bottom: solid 4px var(--brand-color);
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  padding-left: 0;
`
const TitleDiv = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns:  300px auto;

  align-items: center;

  span {
    font-size: 0.8rem;
    font-style: italic;
    /* margin: 0; */
  }

  @media ${devices.tablet} {
        grid-template-columns: 1fr;
        justify-content: start;
  }
`
const RefDiv = styled.a`
  :hover {
    color: var(--brand-color);
  }
  color: blue;
  box-shadow: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
`
function Card({ nodeData }) {
  console.log(nodeData.childMarkdownRemark.frontmatter)
  return (
    <CardDiv>
      <TitleDiv>
        <h4>{nodeData.childMarkdownRemark.frontmatter.title}</h4>
        <span>
          Χρ. Γέννησης: {nodeData.childMarkdownRemark.frontmatter.year}
        </span>
      </TitleDiv>
      <audio
        style={{ marginBottom: "1rem" }}
        controls
        src={myMap.get(nodeData.childMarkdownRemark.frontmatter?.audioFile)}
      >
        code not
        <track default kind="captions" srcLang="en" />
      </audio>
      <cite>“{nodeData.childMarkdownRemark.excerpt}”</cite>
      <RefDiv
        href={fileMap.get(nodeData.childMarkdownRemark.frontmatter?.audioFile)}
        download
      >
        file {nodeData.childMarkdownRemark.frontmatter?.audioFile}
      </RefDiv>
    </CardDiv>
  )
}

export default function Interviews() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "xassets" }
          relativeDirectory: { eq: "audio" }
          ext: { eq: ".md" }
        }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              frontmatter {
                title
                year
                audioFile
              }
              excerpt(pruneLength: 600)
            }
            id
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <LayoutSmoke>
      <ContainerDiv>
        <h3>Συνεντεύξεις</h3>
        {data.allFile.edges.map(edge => (
          <Card key={edge.node.id} nodeData={edge.node} />
        ))}
      </ContainerDiv>
    </LayoutSmoke>
  )
}
