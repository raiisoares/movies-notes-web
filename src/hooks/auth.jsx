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

    const userUpdate = async ({ user, avatarFile }) => {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("rocketmovies:user", JSON.stringify(user));
            setData({ user, token: data.token });
            alert("Perfil atualizado!");
        } catch (error) {
            if (error.response) alert(error.response.data.message);
            else alert("Não foi possível atualizar o perfil!");
        }

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
        <AuthContext.Provider value={{ signIn, user: data.user, logout, userUpdate }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };

