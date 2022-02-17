import Image from "next/image";
import Logo from "../../../public/images/logo_header.svg";
import styles from "./styles.module.scss";

export function Header() {
  function redirect() {
    window.location.replace("/");
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="HVEX Logo" />
        <nav>
          <a className={styles.active}>João Vittor</a>
          <button onClick={redirect}>Sair</button>
        </nav>
      </div>
    </header>
  );
}
