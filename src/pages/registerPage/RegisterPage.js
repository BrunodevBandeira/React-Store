import React from "react";
import "./RegisterPage.css";

const RegisterPage = () => {

    return(
        <div id="register">
             <h1 className="title"> Cadastre-se </h1>
             <form className="form">

                <div className="field">
                    <label htmlFor="email"> E-mail </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Coloque o Email aqui..."
                    />
                </div>

                <div className="field">
                    <label htmlFor="password"> Senha </label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Coloque a senha aqui..."
                    />
                </div>
             </form>
        </div>
    );
};

export default RegisterPage;