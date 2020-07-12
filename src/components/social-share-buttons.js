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
  margin: 0;
  background: red;
`

const XIcon = ({ Wrapped }) => {
  return <Wrapped size={32} round />
}

export default function SocialShareButtons() {
  return (
    <ContainerDiv>
      <FacebookShareButton url={"www.peristerona2.com"}>
      <XIcon Wrapped={FacebookIcon} />
      </FacebookShareButton>
      <ViberShareButton
        url={"www.peristerona2.com"}
        className="button is-outlined is-rounded facebook"
      >
        <XIcon Wrapped={ViberIcon} />
      </ViberShareButton>
      <WhatsappShareButton
        url={"www.peristerona2.com"}
        className="button is-outlined is-rounded facebook"
      >
        <XIcon Wrapped={WhatsappIcon} />
      </WhatsappShareButton>
      Hello from Social
    </ContainerDiv>
  )
}
