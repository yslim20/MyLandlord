import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Divdercont = styled.div`
    margin-top:60px;
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
`;

const Line = styled.div`
    height:2px;
    background-color:#c4c4c4;
    width:15%;
    margin-right: 5%;
    margin-left: 5%;
    `;

const DividerText = styled.p`
    color:#757373;
    font-size:25px;
    font-weight:400;
    margin-top:30px;

`;

// ============ Function ============== //
const Divider = ({}) => {
    
// ============ Layout
    return(
        <Divdercont>
            <Line />
            <DividerText>Want to be our member?</DividerText>
            <Line />
        </Divdercont>
    );
}

export default Divider;