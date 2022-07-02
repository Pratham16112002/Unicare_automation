import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Footer from './Footer'

function Home() {
  return (
    <Container>
      <Section title="Coupling" 
      description="Cam Lock Coupling" 
        text="Exporting and manufacturing a wide range of couplings, cam lock coupling, carbon steel cam lock couplings, stainless steel cam lock couplings."
        backgroundColor="rgb(255, 111,66)"
      />
      <Section title="MCB"
      description="Miniature Circuit Breaker"
        text="The circuit breaker must detect a fault condition; in low-voltage circuit breakers this is usually done within the breaker enclosure."
        backgroundColor="rgb(255, 189, 51)"
      />
      <Section 
      title="PLC"
      description="Programmable logic controller"
        text="A Programmable Logic Controller, PLC or Programmable Controller is a digital computer used for automation of electromechanical processes."
        backgroundColor="rgb(82, 248, 96)"
      />
      <Section
      title="Fuji Parts"
        description="Exporting and manufacturing a wide range of Fuji Parts"
        backgroundColor="rgb(213, 118, 209)"
      />
      <Footer/>
    </Container>
  )
}
export default Home

const Container = styled.div`
    height: 100vh;

`



