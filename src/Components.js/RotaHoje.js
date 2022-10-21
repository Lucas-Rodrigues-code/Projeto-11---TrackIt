import Logo2 from "./LogoMenu/Logo2"
import styled from "styled-components"
import { BsCheckSquare } from 'react-icons/bs';

import { useContext } from "react";
import { Context } from "../contexts/Context";

export default function RotaHoje() {
    const {login} = useContext(Context)
    console.log(login)
    return (
        <>
            <Logo2 />
            <MenuHabito>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </MenuHabito>
            <Habito>
                <div>
                    <h1>Ler 1 capítulo de livro</h1>
                    <h2>Sequência atual: 3 dias
                        Seu recorde: 5 dias</h2>
                </div>
                <BsCheckSquare />
            </Habito>


        </>
    )
}

const MenuHabito = styled.div`
    margin-left:17px;
    margin-top:28px;
  
    h1{
        width: auto;
        height: 29px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
 
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA; 
    }
  

`
const Habito = styled.div`
    width: 340px;
    height: 91px;

    background: red;
    border-radius: 5px;
    display:flex;
    
   

    h1{
        margin-top:13px;
        margin-left:15px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    h2{
        margin-top:7px;
        margin-left:15px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;
    }
   

    
`

 
