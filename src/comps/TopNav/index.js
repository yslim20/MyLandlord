import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ !! NOT USING ANYMORE !! ============== //
// ============ Imported Components ============== //
import NavText from '../NavText';
import VerLogo from '../VerLogo';
import LoginDrop from '../LoginDrop';

// ============ CSS ============== //
const Cont = styled.div`
  width: 100%;
  height: 150px;
  position: relative;  
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  padding:${props => props.cpadding};
  box-sizing: border-box;
  z-index: 999;
  margin-bottom: ${props => props.cmarginB}px;
`
const Nav = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
`
const LeftBar =styled.div`
  display:flex;
  flex-direction: row;
  flex: 1.5;
  align-items:center;
  justify-content:space-between;
`
const RightBar = styled.div`
  display:flex;
  flex: 1;
  align-items:center;
  justify-content: flex-end;
`

// ============ Function ============== //
// ============ Layout
const TopNav =({

// ============ Props  
  cpadding="",
  cmarginB=50,
  children = <LoginDrop />,

})=>{
  
  // const router = useRouter();

  // if (ispop=true) {
    
  // }
	function handleClick(e) {
    if(ispop == true) {
      const modal = document.querySelector(".popup_show")
      const closeBtn = document.querySelector(".popup_hide")
      modal.style.display = "block";
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      })
    }
    else {
      
    }
		
	}

// ============ Layout
  return (
    <Cont cpadding={cpadding} cmarginB={cmarginB} >
      <VerLogo 
        marginright= "83"
        minwidth = "150px"
      />
      
      <Nav>
        <LeftBar>
          <NavText
            onClick={() => router.push('/')}
            // routeTo = "/"
          />
          <NavText 
            // onClick={() => router.push("/Landlord")}
            // routeTo = "/Landlord"
            text="Landlord"
          />
          <NavText 
            text="Chat"
            ispop={true}
            onClick={()=>handleClick(e)}
          />
          <NavText 
            // onClick={() => router.push("/ContactUs")}
            // routeTo = "/ContactUs"
            text="Contact Us"
          />
        </LeftBar>

        <RightBar>
          {children}          
        </RightBar>
      </Nav>
    </Cont>
  );
}

export default TopNav;