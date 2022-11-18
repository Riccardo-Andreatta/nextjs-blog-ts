import Head from 'next/head';
import Layout from '../components/layout';

function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>

            <h1>404 - Page Not Found</h1>
        </Layout>
    );
}

export default Custom404;
