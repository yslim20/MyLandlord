import React from 'react';
import { useRouter } from 'next/router'

// ============ Imported Comps ============== //
import Navi from '../../comps/Navi';
import Header from '../../comps/Header';
import Footer from '../../comps/Footer';
import SubHead from '../../comps/SubHead';
import RatingStar from '../../comps/RatingStar';
import Button from '../../comps/Button';
import RoutButton from '../../comps/RoutButton';

// ============ Function ============== //
export async function getServerSideProps(context) {
	// need to get the route parameter of the landlord_id
	let landlord = context.params.user_id;
	return{props:{landlord}};
}

// ============ Layout
export default function Review({landlord}) {


	const review = async event => {
		event.preventDefault();

		let recommended = parseInt(document.querySelector('input[name="is_recommended"]:checked').value),
		clean = parseInt(document.querySelector('input[name="cleanliness_rating"]:checked').value),
		communication = parseInt(document.querySelector('input[name="communication_rating"]:checked').value),
		maintenance = parseInt(document.querySelector('input[name="maintenance_rating"]:checked').value),
		avail = parseInt(document.querySelector('input[name="availability_rating"]:checked').value);
		
		// i think a nodelist doesn't count as an array idk im too tired
		// for(let r of event.target.is_recommended) {
		//   if(r.checked) {
		// 	recommended = parseInt(r.value);
		// 	break;
		//   }
		// }
		// console.log(recommended);
		await fetch('https://idsp-mylandlord.herokuapp.com/profile/reviews/create',{
		// await fetch('http://localhost:3080/profile/reviews/create',{
			body: JSON.stringify({
				content: event.target.message.value,
				is_recommended: recommended,
	
				cleanliness_rating: clean,
				communication_rating:communication,
				maintenance_rating: maintenance,
				availability_rating: avail,
	
				landlord_id:{landlord}
			}),
			headers:{
				'Content-Type':'application/json'
	
			},
			credentials:'include',
			method: 'POST',
			// redirect: 'follow'
		})
		.then(router.push("/LandlordProfile/" + {landlord}))
	  }
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

{/* ===== Form starts here ===== */}
      <form className="formCont" onSubmit={review}>

  {/* Textarea */}
        <div className = "section_cont no-padding">
          <textarea className="textarea" name="message" rows="10" cols="30">Type here...</textarea>
        </div> {/* textarea ends */}

  {/* Reviews */}
        <div className = "section_cont flex-start">
          <ul id ="review_list">
            <li>
			<h2>Housing maintenance</h2>
              <h3>How was the condition of the place?</h3>
              <RatingStar name="maintenance_rating" />
            </li>
            <li>
              <h2>Cleanliness</h2>
              <h3>Was the place clean?</h3>
              <RatingStar name="cleanliness_rating" id="cleanliness_rating" />
            </li>
            <li>
              <h2>Availability</h2>
              <h3>Was the length of renting period reasonable?</h3>
              <RatingStar name="availability_rating" />
            </li>
            <li>
              <h2>Communication</h2>
              <h3>Was the length of renting period reasonable?</h3>
              <RatingStar name="communication_rating" />
            </li>
            <li>
              <h2>Would you recommend this landlord to others?</h2>
              <div className = "thumb_con flex-row">
                <label for ="yes" class="flex-row thumb thumbup">
                  <input 
                    type="radio" 
                    name="is_recommended" 
                    value="recommend" 
                    checked
                    className = "thumb_rad"
                  />
                  <img src = "/icons/icon_thumbup.svg" alt = "yes" />
                  Yes
                </label>
                
                <label for ="no" class="flex-row thumb thumbdown">
                  <input 
                    type="radio" 
                    name="is_recommended" 
                    value="recommend"
                    className = "thumb_rad"
                  />                    
                  <img src = "/icons/icon_thumbdown.svg" alt = "yes" />
                  No
                </label>          
              </div>
            </li>
          </ul>
        </div> {/* review ends */}

  {/* Add an image */}
        <div className = "section_cont flex-start">
          <div className="header_cont marginB"> 
            <h2>Add an image</h2>
            <h3>Upload any images to support your xperience!</h3>
          </div>
          <div id = "add_img" className="flex-row">
            <input
              type="file" 
              className = "addImg flex-col"
              accept="image/png, image/jpeg"
              // onClick={()=>{ clickHandler() }}
            >
              {/* <img src = "/icons/icon_addimg.png" alt = "add" /> */}
            </input>

            <input
              type="file" 
              className = "addImg flex-col"
              accept="image/png, image/jpeg"
              // onClick={()=>{ clickHandler() }}
            >
              {/* <img src = "/icons/icon_addimg.png" alt = "add" /> */}
            </input>

            <input
              type="file" 
              className = "addImg flex-col"
              accept="image/png, image/jpeg"
              // onClick={()=>{ clickHandler() }}
            >
              {/* <img src = "/icons/icon_addimg.png" alt = "add" /> */}
            </input>

            <input
              type="file" 
              className = "addImg flex-col"
              accept="image/png, image/jpeg"
              // onClick={()=>{ clickHandler() }}
            >
              {/* <img src = "/icons/icon_addimg.png" alt = "add" /> */}
            </input>

            <input
              type="file" 
              className = "addImg flex-col"
              accept="image/png, image/jpeg"
              // onClick={()=>{ clickHandler() }}
            >
              {/* <img src = "/icons/icon_addimg.png" alt = "add" /> */}
            </input>
          </div>
        </div> {/* add image ends */}

  {/* Submit buttons */}
        <div className = "flex-row bttn_cont">
          <RoutButton 
            rcwidth = "48%"
            text="Cancel"
            margintop = "0px"
            routeTo = "/"
            justify="flex-end"
            minWidth="400"
          />
          <Button
            cwidth = "48%"
            justify="flex-start"
            text = "Submit"
            margintop = "0px"
            border = "none"
            bgcolor = "#5333ED"
            color="#fff"
            hover = "box-shadow: none"
            width = "100%"
            minWidth="400"
          />
        </div> {/* button ends */}  

      </form> {/* form ends here */}


{/* // ============ Bottom Navigation */}
      <Footer />
    </div>
	)
}