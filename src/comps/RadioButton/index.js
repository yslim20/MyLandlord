import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { useState, useEffect } from 'react';
import React, { Component } from 'react';


const Cont = styled.div`
  max-width: 715px;
  height: 103px; 
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const FormBox = styled.form`
  width:100%;
  height: 100%; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const LabelFor = styled.label`
  max-width: 715px;
  font-size: 32px;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 57px;
` 

const Title = styled.span`
  font-size: 24px;
  padding: 16px;
` 
// constructor = () => {
//   super();
//   this.state = {
//     name: 'Tenant'
//   };

//   this.onValChange = this.onValChange.bind(this);
// }

// onValChange = (event) => {
//   this.setState({
//     name: event.target.value
//   });
// }

const RadioButton = ({
  valueL ="Tenant",
  valueR = "Landlord",
  checked = "",

}) => {  
  
  return (
    <Cont className="App">
      <FormBox>
          <LabelFor>
            <InputBox
              type="radio"
              valueL={valueL}
              checked = {checked}
              // checked={this.state.name === {valueL}}
              // onChange={this.onValChange}
            />
              <Title>={valueL}</Title>
          </LabelFor>

          <LabelFor>
            <InputBox
              type="radio"              
              valueR={valueR}
              checked = {checked}
              // checked={this.state.name === {valueR}}
              // onChange={this.onValChange}
            />
              <Title>{valueR}</Title>
          </LabelFor>
      </FormBox>
    </Cont>
  );
}

export default RadioButton;