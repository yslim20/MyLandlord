import styled from 'styled-components';
import React from 'react';

// ============ CSS ============== //
const FormCont = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LabelFor = styled.p`
    font-size: 24px;
    margin-left: 3%;
    font-weight: normal;
    margin-bottom: 5px;
`;

const InputBox = styled.input`
    width: 606px;
    height:83px;
    border-radius:15px;
    border: solid 3px #5333ED;
`;
// ============ Function ============== //
const LongInForm = ({
// ============ Props
    title="User Name"
}) => {
// ===========Layout
    return (
        <FormCont>
            <LabelFor>{title}</LabelFor>
            <InputBox type="text" />
        </FormCont>
    );
}

export default LongInForm;
