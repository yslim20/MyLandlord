import styled from 'styled-components';
import React from 'react';
import router, {useRouter} from 'next/router';

// ============ CSS ============== //
const LogoCont = styled.div`
    width: 215px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: ceter;
    cursor: pointer
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
`;

// ============ Function ============== //
const HorLogo = ({}) => {
// ============ Routing
    const router = useRouter();

// ============ Layout
    return(
        <LogoCont onClick={()=>router.push("/")}>
            <Logo src="/images/logo_horizontal.png" alt="MyLandlord Logo V2" />
        </LogoCont>
    );
}

export default HorLogo;