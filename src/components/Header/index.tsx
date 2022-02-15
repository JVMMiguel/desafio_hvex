import Image from 'next/image'
import styles from './styles.module.scss'

import Logo from '../../../public/images/logo_header.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <Image
        src={Logo}
        alt= "HVEX Logo"
      />
        <nav>
          <a className={styles.active}>João Vittor</a>
          <button>Sair</button>
        </nav>
      </div>
    </header>
  )
}