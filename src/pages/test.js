import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const PhotoCard = styled.div`
  padding: 1rem;
  padding-left: 0px;
  margin: 0px;
  /* padding: 0rem 1rem; */
  border-bottom: solid 3px var(--brand-color);
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  margin: 0;
  padding: 0;
`

const SingleNode = ({ node }) => {
  console.log(node)
  console.log(node.childMarkdownRemark.frontmatter.attachments.publicURL)
  return (
    <PhotoCard>
      {node.name}
      <audio controls>
        code not
        <track default kind="captions" srcLang="en" />
        src={node.childMarkdownRemark.frontmatter.attachments.publicURL}
      </audio>
    </PhotoCard>
  )
}

export default function Test() {
  const data = useStaticQuery(graphql`
    {
      file(sourceInstanceName: { eq: "xassets" }, name: { eq: "10Markdown" }) {
        name
        publicURL
        childMarkdownRemark {
          frontmatter {
            title
            attachments {
              publicURL
            }
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <Container>
      <SingleNode node={data.file} />
    </Container>
  )
}
