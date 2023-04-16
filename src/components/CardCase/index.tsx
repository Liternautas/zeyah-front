import styles from './styles.module.scss';
import { FiArrowRight } from 'react-icons/fi';

export function CardCase({ title, description, link }) {
    return (
        <div className={styles.card}>
            <div>
                <h4><span>__</span> {title}</h4>
                <p>{description}</p>
            </div>
            <a href={link} target='_blank'>Visualizar projeto <FiArrowRight /></a>
        </div>
    )
}