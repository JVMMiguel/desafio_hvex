import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../images/logo.svg";
import styles from "./styles.module.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function validatePassword(event) {
    if (password != confirmPassword) {
      event.preventDefault();
      setError("Senhas não conferem");
      return false;
    } else {
      setSuccess("Usuário logado com sucesso");
    }
  }

  return (
    <>
      <Head>
        <title>Desafio - HVEX</title>
      </Head>
      <div className={styles.wallpaper}>
        <main className={styles.register}>
          <section>
            <Image src={Logo} alt="HVEX Logo" />
          </section>
          <form
            className={styles.registerForm}
            onSubmit={(event) => validatePassword(event)}
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
            <input
              onChange={(event) => setConfirmPassword(event.target.value)}
              type="password"
              placeholder="Confirme a senha"
              required
            />
            {error ? (
              <div className={styles.error}>
                <p>{error}</p>
              </div>
            ) : (
              <div className={styles.success}>
                <p>{success}</p>
              </div>
            )}
            <button type="submit">CADASTRAR</button>
            <div className={styles.loginLink}>
              <Link href="/">Voltar à pagina de Login</Link>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
