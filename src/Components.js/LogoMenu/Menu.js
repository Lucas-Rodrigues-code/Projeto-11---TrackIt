import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Menu() {

    const valor = 0.76;
    return (
        <ContainerMenu>
            <Link to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <Link to={"/hoje"}>
                <LogoMenu>
                    <CircularProgressbar value={valor} maxValue={1} text={`Hoje`} />
                </LogoMenu>
            </Link>
            <Link to={"/historico"}>
                <h2>Histórico</h2>
            </Link>
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`
    width:auto;
    height:100px;
    display:flex;
    justify-content:center;
    background-color:#FFFFFF;
    position:fixed;
    bottom:0;
    right:0;
    left:0px;

    h1{
        display:flex;
        justify-content:center;
        align-items:center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
        margin-top:30px;
        
    }
    h2{
        display:flex;
        justify-content:center;
        align-items:center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        margin-top:30px;

        color: #52B6FF;
    }

`
const LogoMenu = styled.div`
    width: 91px;
    height: 91px;
    margin-right:38px;
    margin-left:38px;
    
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%; 

`
