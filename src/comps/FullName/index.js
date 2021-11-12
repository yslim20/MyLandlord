import styled from 'styled-components';
import React from 'react';

const FormCont = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const FormBox = styled.form`
  width: 48%;
  height: 100%; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: space-between;
`

const LabelFor = styled.label`
  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 24px;
  font-weight:600;
`;

const InputBox = styled.input`
  width: 100%;
  height: 57px;
  border-radius: 20px;
  border: 3px solid #5333ED;
  padding: 16px;
  box-sizing: border-box;
  font-size: 24px;
`

const FullName = () => {  

  return (
    <FormCont>
      <FormBox>
        <LabelFor for="fname">First Name</LabelFor>
        <InputBox type="text" name="fname" autoComplete="name" required />
      </FormBox>

      <FormBox>
        <LabelFor for="lname">Last Name</LabelFor>
        <InputBox type="text" name="lname" autoComplete="name" required />
      </FormBox>
    </FormCont>    
  );

}

export default FullName;