import { createContext, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from "../services/api";

type User = {
  name: string;
}

type SigInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SigInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() =>{
    const { 'hvex.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: SigInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    })

    setCookie(undefined, 'hvex.token', token, {
      maxAge: 60 * 60 * 1, // Válido por 1 hora
    })
    
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    setUser(user)
    Router.push('/searchrepositories');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}