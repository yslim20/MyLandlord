import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Header from '../comps/Header';
import Footer from '../comps/Footer';
import SubHead from '../comps/SubHead';
import RatingStar from '../comps/RatingStar';


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
        <ul className ="review_list">
          <li>
            <h2>Housing maintenance</h2>
            <h3>How was the condition of the place?</h3>
            <RatingStar />
          </li>
          <li>
            <h2>Communication</h2>
            <h3>Was the landlord privode enough communication?</h3>
            <RatingStar />
          </li>
          <li>
            <h2>Cleanliness</h2>
            <h3>Was the place clean?</h3>
            <RatingStar />
          </li>
          <li>
            <h2>Availability</h2>
            <h3>Was the length of renting period reasonable?</h3>
            <RatingStar />
          </li>
          <li>
            <h2>Accracy</h2>
            <h3>Was the place identical as shown on picture?</h3>
            <RatingStar />
          </li>
          <li>
            <h2>Would you recommend this landlord to others?</h2>
            <div className = "thumb_con flex-row">
              <a href="" target="" className="flex-row thumb thumbUp">
               <img src = "/icons/icon_thumbup.svg" alt = "yes" />
               <p>Yes</p>
              </a>
              <a href="" target="" className="flex-row thumb thumbDown">
               <img src = "/icons/icon_thumbdown.svg" alt = "no" />
               <p>No</p>
              </a>              
            </div>
          </li>
        </ul>
      </div> {/* review ends */}

      <div className = "section_cont">
        <h2>Add an image</h2>
        <h3>Upload any images to support your experience!</h3>
        <ul>
          <li>
            <a href="" target="" className = "addImg">
              <img src = "/icons/icon_addimg.png" alt = "no" />
            </a>
          </li>
        </ul>
      </div>
      

{/* // ============ Bottom Navigation */}
      <Footer />
    </div>
	)
}