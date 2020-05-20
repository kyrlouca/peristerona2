import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function PdfDownload() {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "xassets" }
        relativeDirectory: { eq: "audio" }
        name: {}
        extension: { eq: "pdf" }
      ) {
        relativeDirectory
        name
        publicURL
      }
    }
  `)

  console.log("Pdf")
//   console.log(data)
  return (
    <pre>
      abcde {data.file.name}
      <a href={data.file.publicURL} download>
        {data.file.name}
      </a>
    </pre>
  )
}
