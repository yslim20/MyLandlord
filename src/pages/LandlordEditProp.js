import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import UserDrop from '../comps/UserDrop';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Navi from '../comps/Navi';
import Input from '../comps/Input';
import InputCol from '../comps/InputCol';
import Subhead from '../comps/SubHead';
import { style } from '@mui/system';

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
`;

// ============ Function ============== //
// ============ Layout
export default function LandlordProfile(
    titleFive="Let us know what your issue is",
    fsize = 24,
    
) {
    return(
        <Cont>

{/* // ============ Top Navigation */}
            <Navi children = {<UserDrop/>} />

{/* // ============ Property information */}
            <HeadCont>
                <Header marginBottom="45px" marginLeft="4%" text="Edit Properties" fontSize="36px"/>
            </HeadCont>
            <InfoCont>
                <ImgCont>
                    <Img src="./images/property1.jpeg"/>
                </ImgCont>
                <InputCont>
                    <InputCol placeholder="5435 Kincaid St"/>
                    <InputCol  text="Address Line 2"/>
                    <InputCol placeholder="Burnaby" text="City"/>
                    <InputCol placeholder="V5C 5B8" text="Zip Code"/>
                    <InputCol placeholder="BC" text="Province"/>
                </InputCont>
            </InfoCont>
            <Subhead marginL="4%" justifyContent="left" fontSize="24" text="Describe your property" marginB="20"/>
            
            {/* Textarea */}
            <DescribeCont>
                <TextBox />
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

{/* // ============ Footer Navigation */}
            <Footer />
        </Cont>
    )
}