import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Cont = styled.button`
  width:${props => props.cwidth}px;
  height: ${props => props.cwidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 50%;
  background-color: #ffffff;
  border: solid 1px #5333ED;
  box-sizing: border-box;

  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;       
}
`

const Img = styled.img`
  width:${props => props.width};
  height: ${props => props.width};
  display: block;
  object-fit: ${props => props.objectFit};  
`

// ============ Function ============== //
// ============ Props
const ChatIcon = ({
// container 
  cwidth = 84,
  routeTo = "/Chat",

// image
  src = "/icons/icon_chat.svg",
  alt = "image box",
  width = "70%",
  objectFit = "contain",  

}) => {

// ============ Router
  const router = useRouter();
  
// ============ Layout  
    return (
      <Cont 

// ============ Router
        onClick={()=>router.push(routeTo)}
        cwidth={cwidth}
      >
        <Img
          src={src}
          alt={alt}
          width={width}
          objectFit={objectFit} 
        />
      </Cont>
    );
  }

export default ChatIcon;