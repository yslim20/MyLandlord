import styled from 'styled-components';
import React from 'react';
import { SyncTwoTone } from '@mui/icons-material';
import { style } from '@mui/system';

// ============ CSS ============== //
const Cont = styled.div`
  display:flex;
  flex-directoin:row;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
`;

const Title = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  color: #000000;
  font-size: 24px;
  margin: 0;
  margin-right: 20px;  
`;

const Info = styled.p`
  font-family: Heebo;
  font-weight: 400;
  color: #000000;
  font-size: 24px;
  margin: 0;
`;


// ============ Function ============== //
const TenantInfo = ({
// ============ Props
  title = "Email : ",
  text="copperm32@hotmail.com"

}) => {

// ============ Layout
  return(
    <Cont>
      <Title>{title}</Title>
      <Info>{text}</Info>
    </Cont>
  );
}

export default TenantInfo;