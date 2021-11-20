import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ Imported Comps ============== //
import SubHead from '../SubHead';
import Para from '../Para'

// ============ CSS ============== //
const FeatCont = styled.div`    
  max-width: ${props=>props.cwidth};
  min-width: 300px;
  min-height: ${props=>props.cheight}px;
  border: solid 7px #7763D6;
  border-radius: ${props=>props.bradius}px;
  padding: ${props=>props.cpadding};  
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: ${props=>props.width}%;
  height: auto;
  display: block;
  object-fit: contain;
  margin-bottom: ${props=>props.ImgMarginB}px;
`

// ============ Function ============== //
const Features = ({
  
// ============ Props
// FeatCont
  bradius = 30,
  cwidth = "30%",
  cheight = 654,
  cpadding = "75px 40px",

// img
  width = 80,
  height = 80,
  src= "./images/img_review.svg",
  alt="review",
  ImgMarginB=60, 

// Text
  title="Transparent Review Site",
	para="Tenants can write reviews on the current or previous landlord.",
}) => {

// ============ Router 
    const router = useRouter();

// ============ Layout
  return (
    <FeatCont 
      cwidth={cwidth}
      cheight={cheight}
      bradius={bradius}
      cpadding={cpadding}
      data-aos="fade-up"
    >
      <Img 
        width={width} 
        height={height}
        src={src}
        alt={alt}
        ImgMarginB={ImgMarginB}
      />
      <SubHead 
        cWidth = "100%"
        fontWeight = "600"
        fontSize= "24"
        text={title}
        align="center"
        marginB="20"        
      />
      <Para 
        text = {para}
        align="center"
      />        
    </FeatCont>
  );
}

export default Features;