import React from "react"
// import styled from "styled-components"

export default function Cross({ stroke = "blue", fill = "red" }) {
  return (
    <svg
      width="24"
      height="24"
      stroke={stroke}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    //   clip-rule="evenodd"
    >
        <title id="title">Close the picture</title>
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
    </svg>
  )
}
