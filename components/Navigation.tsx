import Link from "next/link";
import { useRouter } from 'next/router';
import styles from './navigation.module.css';

const navLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About me',
        path: '/about-me'
    },
    {
        name: 'Contact me',
        path: '/contact-me'
    }
];

export default function Navigation() {
    const router = useRouter();

    return (
        <nav className={styles.nav}>
            {navLinks.map((link, id) => {
                return (
                    <Link href={link.path} key={id}>
                        <a
                            className={
                                router.pathname === link.path ?
                                    `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            {link.name}
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
}
