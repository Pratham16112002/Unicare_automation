import React , { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectTools } from '../features/Slice/toolSlice'
import { useSelector } from 'react-redux'

function Navbar() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectTools)
  console.log(cars)
  return (
    <>
      
    <Nav>
        <NavLogo to='/'>
          UNICARE AUTOMATION & CONTROLS
        </NavLogo>
        <NavbarContainer>
            <Menu>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">Products</a>
            </p>
            <p>
              <a href="#">Applications</a>
            </p>
            <p>
              <a href="#">Gallery</a>
            </p>
            </Menu>
            <RightMenu>
              <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
              <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)}/>
              </CloseWrapper>
              <li><a href="#">Inventory</a></li>
            <li><a href="#">Sell Now</a></li>
            <li><a href="#">Buy Now</a></li>
            <li><a href="#">Service Partner</a></li>
            <li><a href="#">Maintainance Partner</a></li>
            <li><a href="#">Inventory</a></li>

            </BurgerNav>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
 background: #756776;
 height:80px;
 display:flex;
 justify-content:center;
 align-items:center;
 positon:fixed;
 top:0;
 width:100%;
 z-index: 10;
 @media screen and (max-width: 760px){
    transition: 0.8s all ease;
 }
`
const NavbarContainer = styled.div`
 display:flex;
 background: #756776;
 height: 80px;
 position:sticky;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1100px;
 justify-content:space-between;
`
const NavLogo = styled.a`
 color: #fff;
 justify-self: flex-start;
 cursor:pointer;
 height:80%;
 font-size: 1.5rem;
 display:flex;
 align-items:center;
 margin: 0px 24px;
 font-weight:bold;
 text-decoration:none;
 padding: 0 12px;
`
const Menu = styled.div`
 display:flex;
 align-items:center;
 flex:1;
 p{
  font-weight:600;
  text-transform: uppercase;
  padding:0 10px;
  flex-wrap: no-wrap;
 }
 a:hover{
  color:#fff;
 }
 @media(max-width: 768px){
  display:none;
 }
 
`
const CustomMenu = styled(MenuIcon)`
 cursor: pointer;
`
const RightMenu = styled.div`
height:80%;
padding: 15px 0 0 34px;
 align-items:center;
 justify-content:center;
 margin:auto;
`
const BurgerNav = styled.div`
 position:fixed;
 top: 0;
 bottom: 0;
 right: 0;
 background: white;
 width:300px;
 z-index: 16; 
 list-style: none;
 padding: 20px;
 display:flex;
 flex-direction: column;
 text-align: start;
 transform: ${props => props.show ? `translateX(0)` : `translateX(100%);
 transition: transform 0.2s ;
 `};
 justify-content: flex-start;
 li{
  padding: 15px 0;
  border-bottom: 1px solid rgba( 0,0,0,2);
   a{
    font-weight: 600;
   }
 }
`
const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`
const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`