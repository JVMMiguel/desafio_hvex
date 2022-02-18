import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import Logo from "../../../public/images/logo_header.svg";
import styles from "./styles.module.scss";

export function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("userLoggedIn");
    if (!username) {
      Router.push("/");
    }
    setUser(username);
  }, []);

  function redirect() {
    localStorage.setItem("userLoggedIn", "");
    window.location.replace("/");
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="HVEX Logo" />
        <nav>
          <a className={styles.active}>{`${user}`}</a>
          <button onClick={redirect}>Sair</button>
        </nav>
      </div>
    </header>
  );
}
