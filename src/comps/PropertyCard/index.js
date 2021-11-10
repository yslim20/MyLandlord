import styled from 'styled-components';
import React from 'react';

// ============ css ============== //
const BoxCont = styled.div`
    display:flex;
    justify-content:ceter;
    align-items:center;
`;

const Box = styled.div`
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
const Img = styled.img`
    width:${props => props.width};
    height: ${props => props.height};
    margin-left: 4%;
    margin-top: 11%;
`;

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 5%;
`;
const BoldText = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    margin-bottom: 3px;
    font-family: Heebo;
    margin-top:${props => props.marginTop};
`;
const RegText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin: 5px;
    font-family: Heebo;
`;

const LeftSide = styled.div`
    display:flex;
    flex:1;
`;
const RightSide = styled.div`
    display:flex;
    flex:1;
`;

const DateTextCont = styled.div`
    margin-top: 5%;
    margin-left: 65%;
`;
const DateText = styled.p`
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    margin-bottom: 3px;
    font-family: Heebo, sans-serif;
`;

// ============ Function ============== //
const PropertyCard = ({
    // ============ Props
    src= "./images/property1.png",
    width= "196px",
    height="130px",
    cwidth = "100%",
    cheight = 300,
    bold="5435 Kincaid St",
    boldDate="19 Jan 2017 19:01",
    regT1= "8 Rooms, 3 Bath",
    regT2= "Built in 2008",
    regT3= "Litigation History: No",
    regT4= "Since: 2011~",
    marginTop= "35%"

}) => {
    return (
        <BoxCont>
            <Box>
                <Cont cwidth={cwidth} cheight={cheight}>
                    <LeftSide>
                        <Img src={src} width={width} height={height} />
                        <TextCont>
                            <BoldText>{bold}</BoldText>
                            <RegText>{regT1}</RegText>
                            <RegText>{regT2}</RegText>
                            <RegText>{regT3}</RegText>
                            <RegText>{regT4}</RegText>
                        </TextCont>
                    </LeftSide>
                    <RightSide>
                        <DateTextCont>
                            <DateText marginTop={marginTop}>{boldDate}</DateText>
                        </DateTextCont>
                    </RightSide>
                </Cont>

            </Box>
        </BoxCont>
    );
}

export default PropertyCard;