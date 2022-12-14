import Logo from "./LogoMenu/Logo"
import styled from "styled-components"
import { useState } from "react/cjs/react.development"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate, Link } from 'react-router-dom';

export default function RotaCadastro() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")
    const [removeLoading, setRemoveLoading] = useState(false)

    const navigate = useNavigate()

    function fazerCadastro(e) {
        e.preventDefault()
        const body = {
            email: email,
            name: nome,
            image: foto,
            password: senha

        }
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            .then(() => {
                setRemoveLoading(true)
                navigate("/")
            })
            .catch(() => {
                alert("Opss! Algo deu errado, verifique seus dados")
                window.location.reload()
            })
    }
    return (
        <>
            <Logo />
            <Formulario>
                <form>
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={removeLoading} />
                    <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} disabled={removeLoading} />
                    <input placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} disabled={removeLoading} />
                    <input placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} disabled={removeLoading} />
                    <button onClick={fazerCadastro}>
                        {removeLoading === true ? <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        /> : "Cadastrar"}
                    </button>
                    <Link to={"/"}>
                        <h1>J?? tem uma conta? Fa??a login!</h1>
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
        display:flex;
        justify-content:center;
        align-items:center;

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