import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
            </Head>

            <section className={utilStyles.pagePadding}>
                <p>
                    Welcome to this blog.<br />
                    I am Riccardo, I am passionate about Front End stuff.
                    In this case I am building a <em>Next.js</em> blog application.
                </p>
            </section>
        </Layout>
    );
}

// export const getStaticPaths: GetStaticPaths = () => {
//     return {
//         paths: ['about-me'],
//         fallback: 'blocking'
//     };
// }

// export const getStaticProps: GetStaticProps = ({ paths }) => {
//     return {
//         props: {
//             paths
//         },
//         revalidate: 86400
//     };
// }
