import styled from 'styled-components';
import React from 'react';
import {useRouter, useState} from 'next/router';

// ============ Imported comps ============== //
import SubHead from '../SubHead';

// ============ CSS ============== //
const ErrorCont = styled.div`
    width: 25%;
    display:${props=>props.cdisplay}; 
    flex-direction: column;
    align-items:center;
    item-alignment: center;
    border-radius: 50px;
    box-shadow: ${props=>props.cbshadow}; 
    padding: 76px 94px;
    background-color: #fff;
    position: absolute;
    z-index: 22;
    transition: all 1s ease-in-out;
`;

const ButtonInput = styled.button`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    border: none;
    background-color:${props=>props.bg};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width};
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;    
    box-shadow: ${props=>props.bshadow}; 

    :hover{
        transform: scale(0.95);
        transition-duration: 0.5s;       
    }
`;

const ButtonText = styled.p`
    font-family: 'Heebo', sans-serif;  
    color:${props=>props.color} ;
    font-size: ${props=>props.fontSize};
    text-align:center;
    font-weight: ${props=>props.fontWeight};
`;

// ============ Function ============== //
const LoginErrorBox = ({
  
// ============ Props
    errortext = "You need to login first.",
    text="Log In",
    bgcolor = "#5333ED",
    radius = 20,
    width = "100%",
    height = 72,
    cbshadow = "rgba(0, 0, 0, 0.24) 0px 6px 18px",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#fff",
    fontSize="24px",
    fontWeight="500",
    cdisplay="flex",

// ============ Route To
    routeTo = "/LogIn",

    clickHandler=() => {}

}) => {

// ============ Router
    const router = useRouter();

// ============ Layout
    return (
      <ErrorCont 
        cbshadow={cbshadow}
        cdisplay={cdisplay}
        onClick={() => clickHandler()}
      >
        <SubHead 
          text = {errortext}
          marginB="50"
          fontSize="28"
        />
        
        <ButtonInput 
          bg={bgcolor} 
          radius={radius} 
          width={width} 
          height={height}
          bshadow={bshadow}
          onClick={()=>router.push(routeTo)}
        >          
          <ButtonText
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            {text}
          </ButtonText>
        </ButtonInput>
      </ErrorCont>
    );
}

export default LoginErrorBox;