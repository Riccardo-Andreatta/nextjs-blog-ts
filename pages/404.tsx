import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>

            <h1>404 | Page Not Found</h1>

            <p>Go back to the <Link href="/">Homepage</Link></p>
        </Layout>
    );
}

export default Custom404;
