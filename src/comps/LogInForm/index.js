import styled from 'styled-components';
import React from 'react';
import { Router, useRouter } from "next/router";
import { response } from 'express';

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
    const router = useRouter();
    async function onSubmit(event) {
        event.preventDefault();
        const result = await fetch("https://idsp-mylandlord.herokuapp.com/auth/login",
        {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({
            Email: event.target.Email.value,
            Password: event.target.Password.value,
        }),
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
          console.log(response);
          router.push
      })
    }

// ===========Layout
    return (
        <FormCont>
            <LabelFor>{title}</LabelFor>
            <InputBox type="text" />
        </FormCont>
    );
}

export default LongInForm;
