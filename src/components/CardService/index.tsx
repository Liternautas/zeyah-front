import Image from 'next/image';
import styles from './styles.module.scss';

export function CardService({ title, description, icon }) {
    return (
        <div className={styles.card}>
            <div>
                <Image src={icon} alt='' />
                <h4><span>__</span> {title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}