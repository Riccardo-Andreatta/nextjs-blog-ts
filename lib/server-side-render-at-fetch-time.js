/**
 * `getServerSideProps` is called at request time, its parameter (context)
 * contains request specific parameters.
 * You should use `getServerSideProps` only if you need to pre-render a page
 * whose data must be fetched at request time.
 * Time to first byte (TTFB) will be slower than `getStaticProps` because the
 * server must compute the result on every request, and the result cannot be
 * cached by a CDN without extra configuration.
 * 
 * @param {*} context 
 * @returns props
 */

export async function getServerSideProps(context) {
    return {
        props: {
            // props for your component
        }
    }
}
