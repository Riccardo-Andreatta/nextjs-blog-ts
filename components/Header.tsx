import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';
import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';

const Header = ({ page, pageTitle }: { page?: boolean, pageTitle: string }): JSX.Element => {
    return (
        <header className={styles.header}>
            {page ? (
                <>
                    <Image
                        priority
                        src="/images/Riccardo.jpg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt={pageTitle}
                    />
                    <h1 className={utilStyles.heading2Xl}>{pageTitle}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/Riccardo.jpg"
                                className={utilStyles.borderCircle}
                                height={96}
                                width={96}
                                alt={pageTitle}
                            />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{pageTitle}</a>
                        </Link>
                    </h2>
                </>
            )}

            <Navigation />
        </header>
    );
}

export default Header;
