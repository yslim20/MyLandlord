import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const Cont = styled.div`
  width:${props => props.cwidth};
  height: ${props => props.cheight};
  position: relative;  
  display: flex;
  justify-contents: center;
  margin-left: ${props => props.marginL}

  // margin-left: ${props => props.cmarginL};
`

const Img = styled.img`
  width:${props => props.width};
  height: ${props => props.height};
  display: block;
  object-fit: ${props => props.objectFit};  
`

const Text = styled.p`
  font-size: ${props => props.fsize}px;
  text-algn: center;
  position: ${props => props.position};
  z-index: ${props => props.zindex};
  top: ${props => props.top};
  left: ${props => props.left};
  margin-top: ${props => props.mTop}px;
  margin-left: ${props => props.mLeft}px;
`
// ============ Function ============== //
// ============ Props
const ImgBox = ({
// container 
  cwidth = "80%",
  cheight = "1000px",
  marginL="",

// image
  src = "https://placekitten.com/500/500",
  alt = "image box",
  width = "100%",
  height = "500px",
  objectFit = "contain",  

// text if needed
  zindex = 1,
  position = "absolute",
  top = "50%",
  left = "50%",
  mTop = -16,
  mLeft = -25,
  fsize = 36,
  text = null,

}) => {

// ============ Layout
  return (
    <Cont
      cwidth={cwidth}
      cheight={cheight}
      marginLeft={marginL}
    >
      <Img
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit} />
      <Text
        fsize={fsize}
        position={position}
        zindex={zindex}
        top={top}
        left={left}
        mTop={mTop}
        mLeft={mLeft}
      > {text} </Text>

    </Cont>
  );
}

export default ImgBox;