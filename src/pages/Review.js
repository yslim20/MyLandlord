import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import SubHead from '../comps/SubHead';
import Para from '../comps/Para';


// ============ Function ============== //
// ============ Layout
export default function Review() {
	return(
		<div className = "container">
{/* // ============ Top Navigation */}
			<Navi/>

{/* // ============ Content Start */}

{/* Title */}
      <div className="header_cont"> 
        <Header text = "Review" marginLeft="0" marginBottom="45px"/>
        <SubHead 
          text="Describe your experience" 
          fontSize="36"      
        />
        <h3>You can describe any your experience with your previous or current landlord!</h3>
			</div> {/* title ends */}

{/* Radio button */}
      <div className="property_box">
        <form className="radio_cont">
          <div>
            <input type="radio" id="property_1" name="property" value="property_1" checked/>
            <label for="property_1">5435 Kincaid St</label>
          </div>
          <div>
            <input type="radio" id="property_2" name="property" value="property_2"/>
            <label for="property_2">5435 Kincaid St</label>
          </div>
        </form>
      </div> {/* radio button ends */}

{/* Textarea */}
      <div className = "section_cont">
        <form action="">
          <textarea className="textarea" name="message" rows="10" cols="30">Type here...</textarea>
        </form>
      </div> {/* textarea ends */}

{/* Reviews */}
      <div className = "section_cont">
        <ul>
          <li>
            <h2>Housing maintenance</h2>
            <h3>How was the condition of the place?</h3>

          </li>
        </ul>

      </div> {/* review ends */}
      

{/* // ============ Bottom Navigation */}
      <Footer />
    </div>
	)
}