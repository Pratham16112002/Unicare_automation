import React from 'react'
import styled from 'styled-components'
import Form from './Form'

function Footer() {
  return (
    <Main>
        <One_quater>
         <h2>Product Looks</h2>
          <nav>
            <ul>
                <li>
                    Quick Relasing Coupling (QRC)
                </li>
                <li>
                    Screw Type High Pressure ORC
                </li>
                <li>
                    Flat Face ORC
                </li>
                <li>
                    Miniature Circuit Breaker (MCB)
                </li>
                <li>
                    Idemistsu Daphne Eponex Grease
                </li>
            </ul>
          </nav>
        </One_quater>
        <One_quater_last>
                <h2>Queries</h2>
                <Form></Form>
        </One_quater_last>
        <Contact_us>
                <h2>Contact Us</h2>
                <p>Branch office  # 1725 C/o Anand Kumar
                  Gali No.I0 Laxman Vihar,phase-2
                  Gurgaon
                  Postcode/Zip
                  Tel: 9871886983, 09896957092</p>
        <p><a href="mailto:prathamdhiman@rediffmail.com">Send email</a></p>
        </Contact_us>
    </Main>
  )
}
export default Footer

const Main = styled.div `
    font-size:20px;
  width: 100vw;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: rgb(112, 106, 112);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color:white;
`
const One_quater = styled.div`
     flex:0.3;
     border-right:solid 2px;
`
const One_quater_last = styled.div`
     flex:0.4;
     border-right:solid 2px;
`
const Contact_us = styled.div`
      flex:0.3;
`