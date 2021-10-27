import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
    margin-top:${props=>props.mtop};

`;

const ButtonInput = styled.button`
    background-color:${props=>props.bg};
    border:none;
    border-radius:${props=>props.radius};
    width: ${props=>props.width};
    height: ${props=>props.height};
    font-size: ${props=>props.size}

    :hover{
        opacity:0.8;
    }
`;

const ButtonText = styled.p`
    
`;


const Button = ({
    text="Log In",
    margintop="100px",
    bgcolor="C4C4C4",
    radius="20px",
    width="360px",
    height="72px",
    routeTo="/LogIn"

}) => {
    const router = useRouter();

    return (
        <ButtonCont mtop={margintop} onClick={()=>router.push(routeTo)}>
            <ButtonInput bg={bgcolor} radius={radius} width={width} height={height}>{text}</ButtonInput>
        </ButtonCont>

    );
}

export default Button;