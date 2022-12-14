import React from "react";
import { 
        BrowserRouter as Router,
        Route,
        Routes,
        Navigate
} from "react-router-dom";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import SplitPage from "./pages/splitPage/SplitPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFound from "./pages/notFound/NotFound";
import Contato from "./pages/contatoPage/Contato";
import Produto from "./pages/ProdutoPage/Produto";
import RegisterPage from "./pages/registerPage/RegisterPage";
import { AuthProvider, AuthContext  } from "./context/Auth";


const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated, loading } = React.useContext(AuthContext);
        if(loading) {
            return <div className="loading"> Carregando... </div>
        }
        if(!authenticated) {
            return <Navigate to="/login" />
        };
        return children;
    }


    return(
        <Router>
            <AuthProvider>
                <Header/>
                    <Routes>
                        <Route exact path="/" element={<SplitPage />} />
                        <Route exact path="login" element={ <LoginPage />} />
                        <Route exact path="register" element={ <RegisterPage /> } />
                        <Route exact path="home" element={ <Private>  <HomePage /> </Private> } />
                        <Route exact path="produto/:id" element={ <Produto /> } />
                        <Route exact path="contact" element={ <Contato /> } />
                        <Route exact path="*" element={ <NotFound /> } />
                    </Routes>
                <Footer />
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;