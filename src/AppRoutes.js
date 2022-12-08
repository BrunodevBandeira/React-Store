import React from "react";
import { 
        BrowserRouter as Router,
        Route,
        Routes,
        Navigate
} from "react-router-dom";
import SplitPage from "./pages/splitPage/SplitPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFound from "./pages/notFound/NotFound";
import RegisterPage from "./pages/registerPage/RegisterPage";


const AppRoutes = () => {

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<SplitPage />} />
                <Route exact path="/login" element={ <LoginPage />} />
                <Route exact path="/home" element={ <HomePage /> } />
                <Route exact path="/register" element={ <RegisterPage /> } />
                <Route exact path="*" element={ <NotFound /> } />
            </Routes>
        </Router>
    );
};

export default AppRoutes;