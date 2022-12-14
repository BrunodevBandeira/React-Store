import React from 'react'
import Header from "../header/Header"
import Footer from "../footer/Footer";
import foto from "../../assets/contato.jpg";
import Head from "../../components/Head";
import "./Contato.css";



const Contato = () => {
  return (
    <section className="contato animeLeft">
      <Head title="StoreHub | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <ul className="dados">
          <li>Entre em contato.</li>
          <li>storehub@storehub.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
  </section>
  );
};


export default Contato;