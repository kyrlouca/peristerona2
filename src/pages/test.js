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
  return (
    <PhotoCard>
      {node.name}

      <iframe
      src={node.videoSourceURL}
      title={node.videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
    </PhotoCard>
  )
}

export default function Test() {
  const data = useStaticQuery(graphql`
    {
      file(sourceInstanceName: { eq: "xassets" }, name: { eq: "10Markdown" }) {
        childMarkdownRemark {
          frontmatter {
            videoSourceURL
            videoTitle
          }
        }
        name
        publicURL
        relativeDirectory
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
