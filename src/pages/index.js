import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

import LayoutKyr from "components/layout-kyr"
import FrontPagePhotos from "components/photos-front-page"
import SitariPicture from "components/sitariPicture"
import DownloadButton from "components/download-book"
import Blogs from "components/blog-entries"
import EuSimpleImg from "components/EuPicture"
import { devices } from "../utils/device-size"

// TODO use contentful or similar
// TODO use DynamoDb and graphql
// TODO use netlify or gatsby cloud to deploy?
// TODO pictures to zoom (sideways on mobiles) and download 


const ContainerDiv = styled.header`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
`

const MainDiv = styled.main`
  /* background: red; */
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: minmax(400px, 2fr) minmax(350px, 1fr);
  justify-content: space-between;

  margin: 0;
  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    /* justify-content: space-around; */
  }
`
const PhotosDiv = styled.section`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  order: 1;
`

const BlogsDiv = styled.div`
  width: 100%;
  order: 2;
  text-align: center;
  padding-left: 2rem;
  padding-right: 3rem;
`
const SmokeBar = styled.div`
  display: flex;
  min-height: 3rem;
  margin: 0;
  padding: 0;
  background: whitesmoke;
  border-bottom: solid 0.4rem var(--brand-color);
`

const FooterDiv = styled.footer`
  background: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 200px 2rem;
  grid-template-rows: 1.5rem 1.5rem;
  grid-template-areas:
    "a b d"
    "a c d";
  margin: 0;
  padding: 0;

  justify-items: flex-end;
`

const Version = styled.div`
  grid-area: c;
  padding-right: 4px;
  font-size: 0.7rem;
  font-style: italic;
  text-align: right;

  text-transform: lowercase;
`
const Logo = styled.div`
  grid-area: b;
`
export default function Index({ data }) {
  // console.log(data)
  return (
    <LayoutKyr>
      <ContainerDiv>
        <SmokeBar />
        <SitariPicture />
        <DownloadButton />
        <div style={{ borderBottom: "solid whitesmoke 3rem" }}></div>
        <MainDiv>
          <PhotosDiv>
            <h3>Εικόνες</h3>
            <FrontPagePhotos />
          </PhotosDiv>
          <BlogsDiv>
            <h3>{"Σημειώσεις"} </h3>
            <Blogs />
          </BlogsDiv>
        </MainDiv>
        <FooterDiv>
          <Version>v1.02</Version>
          <Logo>
            <EuSimpleImg />
          </Logo>
        </FooterDiv>
      </ContainerDiv>
    </LayoutKyr>
  )
}
