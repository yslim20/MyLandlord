import styled from 'styled-components';
import React from 'react';

const Img = styled.img`
    width:${props => props.width};
    height: ${props => props.height};
    display: block;
    object-fit: ${props => props.objectFit};  
`;

const PropImage = ({
    src="./images/property1.png"
}) => {
    return(

    );
}