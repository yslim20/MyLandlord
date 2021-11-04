import styled from 'styled-components';
import React from 'react';

import Button from '../Button'
import Para from '../Para'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import ImgBox from '../ImgBox'

// ============ CSS ============== //
const Cont = styled.div`
  min-width: ${props => props.minWidth};
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TopCont =styled.div`
  margin-bottom: 25px;
  display:flex;  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  flex-wrap: wrap;
`

const LeftCont=styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const RightCont=styled.div`
  display:flex;
  flex: 1.5;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;
`

const FormBox = styled.form`
  width:${props => props.fwidth};
  height: ${props => props.fheight}; 
  display:flex;
  flex-direction: column;
  align-items: felx-start;
  justify-content: center;   
  margin-bottom: 80px;
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
  margin-bottom: ${props => props.imarginB}px;
  ::-webkit-input-placeholder {
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`

const BttnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

// ============ Function ============== //
// ============ Layout
const InputGroup = ({
  minWidth = "",  
  fwidth = "100%",
  fheight = "100%",
  fsize = 24,
  iwidth = "100%",
  iheight = 57,
  placeholder = "Type here...",

// ===========Input titles
  titleOne = "First Name",
  typeOne ="text",
  titleTwo = "Last Name",
  typeTwo ="text",
  titleThree = "Email address",
  typeThree ="text",
  titleFour = "Phone Number (Optional)",
  typeFour ="text",
  titleFive="Let us know what your issue is",
  imarginB ="40",

}) => {  
	return(
		<Cont
      minWidth={minWidth}
    >
      <FormBox 
        fwidth={fwidth} 
        fheight={fheight}
      >
        <TopCont> 
          <LeftCont> 
            <ImgBox 
              src="./images/img_contactus.png" 						
              cheight ="100%"
              cwidth = "100%"
              cmargin = "0 60px 0 0"
            />
          </LeftCont>

          <RightCont> 
            <LabelFor 
              for={titleOne} 
              fsize = {fsize}
            > {titleOne}</LabelFor>
            <InputBox 
              type={typeOne} 
              name={titleOne} required 
              iwidth={iwidth} 
              iheight={iheight}
              placeholder={placeholder}
              imarginB={imarginB}              
            />

            <LabelFor 
              for={titleTwo} 
              fsize = {fsize}
            > {titleTwo}</LabelFor>
            <InputBox 
              type={typeTwo} 
              name={titleTwo} required 
              iwidth={iwidth} 
              iheight={iheight}
              placeholder={placeholder}
              imarginB={imarginB}
            />

            <LabelFor 
              for={titleThree} 
              fsize = {fsize}
            > {titleThree}</LabelFor>
            <InputBox 
              type={typeThree} 
              name={titleThree} required 
              iwidth={iwidth} 
              iheight={iheight}
              placeholder={placeholder}
              imarginB={imarginB}
            />

            <LabelFor 
              for={titleFour} 
              fsize = {fsize}
            > {titleFour}</LabelFor>
            <InputBox 
              type={typeFour} 
              name={titleFour} required 
              iwidth={iwidth} 
              iheight={iheight}
              placeholder={placeholder}
            />
          </RightCont>          
        </TopCont>

        <LabelFor 
          for={titleFive} 
          fsize = {fsize}
        > {titleFive}</LabelFor>
        <TextareaAutosize
          maxRows={10}
          minRows={8}
          aria-label="maximum height"
          placeholder="Type here..."
          style={{ width: "100%" }}
        />   
        <Para 
          fontSize="20"
          text="250 words max"
          align="right"
          fcolor="#6E7076"
          marginT="5"
        />     
      </FormBox>      

      <BttnCont>
        <Button 
          type ="cancel"
          text = "Cancle"
          margintop = "0px"
          width = "95%"
          marginright="30"
          minWidth="400"
          routeTo="/ContactUs"
        />
        <Button 
          text = "Submit"
          margintop = "0px"
          border = "none"
          bgcolor = "#5333ED"
          color="#fff"
          hover = "box-shadow: none"
          width = "95%"
          minWidth="400"
          routeTo=""
        />
      </BttnCont>
    </Cont>   
	)
}

export default InputGroup;