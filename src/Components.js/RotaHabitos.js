import styled from "styled-components"

import Logo2 from "./LogoMenu/Logo2"
import Menu from "./LogoMenu/Menu"
export default function RotaHabitos() {
    return (
        <>
            <Logo2 /> 
            <Container>
                <div>
                <MenuHabito>
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </MenuHabito>
                <MenuTextoPadrao>
                    Você não tem nenhum hábito
                    cadastrado ainda. Adicione um hábito
                    para começar a trackear!
                </MenuTextoPadrao>
                </div>
            </Container>

            <Menu/>
        </>
    )
}



const MenuHabito = styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:17px;
    margin-top:28px;
  
    h1{
        width: 148px;
        height: 29px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;

        color: #126BA5;
 
    }
    button{
        width: 40px;
        height: 35px;  
        margin-right:18px;     

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
 
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        
        text-align: center;
        color: #FFFFFF;
       
    }

`
const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;

`
const MenuTextoPadrao = styled.h1`
    width: 338px;
    height: 74px;
    margin-left:17px;
    margin-top:28px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
    
`
const MenuFooter = styled.div`
    width:  375px;
    height: 70px;
    background: #FFFFFF;
    justify-content:space-between;
    display:flex;
    
    align-items:center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52B6FF;

    position:fixed;
    right: 0;
    left:0;
    bottom: 0;
    

    h1{
        margin-left:36px;
        margin-right:31px;
    }
`