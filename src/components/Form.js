import React from 'react'
import styled from 'styled-components'

function Form() {
  return (
    <Form_container>
        <Register_form>
              <Input
                  type="text"
                  placeholder="Name"
                  name="name"
              />
              <Input
                  type="text"
                  placeholder="Email"
                  name="email"
              />
              <Textarea>
                
              </Textarea>
              <Buttongroup>Submit</Buttongroup>
        </Register_form>
        
    </Form_container>
  )
}

export default Form

const Form_container = styled.div`
  width: 260px;
  margin: auto;
  padding: 10px;
`
const Register_form = styled.div`
  display:flex;
  flex-direction:column;
`
const Input = styled.input`
    margin:12px 0 12px 0;
    border-radius:5px;
    height:40px;
`
const Textarea = styled.textarea`
    margin-bottom:12px;
    border-radius:5px;
    height:60px;
`
const Buttongroup = styled.button`
    border-radius:92px;
    height:34px;
`