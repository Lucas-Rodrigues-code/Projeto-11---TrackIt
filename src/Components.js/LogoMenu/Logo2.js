import styled from "styled-components"

import user from "/home/lucas/projetos/projeto11-trackit/src/Components.js/LogoMenu/logo2.jpg"

export default function Logo2() {
    return (
        <Logo>
            <h1>TrackIt</h1>
            <img src={user} alt="iamgem-logo" /> 
        </Logo>
    )
}

const Logo = styled.div`
    width: auto;
    height: 70px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content:space-between;
    align-items:center;
    h1{
        width: 97px;
        height: 49px;
        margin-left:18px;

        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;

        color: #FFFFFF;
        right:36px;
        
    }
    img{
        margin-right:11px;
        width: 51px;
        height: 51px;
        
        border-radius: 98.5px             
    }
`