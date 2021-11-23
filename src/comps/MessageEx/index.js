import styled from 'styled-components';
import React from 'react';
import { Avatar } from '@mui/material';

// ============ CSS ============== //
const MsgCont = styled.div`
    display: flex;
    flex-direction: ${props=>props.direction};
    justify-content: ${props=>props.flex};
    margin-right: 7%;
    margin-left: 7%;
    
`;

const MsgBox = styled.div`
    display: flex;
    border: ${props=>props.border};
    box-sizing: border-box;
    border-radius: 10px 0px 10px 10px;
    width: ${props=>props.width};
    height: ${props=>props.height};
    padding-right: 20px;
    padding-left: 20px;
    justify-content: center;
    algin-items: center;
    margin-right: 1%;
    margin-left: 1%;
    background-color: ${props=>props.bgcolor};
`;

const Msg = styled.p`
    font-family: Heebo;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
`;

// ============ Function ============== //
const MessageEx = ({
    text="Hello",
    width="105px",
    height="55px",
    src="./images/img_user_tenant.png",
    border = "3px solid #5333ED",
    justify="flex-end",
    direction="row",
    bgcolor="#fff"
}) => {
    return (
        <MsgCont flex={justify} direction={direction}>
            <MsgBox border={border} width={width} height={height} bgcolor={bgcolor}>
                <Msg>{text}</Msg>
            </MsgBox>
            <Avatar src={src}/>
        </MsgCont>
    );
}

export default MessageEx;