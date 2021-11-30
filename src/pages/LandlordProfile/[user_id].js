import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import ProfileSub from '../../comps/ProfileSub';
import ShowAll from '../../comps/ShowAll';
import PropertyCard from '../../comps/PropertyCard';
import ReviewCard from '../../comps/ReviewCard';
import Footer from '../../comps/Footer';
import Header from '../../comps/Header';
import LandlordSub from '../../comps/LandlordSub';
import RetangleAvatar from '../../comps/RectangleAvatar';
import LandlordInfo from '../../comps/LandlordInfo';
import SubHead from '../../comps/SubHead';
import ChatIcon from '../../comps/ChatIcon';
import RoutButton from '../../comps/RoutButton';
import Navi from '../../comps/Navi';

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

const ButtCont = styled.div`
    position: absolute;
    left: 70%;
    top: 35%;
    margin-right: 3%;
    z-index:1;
`;

const ProfCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 70px;
`;

const InfoCont = styled.div`
    display: flex;
    justify-content: center;
`;
    
const InfoText = styled.div`
    display: flex;
    flex-direction: column;
`;

const VeriCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 140px;
`;

const CenterBox = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items:center;
`;

const ReviewCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

// ============ Function ============== //
export async function getServerSideProps(context) {
	
    // let view = await fetch('http://localhost:3080/profile/view/' + context.query.user_id);
    // let reviewCount = await fetch(`http://localhost:3080/profile/reviews/${context.query.user_id}/count`);
    // let reviews = await fetch(`http://localhost:3080/profile/reviews/${context.query.user_id}/getAll`);
    let view = await fetch('https://idsp-mylandlord.herokuapp.com/profile/view/' + context.query.user_id);
    let reviewCount = await fetch(`https://idsp-mylandlord.herokuapp.com/profile/reviews/${context.query.user_id}/count`);
    let reviews = await fetch(`https://idsp-mylandlord.herokuapp.com/profile/reviews/${context.query.user_id}/getAll`);

    let viewData = await view.json();
    let reviewCountData = await reviewCount.json();
    let reviewsData = await reviews.json();

    return {props:{viewData, reviewCountData, reviewsData}}
}

// ============ Layout
export default function LandlordProfile({viewData, reviewCountData, reviewsData}) {
	
	return  (
		
        <Cont>

{/* // ============ Top Navigation */}
            <Navi />

{/* // ============ Landlord information */}
            <HeadCont>
                <Header marginBottom="45px" marginLeft="4%" text={viewData.firstname + " " + viewData.lastname}/>
                <ChatIcon />
            </HeadCont>
            <ButtCont>
                <RoutButton margintop="0" text="Leave Review" routeTo={`/Review/${viewData.user_id}?n=${viewData.firstname}`}/>
            </ButtCont>
            <LandlordSub/>
            <InfoCont>
                <RetangleAvatar marginTop="2"/>
                <InfoText>
                    <SubHead text="Burnaby, BC." fontSize="24" justifyContent="left" marginB="10" marginL="3%"/>
                    <LandlordInfo text={reviewCountData + " reviews"} />
                    <VeriCont>
                        <LandlordInfo src="/icons/icon_verification.png" text="Email address"/>
                        <LandlordInfo src="/icons/icon_verification.png" text="Phone number"/>
                        <LandlordInfo src="/icons/icon_verification.png" text="Verify more info"/>
                    </VeriCont> 
                </InfoText>
            </InfoCont>

{/* // ============ Property information */}
            <ProfCont>
                <ProfileSub />
                <ShowAll />
                <CenterBox>
                    <PropertyCard marginTop="25%" />
                </CenterBox>
            </ProfCont>

{/* // ============ Reviews */}
            <ReviewCont>
                <ProfileSub text="Reviews"/>
                
                    {reviewsData.map((r) => {
                        return <CenterBox><ReviewCard review = {r.content} name={r.firstname + " " + r.lastname} boldDate={r.date} /></CenterBox>;
                    })}
                    {reviewsData.length === 0 ? <CenterBox>No Reviews yet</CenterBox>: ""}
                   {/* <ReviewCard review="The house was newly renovated, and the landlord cared about many things such as electricity and water tanks."/> */}

            </ReviewCont>
			
            
{/* // ============ Footer Navigation */}
            <Footer />
        </Cont>
    )
}