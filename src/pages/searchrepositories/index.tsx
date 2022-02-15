import axios from 'axios'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { FormEvent, useContext, useState } from 'react'
import CardUsers from '../../components/CardUsers'
import { Header } from '../../components/Header'
import Loading from '../../components/Loading'
import { AuthContext } from '../../contexts/AuthContext'
import { getAPIClient } from '../../services/axios'
import styles from './styles.module.scss'

interface githubData {
  login?: string;
  avatar_url?: string;
  repos_url?: string;
  email?: string;
  location?: string;
  bio?: string;
  html_url?: string;
  error?: string;
  id?: number | string;
}

export default function SearchRepositories() {
  // const { user } = useContext(AuthContext)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<githubData[]>([])

  const handleUser = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await axios
    .get(`https://api.github.com/search/users?q=${input}`)
    .then(response => setUsers(response.data.items))
    setLoading(false)
  }

  return(
    <>
      <Header/>
      <main className={styles['home-main']}>
        <form onSubmit={handleUser}>
          <input type="text" onChange={e => setInput(e.target.value)} />
          <button type='submit'>Buscar</button>
        </form>
        <section>
          {users.map((user) => (
            user ? 
              <CardUsers key={user.id}>
                <img src={user.avatar_url} alt="User avatar" />
                <p><span>Nome:</span> {user.login}</p>
                <p><span>Repositórios:</span> {`${user.repos_url} Repos públicos`}</p>
                <p><span>Localidade:</span> {user.location || 'Não informado'}</p>
                <p><span>Bio:</span> {user.bio}</p>
                <p><span>Perfil:</span> {user.html_url}</p>
              </CardUsers>
              : 
              <div>
                {
                  loading ? 
                    <Loading />
                  : ''
                }
              </div>
            ))}
        </section>
      </main>
    </>
  )
}

// {users.map(user => (
//   <div key={user.login}>
//     <p>{user.login}</p>
//     <img src={user.avatar_url} alt="user" />
//   </div>
// ))}
// <Loading />
// <CardUsers key={ users.id }>
//   <p><span>Teste: </span> {users.bio}</p>
// </CardUsers>

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const apiClient = getAPIClient(context)
//   const { ['hvex.token']: token } = parseCookies(context)

//   if (!token){
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       }
//     }
//   }

//   await apiClient.get('/users')

//   return {
//     props: {}
//   }
// }