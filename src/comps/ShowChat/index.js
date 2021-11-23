import styled from 'styled-components';
import React from 'react';
import Subhead from '../SubHead';
import MessageEx from '../MessageEx';

const NewmsgCont = styled.div`
    display:flex;
    flex-direction: column;
`;
const NewLine = styled.hr`
    justify-content: center;
    border: 1px solid #EAEAEA;
    width: 1150px;
    margin-bottom: 50px;
`;
const MessageCont = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom: 100px;
`;


const ShowChat = ({
    showmsg=false
}) => {
    if(showmsg === true){
            return(
                <NewmsgCont >
                        <NewLine />
                        <Subhead text="Today" fontSize="24" fcolor="#6E7076" marginB="90"  />
                        <MessageCont>
                            <MessageEx text="hello" width="190"/>
                        </MessageCont>
                </NewmsgCont>
            );
    }
    else{
        return <></>
    }
}

export default ShowChat;