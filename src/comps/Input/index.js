import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const FormCont = styled.div`
  height: 103px; 
  min-width: ${props => props.minWidth};
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props=>props.marginB};
`

const FormBox = styled.div`
  width:${props => props.fwidth};
  height: ${props => props.fheight}; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const LabelFor = styled.label`
  font-size: ${props => props.fsize}px; 
  font-family: Montserrat;
  margin-bottom: 10px;
  margin-left: 20px;
  font-weight:600;
`;

const InputBox = styled.input`
  width:${props => props.iwidth};
  height: ${props => props.iheight}px; 
  border-radius: 20px;
  border: 3px solid #5333ED;
  font-size: 24px;
  padding: 16px;
  box-sizing: border-box;
`
// ============ Function ============== //
const Input = ({
  
// ============ Properties
  minWidth = "",
  title = "Email",
  fwidth = "100%",
  fheight = "100%",
  fsize = 24,
  iwidth = "100%",
  iheight = 57,
  type ="text",
  marginB = "25px"

}) => {  
// ============ Layout
  return (
    <FormCont
      minWidth={minWidth}
      marginB = {marginB}
    >
      <FormBox 
        fwidth={fwidth} 
        fheight={fheight}
      >
        <LabelFor 
          for={title} 
          fsize = {fsize}
        > {title}</LabelFor>
        <InputBox 
          type={type} 
          name={title}
          iwidth={iwidth} 
          iheight={iheight}
        />
      </FormBox>
    </FormCont>    
  );
}

export default Input;