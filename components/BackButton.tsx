import Link from 'next/link';
import styles from './back-button.module.css';

const BackButton = ({ link, text }: { link?: boolean, text: string }): JSX.Element => {
    return (
        <>
            {!link && (
                <div className={styles.backButton}>
                    <Link href="/">
                        <a>{text}</a>
                    </Link>
                </div>
            )}
        </>
    );
}

export default BackButton;
