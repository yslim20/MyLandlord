import styled from 'styled-components';
import React from 'react';
import router from 'next/router';

// ============ Imported Comps ============== //
import ProfileSub from '../../comps/ProfileSub';
import Footer from '../../comps/Footer';
import Header from '../../comps/Header';
import LandlordSub from '../../comps/LandlordSub';
import RetangleAvatar from '../../comps/RectangleAvatar';
import LandlordInfo from '../../comps/LandlordInfo';
import SubHead from '../../comps/SubHead';
import ReviewCardImg from '../../comps/ReviewCardImg';
import Navi from '../../comps/Navi';
import TenantInfo from '../../comps/TenantInfo';


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
    justify-content: flex-start;
    width: 100%;
`;

const IconCont = styled.a`
  display: block;
  width: 84px;
  height: 84px;
  border: none;
  border-radius: 50%; 
  bottom: 30px;

  :hover{
    transform: scale(0.95);
    transition-duration: 0.5s;    
`

const Icon = styled.img`
    display: block;
    object-fit: cover;
    width: 84px;
    height: 84px;
    border-radius: 50%;  
`;

const ProfCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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
    justify-content: center;
    align-items: flex-start;
    margin-top: 230px;
    box-sizing: border-box;
`;

const CenterBox = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items:center;
`;

// ============ Function ============== //

export async function getServerSideProps(context) {
	// const router=useRouter();
    let view = await fetch('http://localhost:3080/profile/view/' + context.params.user_id);
    // let view = await fetch('https://idsp-mylandlord.herokuapp.com/profile/view/' + context.params.user_id);
    // let reviewCount = await fetch(`https://idsp-mylandlord.herokuapp.com/profile/reviews/${context.params.user_id}/countWritten`);
    let reviewCount = await fetch(`http://localhost:3080/profile/reviews/${context.params.user_id}/countWritten`);
    let reviews = await fetch(`http://localhost:3080/profile/reviews/${context.params.user_id}/getAllWritten`);
    // let reviews = await fetch(`https://idsp-mylandlord.herokuapp.com/profile/reviews/${context.params.user_id}/getAllWritten`);

    let viewData = await view.json();
    let reviewCountData = await reviewCount.json();
    let reviewsData = await reviews.json();

    return {props:{viewData, reviewCountData, reviewsData}}
}

// ============ Layout
export default function TenantProfile({viewData, reviewCountData, reviewsData}) {
    return(
        <Cont>

{/* // ============ Top Navigation */}
            <Navi />

{/* // ============ Landlord information */}
            <HeadCont>
            <Header marginBottom="45px" marginLeft="4%" text={viewData.firstname + " " + viewData.lastname}/>
                {/* <IconCont onClick={()=>router.push('/TenantEdit')}> 
                    <Icon src="/icons/icon_edit.png"/>
                </IconCont> */}
            </HeadCont>

            

            <InfoCont>
                <RetangleAvatar 
                    src="/images/img_tenant.png"
                    marginTop = "2"
                />
                <InfoText>
                    <SubHead 
                        text="" 
                        fontSize="24"
                        justifyContent="left" 
                        marginB="10" 
                        marginL="3%"
                    />
                    <LandlordInfo 
                        text = {reviewCountData + " reviews"}
                    />

                    {/* <VeriCont>
                        <TenantInfo />
                    </VeriCont>  */}
                </InfoText>
            </InfoCont>

{/* // ============ Reviews */}
            <ProfCont>
                <ProfileSub text={`${viewData.firstname} wrote reviews for...`}/>
                {reviewsData.map((r) => {
                        return <CenterBox>
							<ReviewCardImg 
								review = {r.content} 
								name={r.firstname + " " + r.lastname} 
								boldDate={r.date} 
								is_recommended={r.is_recommended}
							/>
							</CenterBox>;
                })}
            	{reviewsData.length == 0 ? <CenterBox>No Reviews yet</CenterBox>: ""}
            </ProfCont>
            
{/* // ============ Footer Navigation */}
            <Footer />
        </Cont>
    )
}