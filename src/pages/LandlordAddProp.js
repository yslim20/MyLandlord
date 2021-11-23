import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import UserDrop from '../comps/UserDrop';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Navi from '../comps/Navi';
import InputCol from '../comps/InputCol';
import Subhead from '../comps/SubHead';
import Button from '../comps/Button';
import RoutButton from '../comps/RoutButton';

// ============ CSS ============== //
const Cont = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
`;

const HeadCont = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 100px;
`;

const InfoCont = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 55px;
    align-items: center;
    justify-content: center;
`;

const InputCont = styled.div`
    flex-direction: column;
    margin-left: 5%;
`;

const ImgCont = styled.div`
    flex:0.3;
    min-width: 557px;

`;

const Img = styled.img`
    width: 557px;
    height: 385px;
    src: ${props=>props.src};
`;

const DescribeCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 95px;
    align-items: center;
`;

const TextBox = styled.textarea`
    width: 95%;
    height: 260px;
    border: 3px solid #5333ED;
    border-radius: 16px;
    box-sizing: border-box;
    font-size: 16px;
    padding: 18px;
    ::-webkit-input-placeholder {
        font-family: Heebo;
        font-size: 16px;
        font-weight: 400;
    }
`;

const ButtCont = styled.div`
    display: flex;
    flex-direction: row;
`;

// ============ Function ============== //
// ============ Layout
export default function LandlordProfile() {
    return(
        <Cont>

{/* // ============ Top Navigation */}
            <Navi children = {<UserDrop
                src="./images/img_avatar_jasper.png"
            />} />

{/* // ============ Property information */}
            <HeadCont>
                <Header marginBottom="45px" marginLeft="4%" text="Add Property" fontSize="36px"/>
            </HeadCont>
            <InfoCont>
                <ImgCont>
                    <Img src="./images/property2.jpeg"/>
                </ImgCont>
                <InputCont>
                    <InputCol title= "Address" />
                    <InputCol text="City" title="City"/>

                </InputCont>
            </InfoCont>
            <Subhead marginL="4%" justifyContent="left" fontSize="24" text="Describe your property" marginB="20"/>
            
            {/* Textarea */}
            <DescribeCont>
                <TextBox placeholder="Type here..."/>
            </DescribeCont>

            {/* Add an image */}
            <div className = "section_cont flex-start">
                <div className="header_cont marginB"> 
                <h2>Add an image</h2>
                <h3>Upload any images to support your experience!</h3>
                </div>
                <div id = "add_img" className="flex-row">
                <button 
                    type="button" 
                    className = "addImg flex-col"
                    href=""
                    // onClick={()=>{ clickHandler() }}
                >
                    <img src = "/icons/icon_addimg.png" alt = "add an image" />
                </button>

                <button 
                    type="button" 
                    className = "addImg flex-col"
                    href=""
                    // onClick={()=>{ clickHandler() }}
                >
                    <img src = "/icons/icon_addimg.png" alt = "add an image" />
                </button>

                <button 
                    type="button" 
                    className = "addImg flex-col"
                    href=""
                    // onClick={()=>{ clickHandler() }}
                >
                    <img src = "/icons/icon_addimg.png" alt = "add an image" />
                </button>

                <button 
                    type="button" 
                    className = "addImg flex-col"
                    href=""
                    // onClick={()=>{ clickHandler() }}
                >
                    <img src = "/icons/icon_addimg.png" alt = "add an image" />
                </button>

                <button 
                    type="button" 
                    className = "addImg flex-col"
                    href=""
                    // onClick={()=>{ clickHandler() }}
                >
                    <img src = "/icons/icon_addimg.png" alt = "add an image" />
                </button>
                </div>
            </div>
        {/* buttons */}
        <ButtCont>
            <RoutButton text="Cancle" routeTo="/LandlordEdit" margintop="0" />
            <Button text="Submit" bgcolor="#5333ED" color="#fff" margintop="0"/>
        </ButtCont>
{/* // ============ Footer Navigation */}
            <Footer />
        </Cont>
    )
}