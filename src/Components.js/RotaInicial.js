import { useState } from "react/cjs/react.development"
import styled from "styled-components"
import { useNavigate, Link } from 'react-router-dom';
import Logo from "./Logo/Logo"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'


export default function RotaInicial() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [removeLoading, setRemoveLoading] = useState(false)

    const navigate = useNavigate()


    function fazerLogin(e) {
        e.preventDefault()
        const body = {
            email: email,
            password: senha

        }
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
        requisicao.then(() => {
            setRemoveLoading(true)
            navigate("/hoje")
        })
        requisicao.catch(() => {
            alert("Opss! Email ou senha errados")
            window.location.reload()
        })
    }
    

    return (
        <>
            <Logo />
            <Formulario>
                <form>
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={removeLoading}  />
                    <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value) } disabled={removeLoading} />
                    <button onClick={fazerLogin} disabled={removeLoading}>
                        {removeLoading === true ? <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}                    
                        /> : "Entrar"}
                    </button>
                    <Link to={"/cadastro"}>
                        <h1>Não tem uma conta? Cadastre-se!</h1>
                    </Link>
                </form>
            </Formulario>
        </>

    )
}




const Formulario = styled.div`
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:32px;
    
    }
    

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

        display:flex;
        justify-content:center;
        align-items:center;
         
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

