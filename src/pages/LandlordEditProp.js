import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import TopNav from '../comps/TopNav';
import Navi from '../comps/Navi';
import UserDrop from '../comps/UserDrop';
import Header from '../comps/Header';
import Input from '../comps/Input';
import SubHead from '../comps/SubHead';
import Footer from '../comps/Footer';

// ============ Function ============== //
// ============ Layout
export default function LandlordEditProp() {
    return(
        <div>
            <Navi children={
                <UserDrop
                src="./images/img_avatar_jasper.png"
                routeTo = "/LandlordMypage"
                />
            }/>
            <Header text="Edit Properties"/>
            <div>
                <img src="./images/property1.png" />
                <Input title="Address Line 1" />
                <Input title="Address Line 2" />
                <Input title="City" />
                <Input title="Zip code" />
                <Input title="Province" />
            </div>
            <div>
                <SubHead text="Describe your property" fontSize="24" justifyContent="left"/>
                <textarea rows="8" cols="170"/>
            </div>
            <Footer />
        </div>
    )
}