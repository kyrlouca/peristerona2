import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height:100vh;
  flex-flow: column nowrap;
  background: red;
`
const Upper = styled.div`
  background: yellow;
  flex: 0 0 300px;
  
  overflow:hidden;
  text-overflow: ellipsis;
  `
  /* max-height: 300px; */
  /* overflow: hidden; */
const Lower = styled.div`
  background: green;
  flex: 1 1 150px;
  min-height:500px;
`

export default function TestFlex() {
  return (
    <Container>
      <Upper>
        Elementum ac sociis laoreet pretium velit non sollicitudin! Odio sapien
        potenti suscipit varius orci urna per habitant. Erat ridiculus egestas
        libero dictumst. Fermentum pulvinar consequat dolor ante nisi sem
        torquent lectus magna. Egestas potenti integer diam pellentesque diam.
        Consectetur hac phasellus litora mollis leo nunc? Ipsum cum maecenas
        tristique lobortis dictumst mattis. Lacinia ad erat justo duis dolor
        morbi feugiat fames? Vulputate montes gravida malesuada nunc convallis
        cras mus a ultricies egestas. Nisl fringilla fermentum pharetra
        porttitor tempus ligula, sollicitudin congue convallis proin molestie?
        Aliquet conubia nascetur taciti curae; sociis maecenas neque metus?
        Gravida arcu quam cursus. Sapien nibh elementum mattis torquent
        porttitor. Ad sem porttitor tellus himenaeos lobortis commodo ridiculus
        magna, ac pulvinar. Orci dignissim inceptos sodales vivamus. Leo
        vehicula conubia auctor sagittis? Eget vulputate accumsan condimentum
        nisl donec taciti praesent purus himenaeos dictumst lacinia. Consectetur
        sagittis erat odio taciti morbi? Augue dis vehicula interdum vehicula
        vel fermentum elit commodo lacus eleifend at arcu. Nulla hac magnis vel
        mattis tempor erat. Suscipit consequat nunc ipsum ad. Facilisis proin
        erat consectetur auctor semper. Eleifend nunc rhoncus quis iaculis
        praesent tellus. Vivamus curabitur dui vel?l
      </Upper>
      <Lower>:Lpwer2222</Lower>
    </Container>
  )
}
