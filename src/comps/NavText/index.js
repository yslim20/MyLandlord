import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router'

const Nav = styled.div`    
  height: ${props=>props.height}px;
  margin-right: ${props=>props.mright}px;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
`;

const Content = styled.p`
  font-size: ${props=>props.pSize}px;
  height: ${props=>props.pHeight}%;
  font-weight: ${props=>props.pWeight};
  position: relative;

  :before{
    content : "";
    position: absolute;
    background-color: #5333ED;
    height: 2px;
    width : 0;
    bottom: 0px; left: 50%;
    transition: 0.5s; 
    transform: translateX(-50%);
  }
  
  :hover {
    color:#5333ED; 
  }

  :hover:before {    
    width: 100%;
  }

  :active:before {    
    width: 100%;
  }
`

const NavText = ({

    height = 114,
    marginright = "",
    text= "Home",
    className = "bttntxt",
    routeTo = "/Home",
    pSize = 24,
    pWeight = 400,
    pHeight = 40,

}) => {
  const router = useRouter()

  return (
    <Nav 
      mright={marginright} 
      onClick={() => router.push(routeTo)}
      height={height}      
    >
      
      <Content 
        className={className}
        pSize={pSize}
        pWeight={pWeight}
        pHeight={pHeight}
      >
        {text}
      </Content>
    </Nav>
  );
}
export default NavText;