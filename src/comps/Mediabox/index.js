import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const MedCont = styled.div`    
  max-width: ${props=>props.cwidth}px;
  height: ${props=>props.cheight};
  margin: ${props=>props.cmargin}px;
  display:flex;
  flex-wrap: warp;
  justify-content:center;
  align-items:center;
`;

const MediaBox = styled.iframe`
  width: 750px;
  height: 423px;
`

// ============ Function ============== //
const Mediabox = ({

// ============ Props
  cwidth = 751,
  cheight = "auto",
  cmargin="auto",
  src = "https://www.youtube.com/embed/kNf_rnuuyxE?autoplay=1&mute=1&loop=1&playlist=kNf_rnuuyxE&ab_channel=Ivan;",

}) => {

// ============ Layout
  return (
    <MedCont 
      cwidth={cwidth}
      cheight={cheight}
      cmargin={cmargin}
    >
      <MediaBox                   
        src={src}
        frameborder="0"
        allow="autoplay; encrypted-media"
      >
      </MediaBox> 
    </MedCont>
  );
}

export default Mediabox;