import styled from "styled-components"

import Logo2 from "./LogoMenu/Logo2"
export default function RotaHabitos() {
    return (
        <Container>
            <Logo2/>              
            <MenuHabito>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </MenuHabito>
            <MenuTextoPadrao>
                Você não tem nenhum hábito
                cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </MenuTextoPadrao>
            <MenuFooter>
                <h1>Hábitos</h1>
                <h1>Histórico</h1>


            </MenuFooter>
            <LogoMenu>
                <svg width="69" height="79" viewBox="0 0 69 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.4653 79C23.9039 78.9959 18.4059 77.8214 13.3291 75.5531C8.25231 73.2847 3.71069 69.6387 0 65.5L5.89068 60.5653C9.40767 64.4945 13.8525 67.4821 18.8205 69.2563C23.7885 71.0305 29.1218 71.5348 34.3348 70.7233C39.5477 69.9118 44.4746 67.8104 48.667 64.6103C52.8593 61.4101 56.1838 57.2131 58.3377 52.4012C60.4916 47.5893 61.4066 42.3155 60.9992 37.0601C60.5919 31.8047 58.8751 26.7345 56.0054 22.3114C53.1356 17.8882 49.204 14.2526 44.5686 11.7355C39.9331 9.21842 34.7411 7.9999 29.4653 8V0C39.9505 0 50.0063 4.1616 57.4205 11.5693C64.8347 18.977 69 29.0239 69 39.5C69 49.9761 64.8347 60.023 57.4205 67.4307C50.0063 74.8384 39.9505 79 29.4653 79Z" fill="white" />
                </svg>
                <h1>Hoje</h1>
            </LogoMenu>
        </Container>
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
    width: auto;
    height: 70px;
    background: #FFFFFF;

    display:flex;
    justify-content:space-between;
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
const LogoMenu = styled.div`
    width: 91px;
    height: 91px;
    
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;

    background: #52B6FF;
    position:fixed;
    bottom:10px;
    left:142px;

    svg{
        margin-left:10px;
    }
    h1{
        position:fixed;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #FFFFFF;
    }

`
const Container = styled.div`
    body{
        background:red;
    }
`