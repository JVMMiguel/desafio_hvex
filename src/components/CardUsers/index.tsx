import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface CardProps {
  userURL: string;
}

interface githubData {
  login?: string;
  avatar_url?: string;
  public_repos?: number;
  email?: string;
  location?: string;
  bio?: string;
  html_url?: string;
  error?: string;
  id?: number | string;
}

export default function CardUsers({ userURL }: CardProps) {
  const [user, setUser] = useState<githubData>({});

  useEffect(() => {
    axios.get(userURL).then(({ data }) => setUser(data));
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={user.avatar_url} alt="User avatar" />
        <div className={styles.info}>
          <div className={styles.infoUser}>
            <p>
              <span>{user.login}</span>
            </p>
            <p>
              <span>{`${user.public_repos} Repo. Públicos`}</span>
            </p>
          </div>
          <p>{user.email || "Não informado"}</p>
          <p>De: {user.location || "Não informado"}</p>
          <p>Bio: {user.bio || "Não informado"}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Acessar perfil
          </a>
        </div>
      </div>
    </div>
  );
}
