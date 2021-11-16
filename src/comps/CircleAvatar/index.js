import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Cont = styled.div`
  position: relative;
  width:${props=>props.width}px;
  height: ${props=>props.width}px;
  margin-top: ${props=>props.mtop}px;
`

const Tenant =styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;  
  border-radius:50%;
  src:${props => props.src};  
`

const IconCon = styled.a`
  display: block;
  width:${props=>props.iwidth}px;
  height: ${props=>props.iwidth}px;
  border-radius: 50%; 
  overflow: hidden;
  position: absolute;
  bottom: ${props=>props.ibttm}px;
  right: ${props=>props.ibttm}px;
  src:${props => props.src};  
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; 
  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
  display: block;
  object-fit: contain;
  width:${props=>props.iwidth}px;
  height: ${props=>props.iwidth}px;
  border-radius: 50%;  
`

// ============ Function ============== //
// ============ Props
const TenantAvatar =({
  width = 380,
  //icon
  src= "/images/img_tenant.png",

  href = "",
  iwidth = 84,
  ibttm = 30,
  isrc="/icons/icon_camera.png",
  mtop=""

}) =>{
    
// ============ Layout
  return(
    <Cont
      width={width}
      mtop={mtop}
    >
      <Tenant        
        src={src}
      />
      <IconCon
        ibttm={ibttm}
        href = {href}
      > 
        <Icon 
          iwidth={iwidth}
          src={isrc}          
        />
      </IconCon>
      
    </Cont>
  );
}

export default TenantAvatar; 