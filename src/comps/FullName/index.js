import styled from 'styled-components';
import React, {useState} from 'react';

// ============ CSS ============== //
const Cont = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const MidCont = styled.div`
  width: 48%;
  height: 100%;   
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
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

// ============ Function ============== //
const FullName = (props) => {  

	const [fname, setfname] = useState(props.fname);
	const [lname, setlname] = useState(props.lname);

// ============ Layout
  return (
    <Cont>
      <MidCont> 
        <LabelFor for="fname">First Name</LabelFor>
        <InputBox 
			type="text" 
			name="fname" 
			autoComplete="name" 
			required value={fname}
			onChange={e => setfname( e.target.value )}/>
      </MidCont>
      
      <MidCont>
        <LabelFor for="lname">Last Name</LabelFor>
        <InputBox 
			type="text" 
			name="lname" 
			autoComplete="name" 
			required value={lname}
			onChange={e => setlname( e.target.value )}/>          
      </MidCont>        
    </Cont>    
  );

}

export default FullName;