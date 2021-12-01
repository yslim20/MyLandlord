import styled from 'styled-components';
import React from 'react';
import router from 'next/router';

// ============ Imported Comps ============== //
import ProfileSub from '../comps/ProfileSub';
import PropertyCard from '../comps/PropertyCard';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import Navi from '../comps/Navi';
import CircleAvatar from '../comps/CircleAvatar';
// import Input from '../comps/Input';
import Button from '../comps/Button';
import FullName from '../comps/FullName';
import EditInput from '../comps/EditInput';


// ============ CSS ============== //
const Cont = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
`;

const HeadCont = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

const ProfCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 70px;
`;
const UserInfo = styled.form`
    display:flex;
    flex-direction: column;
`;

const InfoCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7%;
`;

const CenterBox = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items:center;
`;


const CenterCont = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`;

const IconCont = styled.button`
    display: flex;
    justify-content:center;
    width: 140px;
    height: 140px;
    border-radius: 50%; 
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; 

    :hover{
        transform: scale(0.95);
        transition-duration: 0.5s;    
    }
`
const EditIconCont = styled.button`
    display: block;
    position: relative;
    right: 7%;
    width: 40px;
    height: 40px;
    background: none;
    border-radius: 50%; 
    border: none;
    margin-top: 10%;

    :hover{
        transform: scale(0.95);
        transition-duration: 0.5s;    
    }
`;

const Icon = styled.img`
    justify-content:center;
    align-items: center;
    display: block;
    object-fit: contain;
    width: 140px;
    height: 140px;
    border-radius: 50%;  
`
const EditIcon = styled.img`

    width: 60px;
    height: 60px;
    border-radius: 50%;  
`


// ============ Function ============== //
// ============ Layout
export default function LandlordEdit() {
	
    return(
        <Cont>
{/* // ============ Top Navigation */}
            {/* <Navi children = 
                {<UserDrop 
                    src="./images/img_avatar_jasper.png"
                    routeTo = "/LandlordMypage"
                />} 
            /> */}
			<Navi />
            <HeadCont>
                <Header marginBottom="45px" marginLeft="4%" text="Jasper White"/>
            </HeadCont>

{/* // ============ User Information */}
            <UserInfo>
                <InfoCont>
                    <CircleAvatar mtop="-100" src="/images/img_landlordProfile.png"/>
                    <InfoForm>
                        <SubHead text="Personal Information" fontSize="36" justifyContent="left" marginB="32"/>
                        <FullName />
                        <EditInput title="Password" type="password" iheight="54"/>
                        <EditInput title="Email Address" iheight="54"/>
                        <EditInput title="Phone Number" iheight="54"/>
                        <Button text="Save" margintop="80" minWidth="275" width="275" height="62" justify="right" routeTo="/"/>
                    </InfoForm>
                </InfoCont>
            </UserInfo>

{/* // ============ Properties Information */}
            <ProfCont>
                <ProfileSub />
                <CenterBox>
                    <PropertyCard marginTop="25%" />

                </CenterBox>
            </ProfCont>

{/* // ============ Add new property button */}
            <CenterCont>
                <IconCont onClick={()=>router.push('/NewProperty')}>
                    <Icon src="/icons/icon_addProperty.png/" />
                </IconCont>
            </CenterCont>

{/* // ============ Bottom Navigation */}
            <Footer />
        </Cont>
    )
}