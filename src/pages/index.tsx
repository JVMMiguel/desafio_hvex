import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import axios from "axios";

import styles from "./home.module.scss";
import Logo from "../images/logo.svg";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  async function searchAllUsers() {
    try {
      const { data } = await axios.get("http://localhost:3333/users");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const allUsers = await searchAllUsers();
    const userExists = allUsers.some(
      (user) => user.email === email
        && user.password === password);
    if(userExists){
      Router.push('/searchrepositories')
    } else {
      setError('Email ou senha incorretos!')
    }
  }

  return (
    <>
      <Head>
        <title>Desafio - HVEX</title>
      </Head>
      <div className={styles.wallpaper}>
        <main className={styles.login}>
          <section>
            <Image src={Logo} alt="HVEX Logo" />
          </section>
          <form
            className={styles.loginForm}
            onSubmit={(event) => handleLogin(event)}
          >
            <label>E-mail</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="E-mail"
              required
            />

            <label>Senha</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Senha"
              required
            />
            <p>{error}</p>
            <button type="submit">LOGIN</button>
          </form>
        </main>
      </div>
    </>
  );
}

  // import { useForm } from "react-hook-form";
  // import { AuthContext } from '../contexts/AuthContext'
  // const { register, handleSubmit } = useForm();
  // const { signIn } = useContext(AuthContext)

  // async function handleSignIn(data) {
  //   await signIn(data)
  // }