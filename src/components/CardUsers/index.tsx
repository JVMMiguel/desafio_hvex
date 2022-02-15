import { ReactNode } from "react";
import styles from './styles.module.scss'

interface CardProps {
    children: ReactNode
}

export default function CardUsers ({ children }: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}