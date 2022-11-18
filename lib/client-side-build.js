/**
 * If you do not need to pre-render the data,you can also use the following
 * strategy (called Client-side Rendering):
 * - Statically generate (pre-render) parts of the page that do not require
 *   external data.
 * - When the page loads, fetch external data from the client using JavaScript
 *   and populate the remaining parts.
 * 
 * To do that, Next.js is using a React hook for data fetching called `SWR`.
 * If you are fetching data on the client side, it handles caching, revalidation,
 * focus tracking, refetching on interval, and more. Example usage as follows:
 */
import useSWR from 'swr';

function Profile() {
    const { data, error } = useSWR('/api/user', fetch);

    if (error) {
        return <div>failed to load</div>
    }
    if (!data) {
        return <div>loading...</div>
    }
    return <div>hello {data.name}!</div>
}

/**
 * Check out more here: https://swr.vercel.app/
 */