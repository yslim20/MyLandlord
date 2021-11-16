import styled from 'styled-components';
import React from 'react';

// ============ Imported Components ============== //
import Header from '../comps/Header';
import SubHead from '../comps/SubHead';
import Navi from '../comps/Navi';
import SearchBar from '../comps/SearchBar';
import ImgBox from '../comps/ImgBox';
import EnhancedTable from '../comps/EnhancedTable'
import PaginationRow from '../comps/PaginationRow';
import Footer from '../comps/Footer';

// ============ CSS ============== //
const Cont = styled.div`
	display:flex;
	flex-direction: column;
	margin: 0;
	padding: 0 4% 0 4%;
  box-sizing: border-box;
  
`

const HeadCont = styled.div`
  display:flex;
  flex-direction: ${props=>props.flexDir}; 
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-left: 1%;
  box-sizing: border-box;
`;

const MidCont = styled.div`
	display:flex;
	flex: 1;
	flex-direction: column;
	justify-content:center;
	align-items:flex-start;
	margin-bottom: ${props=>props.cmarginB}; 
`

// ============ Function ============== //
const Landlord = ({

// ============ Properties

  cmarginB = "50px",
  cmarginBttm = "0px",
  flexDir = "column",

})=>{

// ============ Layout
	return(
		<Cont>
{/* // ============ Top Navigation */}
			<Navi/>

{/* // ============ MAP */}
      <MidCont cmarginB={cmarginB}>
        <HeadCont flexDir={flexDir}>
          <Header text="Landlord" marginBottom = "40px"/>
        </HeadCont>
        <SubHead 
          marginB = "40"
          justifyContent="left"
          text="Which area do you want to search?"
          marginL="2%"
        />
        <SearchBar marginL="2"/>

{/* it is a image with img tag */}
        <ImgBox 
          cwidth="100%" 
          cheight="auto"
          src="./images/img_map.png"
          marginL="%"
        />
      </MidCont>

{/* // ============ LIST OF LANDLORD */} 
      <MidCont cmarginB = {cmarginBttm}>
        <HeadCont flexDir={flexDir}>
          <Header text="List of Landlord" cMinWidth = "600px" marginBottom = "40px"/>
        </HeadCont>
        <SubHead 
          marginB = "40"
          justifyContent="left"            
          text="Who do you want to search?"
          marginL="2%"
        />
        <SearchBar
          placeholder="Please type your landlord name or address.."
          marginL="2"
        />

        <EnhancedTable/>        

        {/* <PaginationTest /> */}
        <PaginationRow />
          
      </MidCont>

{/* // ============ Bottom Navigation */}
      <Footer />
    </Cont> 
  )
}

export default Landlord;