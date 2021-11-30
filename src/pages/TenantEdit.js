import styled from 'styled-components';
import React from 'react';
// import router from 'next/router';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import CircleAvatar from '../comps/CircleAvatar';
import Input from '../comps/Input';
import Button from '../comps/Button';
import FullName from '../comps/FullName';

// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;  
  margin: 0;
	padding: 0 4% 0 4%;
  box-sizing: border-box;
`

const HeadCont = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const UserInfo = styled.div`
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

// ============ Function ============== //
// ============ Layout
export default function TenantEdit() {
	return(
		<Cont>

{/* // ============ Top Navigation */}
			<Navi />

{/* =================== Header */}
      <HeadCont>
          <Header marginBottom="45px" marginLeft="4%" text="Nancy J. Rojas"/>
      </HeadCont>

{/* =================== Information */}      
      <UserInfo>
          <InfoCont>
              <CircleAvatar mtop="-100" src="/images/img_tenant.png" href =""/>
              <InfoForm>
                <SubHead text="Personal Information" fontSize="36" justifyContent="left" marginB="52"/>
                <FullName />
                <Input title="Password" type="password" iheight="54"/>
                <Input title="Email" iheight="54"/>
                <Input title="Phone Number" iheight="54"/>
                <Button text="Save" margintop="80" minWidth="275" width="275" height="62" justify="right" routeTo="/"/>
              </InfoForm>
          </InfoCont>
      </UserInfo>

{/* =================== Reviews */}    
      {/* <ProfCont>
          <ProfileSub text="Reviews"/>
          <CenterBox>
            <ReviewCardImg 
              bgImage='url("/images/img_avatar_malcom.png")'
              text=""
              cborder="none"
              name="Landlord: Malcolm Christie"
              select="Selected: 6379 Longheed Hwy"
              review="I lived this home for about 1 year last year,, and it ways horrible... The room is dirty, the maintenance was not what I expected."
              boldDate="29 Sep 2021 19:01"
              routeTo=""
            />
          </CenterBox>
          <CenterBox>
            <ReviewCardImg 
              bgImage='url("/images/img_avatar_ruzica.png")'
              text=""
              cborder="none"
              name="Landlord: Ruzica Adamovic" 
              select="Selected: 101-5000 Imperial St"
              review="I lived this home for about 2 year last year,, and it I had a really great memory in her. The landlord is so kind and reasonable. So..."
              boldDate="15 Sep 2020 19:01"
              routeTo=""
            />
          </CenterBox>
          <CenterBox>
            <ReviewCardImg 
              bgImage='url("/images/img_avatar_xiu.png")'
              text=""
              cborder="none"
              name="Landlord: Xiu Juan Chiu" 
              select="Selected: 290 Fell Ave"
              review="I love this landlord!! She was sooo great. She was so helpful. Because I was new in Vancouver, she gave me all the information tha..."
              boldDate="10 Oct 2018 19:01" 
              routeTo=""
            />
          </CenterBox>
      </ProfCont> */}

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont>   

  )
}

