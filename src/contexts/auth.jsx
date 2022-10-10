import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [tokenStatus, setTokenStatus] = useState(null);

    const verifyToken = async ({ token }) => {
        const response = await api.post('/auth/verifytoken', {
            token
        });

        setTokenStatus(response.data.status);
    }

    function tokenEffect() {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');
        if (storagedToken && storagedUser) {

            verifyToken({ token: storagedToken });

            if (tokenStatus) {
                setUser(JSON.parse(storagedUser));
                api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
            } else if (tokenStatus === false) {
                Logout();
            }
        }
    }


    useEffect(() => {
        tokenEffect();
        setInterval(() => {
            tokenEffect();
        }, 6000)

    }, [tokenStatus]);

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </AuthContext.Provider >
    );


    async function Login({ email, password }) {
        const response = await api.post('/auth/login', {
            email,
            password,
        });

        setUser(response.data.user);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        localStorage.setItem('@App:user', JSON.stringify(response.data.user));
        localStorage.setItem('@App:token', response.data.token);

    }

    async function Logout() {
        setUser(null);
        api.defaults.headers.common['Authorization'] = ``;
        localStorage.setItem('@App:user', "");
        localStorage.setItem('@App:token', "");
    }
};


export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export default AuthContext;