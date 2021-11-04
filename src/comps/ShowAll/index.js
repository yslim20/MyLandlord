import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ css ============== //
const ContButt = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right: 5%;
`;

const TextButt = styled.a`
    border:none;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
    background-color: none;

    :hover{
        text-decoration: underline;
    }
`;


// ============ Function ============== //
const ShowAll = ({}) => {
    // ============ Routing
    const router = useRouter();
    return(
        <ContButt>
            <TextButt onClick={()=> router.push("/")}>Show All</TextButt>
        </ContButt>
    );
}

export default ShowAll;