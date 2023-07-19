import React, { useState } from 'react';

interface AppContextI {
    token: string,
    user: User | null,
    setToken: (value: string) => void
    setUser:(value: User) => void
}

export interface User {
    name:   string;
    email:  string;
    role:   string;
    status: boolean;
    google: boolean;
    uid:    string;
}

export const AppContext = React.createContext({} as AppContextI);

export const Provider =({ children }: any) => {
        const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
        const [user, setUser] = useState<User | null>(JSON.parse(localStorage.getItem('user') || '{}'));
    

const values = {
    token,
    setToken,
    user,
    setUser
}

return (<AppContext.Provider value={values}>{children}</AppContext.Provider>)
}