import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import SubHead from '../comps/SubHead';


// ============ Function ============== //
// ============ Layout
export default function Review() {
	return(
		<div className = "container">
{/* // ============ Top Navigation */}
			<Navi/>

{/* // ============ Content Start */}
      <div> 
        <Header text = "Review" marginLeft="4%" marginBottom="45px"/>
        <SubHead 
          text="Describe your experience" 
          fontSize="36" 
          justifyContent="left" 
          marginL = "4%"         
        />


			</div>

{/* // ============ Bottom Navigation */}
      <Footer />
    </div>
	)
}