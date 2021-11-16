// import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios'

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import SignUpForm from '../comps/SignUpForm';
import ImgBox from '../comps/ImgBox';
import Header from '../comps/Header';
import Footer from '../comps/Footer';


// ============ CSS ============== //
const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; 
  padding: 0 4% 0 4%;
  box-sizing: border-box; 
`

const MidCont = styled.div`
	display:flex;
	flex: 1;
  width: 100%;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content:center;
	align-items:center;
`

const ContLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column; 
  justify-content: center;
`

const ContRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 280px;
  align-items: flex-end;
  justify-content: center;
`

// ============ Function ============== //
// ============ Layout
export default function SignUp_test() {
  return (
    <Cont>
{/* // ============ Top Navigation */}
			<Navi/>

{/* // ============ Content Starts */}     
      <MidCont>
        <ContLeft>   
          <Header text="Sign Up"/>     
          <SignUpForm />
        </ContLeft>

        <ContRight>
          <ImgBox 
            cwidth = "90%"
            src="./images/img_signup.png" 
          />
        </ContRight> 
      </MidCont>  

{/* // ============ Footer Navigation */}
      <Footer />
    </Cont>
  )
}
