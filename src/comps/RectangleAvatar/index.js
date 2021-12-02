import styled from 'styled-components';
import React from 'react';
import { margin } from '@mui/system';

// ============ CSS ============== //
const Cont = styled.div`
    width:${props=>props.width};
    height:${props=>props.height};
    margin-right:7%;
    margin-top: ${props=>props.mtop}%;
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
const RetangleAvatar = (props,{
// ============ Props
    width="399px",
    height="419px",
    // src="/images/img_landlordProfile.png",
    marginTop = "1"

}) => {

// ============ Layout
    return(
        <Cont width={width} height={height} mtop={marginTop}>
            <Avatar className = "rec_avatar" src={`https://irl-dater-image-upload.s3.amazonaws.com/${props.src}`} />
        </Cont>
    );
}

export default RetangleAvatar;