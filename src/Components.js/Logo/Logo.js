import styled from "styled-components"
import logo from "./logo.png"

export default function Logo() {
    return (
        <>
            <ContainerLogo>
                <LogoImg src={logo} />
            </ContainerLogo>
            <ContainerRotaInicial>
                <h1>TrackIt</h1>
            </ContainerRotaInicial>
        </>
    )
}

const LogoImg = styled.img`
    width: 154.94px;
    height:100.5px;
`
const ContainerLogo = styled.div`
    display:flex;
    justify-content:center;
    margin-top:68px;
`

const ContainerRotaInicial = styled.div`
    display:flex;
    justify-content:center;
    h1{
        width: 180px;
        height: 86.23px;
        
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;

        text-align: center;

        color: #126BA5;

    }

`