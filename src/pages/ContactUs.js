import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import InputGroup from '../comps/InputGroup';
import UserDrop from '../comps/UserDrop';
import LoginDrop from '../comps/LoginDrop';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 4% 0 4%;
  box-sizing: border-box;
`

const InputCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

// ============ Function ============== //
// ============ Layout
export default function ContactUs() {
	let [drop, setDrop] = useState(null);

	useEffect(() => {

		// fetch('https://idsp-mylandlord.herokuapp.com/hi', {
		fetch('http://localhost:3080/hi', {
			credentials: "include",
		})
		.then(response => response.json())
		.then(data => setDrop(data));
	})
	return(
		<Cont>
{/* // ============ Top Navigation */}
	{drop ? <Navi children={<UserDrop/>} /> : <Navi children={<LoginDrop />} />}

{/* // ============ Content Start */}
      <InputCont> 
        <Header text = "Contact Us" marginLeft="4%"/>
				<InputGroup />
			</InputCont>

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont>
	)
}