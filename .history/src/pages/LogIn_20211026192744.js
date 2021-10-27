import styled from 'styled-components';
import React from 'react';

import Header from '../comps/Header';
import LongInForm from '../comps/LoginForm';
import ButtonI from '../comps/Button';

const Cont = styled.div`
    display:flex;
    flex-direction: column;

`;

export default function LogIn() {
    return(
        <Cont>
            <Header />
            <LongInForm />
            <LongInForm title="Password" />
            <ButtonInput />
        </Cont>
    )
}