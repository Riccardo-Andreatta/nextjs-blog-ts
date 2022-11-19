import Head from 'next/head';
import Header from './Header';
import BackButton from './BackButton';
import styles from './layout.module.css';

const name = 'Riccardo';
const buttonText = '← Back to home';
export const siteTitle = 'Riccardo\'s blog on Next.js';

export default function Layout({
    children,
    home
}: {
    children: React.ReactNode
    home?: boolean
}) {
    return (
        <main className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Header page={home} pageTitle={name} />

            <BackButton link={home} text={buttonText} />

            {children}

            <BackButton link={home} text={buttonText} />
        </main>
    );
}
