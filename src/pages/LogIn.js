import styled from 'styled-components';
import React from 'react';

// ============ Imported Comps ============== //
import Header from '../comps/Header';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import Divider from '../comps/Divider';
import Input from '../comps/Input';


import login from '../scripts/auth/login'
import TopNav from '../comps/TopNav'
import Footer from '../comps/Footer';


// ============ css ============== //
const Cont = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
`;

const BttmCont = styled.form`
    display: flex;
    flex-wrap: row;
    flex-direction: row;
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
    padding-top: 30px;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
`

// ============ Function ============== //
// ============ Layout
export default function LogIn() {
    return(
        <Cont>

{/* // ============ Top Navigation */}
            <TopNav />
{/* // ============ Content start*/}
            <Header />
            <BttmCont onSubmit={login} >
{/* // ============ Form*/}
                <ContLeft>
                    <Input title="Email" type ="email"/>
                    <Input title="Password" type="password"/>
                    <Button text="Log In" />
                    <Divider />
                    <Button routeTo="/SignUp" text="Sign Up" margintop="45" bgcolor="#5333ED" color="#ffffff"/>
                </ContLeft>

{/* // ============ Image*/}
                <ContRight>
                    <ImgBox
                        src="./images/LogInImg.svg"
                        height="735px"
                        cwidth="90%"
                        cheight="auto"
                    />
                </ContRight>
            </BttmCont>

{/* // ============ Bottom Navigation */}
            <Footer />
        </Cont>
    )
}
