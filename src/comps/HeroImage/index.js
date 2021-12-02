import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ============ Imported Comps ============== //
import RoutButton from "../RoutButton"
import SubHead from "../SubHead"

// ============ CSS ============== //
const ImgCont = styled.div`    
  width: ${props=>props.cwidth};
  height: ${props=>props.cheight}px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  position: relative;
  background-image: url(${props=>props.imgurl});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const Letterbox = styled.div`
  width: 40%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 110px 0 40px;
  box-sizing: border-box;
`
// ============ Function ============== //
const HeroImage = ({

// ============ Properties
  cwidth ="100%",
  cheight = "650",
  imgurl="./images/img_home.svg",

}) => {

// ============ Router
  const router = useRouter();

// ============ UseEffect - animation
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

// ============ Layout
  return (
    <ImgCont
      cwidth={cwidth}
      cheight={cheight}
      imgurl={imgurl}
      data-aos="fade-right"
      data-aos-once="true"
    >
      <Letterbox>
        <SubHead 
          text = "Share your experiences with a landlord with us"
          fontWeight = "500"
          align="center"
          marginB="30"
        />

        <RoutButton
          routeTo = "/Landlord"
          text="View the Landlord List"
          height="60"
          width = "395"
          margintop = "0"
          bgcolor = "#5333ED"
          border = "none"
          color="#fff"
        />
      </Letterbox>
    </ImgCont>
  );
}

export default HeroImage;