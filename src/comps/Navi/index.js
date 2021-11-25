import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

// ============ Imported Components ============== //
import VerLogo from '../VerLogo';
import LoginDrop from '../LoginDrop';
import UserDrop from '../UserDrop';
import NavHome from '../NavHome';
import NavLandlord from '../NavLandlord'
import NavChat from '../NavChat';
import NavContact from '../NavContact';

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
const NavCont = styled.div`
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
const Navi =({

// ============ Props  
  cpadding="",
  cmarginB=50,
  children = <LoginDrop />,
  chatClick=()=>{}

})=>{

	let [drop, setDrop] = useState(null);

	useEffect(() => {

		fetch('https://idsp-mylandlord.herokuapp.com/hi', {
		// fetch('http://localhost:3080/hi', {
			credentials: "include",
		})
		.then(response => response.json())
		.then(data => setDrop(data));
	})
  
  const router = useRouter();  

// ============ Layout
  return (
    <Cont cpadding={cpadding} cmarginB={cmarginB} >
      <VerLogo 
        marginright= "83"
        minwidth = "150px"
      />
      
      <NavCont>
        <LeftBar>

          <NavHome />  
          <NavLandlord />
          <NavChat chatClick={chatClick}/>
          <NavContact />

        </LeftBar>

        <RightBar>
          {/* {children} */}
		  {drop ? <UserDrop/>:<LoginDrop/>}

        </RightBar>
      </NavCont>
    </Cont>
  );
}

export default Navi;