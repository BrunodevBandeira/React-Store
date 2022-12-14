import React from "react";
import "./RegisterPage.css";
import { AuthContext  } from "../../context/Auth";
import Head from "../../components/Head";



const RegisterPage = () => {

    const { authenticated, verifyPassword } = React.useContext(AuthContext);
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ confirm, setConfirm ] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("===> Submit <=== ", {email, password, confirm});
        console.log(password === confirm ? " ===> tá igual <=== " : " NOT ");
        verifyPassword(email, password, confirm);
    }



    return(
        <div id="register" onSubmit={handleSubmit}>
           <Head title="Cadastre-se" description="registerPage"/>
             <h1 className="title"> Cadastre-se </h1>
             <form className="form">

                <div className="field">
                    <label htmlFor="email"> E-mail </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Coloque o Email aqui..."
                        value={email} onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password"> Senha </label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Coloque a senha aqui..."
                        value={password} onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password"> Confirmar senha </label>
                    <input 
                        type="password"
                        name="password"
                        id="confirm"
                        placeholder="Confirmar senha..."
                        value={confirm} onChange={(e) => {setConfirm(e.target.value)}}
                    />
                </div>

                <div  className="error">
                    {password !== confirm ?  <p>...errado...</p> : " "}
                </div>

                <div className="actions">
                    <button type="submit"> Cadastrar </button>
                </div>

             </form>
        </div>
    );
};

export default RegisterPage;