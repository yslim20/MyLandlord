import styled from 'styled-components';
import React from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import RatingStar from '../RatingStar';
import { Select } from '@mui/material';
import SmileRating from '../SmileRating';

// ============ CSS ============== //
const BoxCont = styled.div`
    display:flex;
    justify-content:ceter;
    align-items:center;
`;

const RevBox = styled.div`
    width: 1100px;
    height: 245px;
    border: 3px solid #5333ED;
    background: none;
    border-radius: 16px;
`;

const Cont = styled.div`
    width:${props => props.cwidth};
    height: ${props => props.cheight}px;
    position: relative;  
    display: flex;
`

const LeftSide = styled.div`
    display:flex;
    flex:1;
`;
const RightSide = styled.div`
    display:flex;
    flex:1;
`;
const RatingCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 5%;
`;

const BoldText = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    margin-bottom: 3px;
    font-family: Heebo;
`;
const RegText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-top: 5px;
    margin-bottom: 0;
    font-family: Heebo;
`;
const DateTextCont = styled.div`
    margin-top: 2%;
    position:absolute;
    right:${props => props.right};
`;
const DateText = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    margin-bottom: 3px;
    font-family: Heebo;
`;
const SmileCont = styled.div`
    // margin-top: 90%;
`;

// TextAvatar
const TextAvatarCont = styled.div`
    display: flex;
    justify-contents: center;
    item-align: center;
    margin-top: 4.5%;
    margin-left: 3%
`;

const Circle = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 50%;
    margin-left: 4%;
    margin-top: ${props => props.marginTop};
    border: ${props => props.cborder};    
    display: relative;
    background-image: ${props => props.bgImage};  
    background-repeat: no-repeat;  
    background-position: center;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`;

const CircleId = styled.p`
    display:flex;
    font-size: 32px;
    font-weight:400;
    color: #5333ED;
    justify-content:center;
    margin-top: 38%;
    font-family: Heebo;
`;

// ============ Function ============== //
const ReviewCard = ({
// ============ Props
    name="",
    review="",
    boldDate="19 Jan 2017 19:01",
    right="80px",
    marginTop="",
    text="AB",
    width="140px",
    height="140px",
    bgImage="",
    cborder = "4px solid #5333ED"

}) => {
    
// ============ Layout
    return(
        <BoxCont>
            <RevBox>
                <Cont>
                    <LeftSide>
                        <TextAvatarCont>
                            <Circle width={width} height={height} marginTop={marginTop} bgImage={bgImage} cborder={cborder}>
                                <CircleId>{text}</CircleId>
                            </Circle>
                        </TextAvatarCont>
                        <RatingCont>
                            <RatingStar />
                            <BoldText>{name}</BoldText>
                            <RegText>{review}</RegText>
                        </RatingCont>
                    </LeftSide>
                    <DateTextCont right={right}>
                        <DateText >{boldDate}</DateText>
                        <SmileCont>
                            <SmileRating right={right}/>
                        </SmileCont>
                    </DateTextCont>

                </Cont>
            </RevBox>
        </BoxCont>
    );
}

export default ReviewCard;