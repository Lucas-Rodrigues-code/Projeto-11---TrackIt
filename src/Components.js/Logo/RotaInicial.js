import styled from "styled-components"
import Logo from "./Logo"

export default function RotaInicial() {
    return (
        <>
           <Logo/>          
            <Formulario>
                <input placeholder="email"/>
                <input placeholder="senha"/>
                <button>Entrar</button>
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Formulario>
        </>

    )
}




const Formulario = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:32px;
    

    input{
        width: 303px;
        height: 45px;
        margin-top:6px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        ::placeholder {
            padding-left:11px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;

            color: #DBDBDB;
        
        }
    }
    button{
        width: 303px;
        height: 45px;
        margin-top:6px;

        background: #52B6FF;
        border-radius: 4.63636px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
        border: none;
         
    }
    h1{
        width: 232px;
        height: 17px;
        margin-top:25px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`

