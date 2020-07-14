import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  ViberShareButton,
  ViberIcon,
} from "react-share"

const ContainerDiv = styled.div`
  /* background: red; */
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 0.3em;
  align-items:  center;
  align-content: center;
`

const OutDiv = styled.div`
  margin-top: 10px;
`
const XIcon = ({ Wrapped }) => {
  return (
    <OutDiv>
      <Wrapped size={32} round={true} />{" "}
    </OutDiv>
  )
}

export default function SocialShareButtons() {
  return (
    <ContainerDiv>
      <FacebookShareButton url={"www.peristerona2.com"}>
        <XIcon Wrapped={FacebookIcon} />
      </FacebookShareButton>
      <ViberShareButton url={"www.peristerona2.com"}>
        <XIcon Wrapped={ViberIcon} />
      </ViberShareButton>
      <WhatsappShareButton url={"www.peristerona2.com"}>
        <XIcon Wrapped={WhatsappIcon} />
      </WhatsappShareButton>
    </ContainerDiv>
  )
}
