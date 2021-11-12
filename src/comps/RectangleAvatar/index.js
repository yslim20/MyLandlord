import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Cont = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    margin-right:7%;
`;

const Avatar = styled.img`
    src: ${props=>props.src};
    display: block;
    object-fit: cover;
    width:100%;
    height: 100%;
    border-radius: 100px;
`;

// ============ Function ============== //
const RetangleAvatar = ({
// ============ Props
    width="463px",
    height="486px",
    src="/images/img_landlordProfile.png"

}) => {

// ============ Layout
    return(
        <Cont width={width} height={height}>
            <Avatar src={src} />
        </Cont>
    );
}

export default RetangleAvatar;