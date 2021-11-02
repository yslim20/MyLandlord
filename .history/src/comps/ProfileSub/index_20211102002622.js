import styled from 'styled-components';
import React from 'react';


const Cont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Sub = styled.p`
    font-size: ${props=>props.fontSize};
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 36px;
    color: #2F281E;
`;

const Line = styled.div`
    border-top: 2px solid #5333ED;
    width: 200px;
`;


const ProfileSub = ({
    text="Properties",
    f
}) => {
    return(
        <Cont>
            <Sub>{text}</Sub>
        </Cont>
    );
}

export default ProfileSub;