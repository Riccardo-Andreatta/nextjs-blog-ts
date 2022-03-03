import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * `getStaticProps` runs at build time in production, and inside the function,
 * you can fetch external data and send it as props to the page.
 * 
 * Essentially, it means that the page has some data dependencies. When Next
 * pre-render this page at build time, it makes sure to resolve them first.
 * 
 * @returns JSON
 */
export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

/**
 * API version of the above `getSortedPostsData()`
 * @returns JSON
 */
/*
export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..')
    return res.json()
}
*/

/**
 * Query database directly. Another version of the above `getSortedPostsData()`.
 * 
 * This is possible because getStaticProps only runs on the server-side.
 * It will never run on the client-side. It won’t even be included in the JS
 * bundle for the browser. That means you can write code such as direct database
 * queries without them being sent to browsers.
 * 
 * @returns database query results
 */
/*
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from a database
    return databaseClient.query('SELECT posts...')
}
*/
