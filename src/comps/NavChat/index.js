import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
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
  font-family: 'Heebo', sans-serif;
  font-size: ${props=>props.pSize}px;
  height: ${props=>props.pHeight}%;
  font-weight: ${props=>props.pWeight};
  position: relative;
  color: ${props=>props.pColor};

  :before{
    content : "";
    position: absolute;
    background-color: #5333ED;
    height: 2px;
    width : ${props=>props.beforeWidth};
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

  :active {
    color: #5333ED;
  }

  :active:before {    
    width: 100%;    
  }
`

// ============ Function ============== //
// ============ Layout
const NavChat =({

// ============ Props  
  height = 114,
  marginright = "",
  pSize = 24,
  pWeight = 400,
  pHeight = 40,
  pColor="",
  beforeWidth="0%",
  chatClick=()=>{}

})=>{
  
  const router = useRouter();
  // if(router.pathname === "/Chat") 
  // {
  //   return (
  //     <Nav 
  //       mright={marginright} 
  //       // onClick={() => router.push("/Chat")}
  //       height={height}      
  //     >            
  //       <Content               
  //         pSize={pSize}
  //         pWeight={pWeight}
  //         pHeight={pHeight}
  //         pColor= "#5333ED"
  //         beforeWidth = "100%"
  //       >
  //         Chat
  //       </Content>
  //     </Nav>
  //   );
  // }

  
// ============ Layout
  return (
    <Nav 
      mright={marginright} 
      // onClick={() => router.push("/Chat")}
      height={height}   
      onClick={chatClick}   
    >            
      <Content               
        pSize={pSize}
        pWeight={pWeight}
        pHeight={pHeight}
        pColor={pColor}
        beforeWidth={beforeWidth}
      >
        Chat
      </Content>
    </Nav>
  );
}

export default NavChat;