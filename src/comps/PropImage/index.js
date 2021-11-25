import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Cont = styled.div`
    width:${props => props.cwidth};
    height: ${props => props.cheight}px;
    position: absolute;  
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width:${props => props.width};
    height: ${props => props.height};
    display: block;
    object-fit: cover;
`;

// ============ Function ============== //
const PropImg = ({
    
// ============ Props
    src= "/images/property1.png",
    width= "196px",
    height="130px",
    cwidth = "100%",
    cheight = 1000,
}) => {

// ============ Layout
    return(
        <Cont
            cwidth={cwidth}
            cheight={cheight}
        >
            <Img
            src={src}
            width={width}
            height={height}
            />

        </Cont>
    );
}

export default PropImg;