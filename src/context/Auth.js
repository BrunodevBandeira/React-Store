import React from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = React.createContext();
export const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [ user, setUser ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);

    React.useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
        
    }, [])


    const login = (email, password) => {
        console.log("LOGIN ", {email, password});
        const recoveredUser = localStorage.getItem("user");
        const recoveredPassword = JSON.parse(recoveredUser).password;
        if(password === recoveredPassword) {
            navigate("/home");
        };
    };


    const verifyPassword = (email, password, confirm) => {
        const registerUser = {
            id:"123",
            email, password,
        };

        if(password === confirm) {
            localStorage.setItem("user", JSON.stringify(registerUser));
            setUser(registerUser);
        };
        
        console.log("====> CONFIRMADO <====", {password, confirm});
    };

    const logOut = () => {
        console.log("SAIU <= .... ");
        localStorage.removeItem("user"); 
        setUser(null);
        navigate("/login");
    };


    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, verifyPassword, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

