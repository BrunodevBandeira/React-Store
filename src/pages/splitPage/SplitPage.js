import React from "react";
import  "./SplitPage.css";
import { Link } from "react-router-dom";
import Head from "../../components/Head";


const SplitPage = () => {

    function handleEffect() {
        const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const container = document.querySelector(".container");
        
        left.addEventListener('mouseenter', () => {
            container.classList.add('hover-left')
        });
        
        left.addEventListener('mouseleave', () =>{ 
            container.classList.remove('hover-left')
        });
        
        right.addEventListener('mouseenter', () => {
            container.classList.add('hover-right')
        });
        
        right.addEventListener('mouseleave', () => {
            container.classList.remove('hover-right')
        });
    };

    return(
        <div id="container" onMouseMove={handleEffect}>
            <Head title="Seja bem vindo" description="SplitPage"/>
            <div className="split left">
                <h1> Logar... </h1>
                <Link to="/login" href="#" className="btn"> Entre </Link>
            </div>

            <div className="split right">
                <h1> Cadastrar... </h1>
                <Link to="/register" href="#" className="btn"> Cadastrar-se</Link>
            </div>

      </div>
    );
};

export default SplitPage;