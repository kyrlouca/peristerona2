import React from "react"
import ReactModal from "react-modal"
// import styled from "styled-components"
ReactModal.setAppElement('body')

const customStyles = {
  content: {
    background: "yellow",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

// const ModalStyle = styled(Modal)`
//   top: 50%;
//   left: 50%;
//   height:100vh;
//   right: auto;
//   bottom: auto;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
// `

export default function Test() {
  const buttonClick = () => {
    alert('hey')
  }
  return (
    <div>
      oudt
      <button onClick={buttonClick}>hello </button>
    </div>
  )
}
