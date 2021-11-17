import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const SubCont = styled.div`
    display:flex;
    justify-content: left;
    align-items: left;
    margin-top: 0px;
`;

const Sub = styled.p`
    font-family: Montserrat;
    font-size: 36px;
    font-weight:500;
    color: #6E7076;
    margin-top: 0px;
    margin-left:1%;
`;

// ============ Function ============== //
const LandlordSub = ({
// ============ Props
    text="Joined in August 2011"
}) => {

// ============ Layout    
    return (
        <SubCont>
            <Sub>{text}</Sub>
        </SubCont>
    );
}

export default LandlordSub;