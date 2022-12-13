import { useEffect, useState, createContext } from "react";
import Loading from "../components/Loading";

import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const isAuthenticated = user !== null;

    const handleProfile = async () => {
        await api.get('/api/v1/public/user/me')
        .then(res => {
            console.log('%c[PixelStore] Buscando usuário para fornecimento de dados', 'color:yellow')
            setUser(res.data)
            setLoading(false);
        }).catch(error => {
            setUser(null);
            setLoading(false);
        })
    }

    useEffect(() => {
        console.log('%c[PixelStore] Renderizando provider...', 'color:green')
        handleProfile()
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
            { loading ? <Loading/> : children }
        </AuthContext.Provider>
    )
}