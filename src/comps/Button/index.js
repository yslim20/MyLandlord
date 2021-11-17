import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';
import login from '../../scripts/auth/login'

// ============ CSS ============== //
const ButtonCont = styled.div`
    margin-top: ${props=>props.mtop}px;
    margin-right: ${props=>props.mright}px;
    width: ${props=>props.cwidth};
    display:flex;
    justify-content:${props=>props.justify};
`;

const ButtonInput = styled.button`
    type: ${props=>props.type};
    display:flex;
    background-color:${props=>props.bg};
    border: ${props=>props.border};
    border-radius:${props=>props.radius}px;
    width: ${props=>props.width}px;
    min-width: ${props=>props.minWidth}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.size}px;
    align-items:center;
    justify-content:center;
    box-shadow: ${props=>props.bshadow}; 
    cursor: pointer;
    
    :hover{
        transform: scale(0.85);
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

const Button = ({

// ============ Props
    type = "submit",
    text="Log In",
    margintop = 100,
    minWidth="340",
    marginright="",
    bgcolor = "#ffffff",
    radius = 20,
    cwidth = "100%",
    width = 360,
    height = 72,
    border = "5px solid #5333ED;",
    // routeTo = "/LogIn",
    bshadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    color="#000",
    fontSize="24px",
    fontWeight="500",
    justify="center",

// ============ onClick prop
    clickHandler = () => {},
    href="/posts"

}) => {
    // const router = useRouter();

// ============ Layout
    return (
        <ButtonCont 
            mtop={margintop}
            mright={marginright}
            justify={justify}
            cwidth={cwidth}

// ============ onClick function
            onClick={()=>{ clickHandler()} }
            href={href}
            // onClick={()=>router.push(routeTo)}

        >
            <ButtonInput
                type={type}
                bg={bgcolor}
                radius={radius}
                width={width}
                height={height}
                border={border}
                bshadow={bshadow}
                minWidth={minWidth}
            >
                <ButtonText
                    color={color}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                >
                    {text}</ButtonText>
            </ButtonInput>
        </ButtonCont>
    );
}

export default Button;
