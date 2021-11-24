import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

// ============ Imported Comps ============== //
import Header from '../comps/Header';
import Button from '../comps/Button';
import ImgBox from '../comps/ImgBox';
import Divider from '../comps/Divider';
import Input from '../comps/Input';
import login from '../scripts/auth/login'
import Navi from '../comps/Navi';
import Footer from '../comps/Footer';
import RoutButton from '../comps/RoutButton';
import LoginErrorBox from '../comps/LoginErrorBox';

// ============ css ============== //
const Cont = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
`;

const ErrorCont = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`

const BttmCont = styled.form`
    display: flex;
    flex-wrap: row;
    flex-direction: row;
    justify-content: center;
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

    const router = useRouter()
    const OKlogin = async(event) => {
        event.preventDefault();

        const result = await fetch("http://localhost:3080/auth/login",
        // const result = await fetch("https://idsp-mylandlord.herokuapp.com/auth/login",
          {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({ 
              Email: event.target.Email.value,
              Password: event.target.Password.value,
            }),
            headers: { "Content-Type": "application/json" },
          })
          // .then(window.location.replace("http://localhost:3000/"))
        .then(user => console.log(user))
        .then((response) => {
          console.log(response);
          router.push("/");
        })
    }

    function handleClick() {
		setShowPop(true)	
	}

	function handleClickClose(){
		setShowPop(false)
	}

	const [showpop, setShowPop] = useState(false)

    return(
        <Cont>

{/* // ============ Top Navigation */}
            <Navi 
                chatClick={() => handleClick()}
            />
{/* // ============ Content start*/}            
            
            <Header />

            <ErrorCont> 
                {showpop === true && <LoginErrorBox 
                    clickHandler={() => handleClickClose()}				
                />}
            </ErrorCont>            

            <BttmCont onSubmit={OKlogin} >
                

{/* // ============ Form*/}
                <ContLeft>
                    <Input title="Email" type ="email"/>
                    <Input title="Password" type="password"/>
                    <Button text="Log In" />
                    <Divider />
                    {/* <Button routeTo="/SignUp" text="Sign Up" margintop="45" bgcolor="#5333ED" color="#ffffff"/> */}
                    <RoutButton routeTo="/SignUp" text="Sign Up" margintop="45" bgcolor="#5333ED" color="#ffffff" />
                </ContLeft>

{/* // ============ Image*/}
                <ContRight>
                    <ImgBox
                        src="./images/ani_LogIn.gif"
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
