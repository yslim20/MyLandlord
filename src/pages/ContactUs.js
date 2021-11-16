import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import InputGroup from '../comps/InputGroup';

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
	return(
		<Cont>
{/* // ============ Top Navigation */}
			<Navi/>

{/* // ============ Content Start */}
      <InputCont> 
        <Header text = "Contact Us" />
				<InputGroup />
			</InputCont>

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont>
	)
}