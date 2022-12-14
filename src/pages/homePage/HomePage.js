import React from 'react'
import "./HomePage.css";
import Head from "../../components/Head";
import { Link } from "react-router-dom";
import Header from '../header/Header';
import Footer from "../footer/Footer";

const HomePage = () => {

  const [ produtos, setProdutos ] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto').
    then((r) => r.json()).
    then((json) => setProdutos(json))
  }, []);


  if(produtos === null) return null;
  console.log(produtos);

  return (
    <nav>
      <Header />
        <section id="HomePage">
            <Head title="StoreHub" description="HomePage"/>
          <nav className="produtos animeLeft">
              {produtos.map((produto => 
                  // <Link to={`produto/${produto.id}`} key={produto.id}>
                  <Link to={`/produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                      <h1> {produto.nome} </h1>
                  </Link>))}
          </nav>
        </section>
      <Footer />
    </nav>
  );
};


export default HomePage;