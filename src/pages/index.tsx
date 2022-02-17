import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Logo from "../images/logo.svg";
import { server } from "../services/server";
import styles from "./home.module.scss";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function searchAllUsers() {
    try {
      const { data } = await server.get("users");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const allUsers = await searchAllUsers();
    const userExists = allUsers.some(
      (user) => user.email === email && user.password === password
    );
    if (userExists) {
      Router.push("/searchrepositories");
    } else {
      setError("Email ou senha incorretos!");
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
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="E-mail"
              required
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Senha"
              required
            />
            <div className={styles.error}>
              <p>{error}</p>
            </div>
            <button type="submit">LOGIN</button>
            <div className={styles.registerLink}>
              <Link href="/register">Registre-se</Link>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
