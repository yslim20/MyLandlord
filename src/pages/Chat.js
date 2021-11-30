import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';

// ============ Imported Comps ============== //
import Navi from '../comps/Navi';
import UserDrop from '../comps/UserDrop';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Subhead from '../comps/SubHead';
import MessageEx from '../comps/MessageEx';
import ShowChat from '../comps/ShowChat';


// ============ CSS ============== //
const Cont = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 4% 0 4%;
    box-sizing: border-box;
`;

const HeadCont = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

const NameCont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Line = styled.hr`
    justify-content: center;
    border: 2px solid #5333ED;
    width: 1150px;
    margin-bottom: 30px;
`;


const MessageCont = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: 100px;
`;
const MessageCont2 = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
const TextBoxCont = styled.div`
    display:flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.input`
    type:text;
    width: 800px;
    height: 10px;
    border-radius: 20px;
    border: 1px solid #6E7076;
    resize: none;
    padding: 16px 30px;
    box-sizing: content-box;
    font-size: 18px;
`;

const Button = styled.button`
    margin-left: 25px;
    width: 166px;
    height: 40px;
    border-radius: 20px;
    background: #5333ED;
    border:none;
    color: #fff;
    font-size: 18px;
    font-family: Heebo;
    font-weight: 500;
`;


// ============ Function ============== //
// ============ Layout
export default function Chat(
    src="./images/img_user_tenant.png",
    clearText=true
) {
    if(clearText === false){
        clearText=false
    }
    function clearText(){
        document.text_input.reset();
    }
    const [ShowMsg, setShowMsg] = useState(false)
    return(
        <Cont>
            <Navi children = 
                {<UserDrop />} 
            />
            <HeadCont>
                <Header text="Chat" marginLeft="4%"/>
            </HeadCont>
            <NameCont> 
                <Subhead text="Jasper White" fontSize="36" fcolor="#3C424C" marginB="30"/>
                <Line />
                <Subhead text="Nov 22" fontSize="24" fcolor="#6E7076" marginB="90"  />
            </NameCont>
            <MessageCont>
                <MessageEx text="Hello, My name is Sonia Yepez. I saw your listing about the unit and I was wondering if it is still available" width="800px"/>
            </MessageCont>
            <MessageCont>
                <MessageEx direction="row-reverse" text="Yes, it's available now" src="./images/img_landlordProfile.png" width="200px" bgcolor="#EAEAEA" border="none"/>
            </MessageCont>
            <MessageCont2>
                <MessageEx text="I saw ur reviews and it's awesome" width="290px" />
            </MessageCont2>
            <MessageCont2>
                <MessageEx text="and the place is also perfect for me" width="300px"/>
            </MessageCont2>
            <MessageCont>
                <MessageEx text="I wanna make an appointment" width="270px"/>
            </MessageCont>
            <MessageCont>
                <MessageEx direction="row-reverse" text="How about this Thursday 2pm?" src="./images/img_landlordProfile.png" width="300px" bgcolor="#EAEAEA" border="none"/>
            </MessageCont>
            <MessageCont>
                <MessageEx text="Sure! see you then" width="200px"/>
            </MessageCont>
            <ShowChat showmsg={ShowMsg}/>
            {/* <MessageCont>
                <MessageEx direction="row-reverse" text="Hi" src="./images/img_landlordProfile.png" width="190" bgcolor="#EAEAEA" border="none"/>
            </MessageCont> */}

            <TextBoxCont>
                <TextBox id="text_input"/>
                <Button onClick={()=>
                    setShowMsg(true)
            }>Send</Button>
            </TextBoxCont>
            <Footer />
        </Cont>
    )
}