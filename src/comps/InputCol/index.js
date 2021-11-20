import styled from 'styled-components';
import React from 'react';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    margin-bottom: 35px;
`;

const LabelText = styled.label`
    font-size: 20px;
    font-family: Heebo;
    font-weight: 500;
    margin-right: 3%;
    min-width: 148px;
`;

const InputBox = styled.input`
    width: 423px;
    height: 52px;
    border-radius: 10px;
    border: 3px solid #5333ED;
    font-size: 16px;
    padding: 18px;
    box-sizing: border-box;
    ::-webkit-input-placeholder {
        font-family: Heebo;
        font-size: 16px;
        font-weight: 400;
    }
`;


const InputCol = ({
    text="Address Line 1",
    placeholder=""
}) => {
    return(
        <Cont>
            <LabelText>{text}</LabelText>
            <InputBox placeholder={placeholder}/>
        </Cont>
    );
}

export default InputCol;