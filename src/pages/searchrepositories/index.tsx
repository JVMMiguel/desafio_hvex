import axios from 'axios'
import { FormEvent, useState } from 'react'
import CardUsers from '../../components/CardUsers'
import { Header } from '../../components/Header'
import Loading from '../../components/Loading'
import styles from './styles.module.scss'

export default function SearchRepositories() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const handleUser = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await axios
      .get(`https://api.github.com/search/users?q=${input}`)
      .then(({ data }) => setData(data.items))
    setLoading(false)
  }

  return(
    <>
      <Header/>
        <main className={styles['home-main']}>
          <form onSubmit={handleUser} className={styles['home-search']}>
            <input 
              type="text" 
              onChange={e => setInput(e.target.value)} 
            />
            <button 
              type='submit'
            > Buscar
            </button>
          </form>
          <section>
            {
              loading === true ?
                <Loading /> :
              <>
                {data.map((user) => (
                  <CardUsers key={user.id} userURL={user.url} />
                ))}
              </>
            }
          </section>
        </main>
    </>
  )
}