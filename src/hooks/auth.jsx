import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    const signIn = async ({ email, password }) => {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            api.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setData({ user, token });
            localStorage.setItem("rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("rocketmovies:token", token);
        } catch (error) {
            if (error.response) alert(error.response.data.message);
            else alert("Não foi possível fazer o Login!");
        }
    }

    function logout() {
        localStorage.removeItem("rocketmovies:token");
        localStorage.removeItem("rocketmovies:user");
        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("rocketmovies:token");
        const user = localStorage.getItem("rocketmovies:user");
        if (user && token) {
            api.defaults.headers.common["authorization"] = `Bearer ${token}`;
            setData({ user: JSON.parse(user), token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user: data.user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };

