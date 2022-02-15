import Head from 'next/head'
import styles from './home.module.scss'
import Image from 'next/image'
import Logo from '../images/logo.svg'

import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Desafio - HVEX</title>
      </Head>
      <div className={styles.wallpaper}>
        <main className={styles.login}>
          <section>
            <Image
              src={Logo}
              alt= "HVEX Logo"
            />
          </section>
          <form className={styles.loginForm} onSubmit={handleSubmit(handleSignIn)}>
            <label>E-mail</label>
            <input
              {...register('email')}
              type="email"
              placeholder='E-mail'
              required
            />

            <label>Senha</label>
            <input
            {...register('password')}
              type="password"
              placeholder='Senha'
              required
            />
            <button type='submit'>LOGIN</button>
          </form>
        </main>
      </div>
    </>
  )
}
