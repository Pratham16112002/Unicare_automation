import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


function Header() {
  
  return (
    <Container>
        <Navbar/>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  positon:fixed;
  display:flex;
  align-items:center;
  padding: 0;
  z-index: 1;
`
