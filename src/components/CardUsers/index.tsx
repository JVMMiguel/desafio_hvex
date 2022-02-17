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
        <p>Usuário: {user.login}</p>
        <p>Email: {user.email || "Não informado"}</p>
        <p>Cidade: {user.location || "Não informado"}</p>
        <p>Bio: {user.bio || "Não informado"}</p>
        <p>Repo. Públicos: {user.public_repos || "Não informado"}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          Acessar perfil
        </a>
      </div>
    </div>
  );
}
