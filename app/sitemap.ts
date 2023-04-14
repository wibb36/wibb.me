import { allBlogs } from 'contentlayer/generated'

export default async function sitemap() {
    const routes = [
        '',
        '/dev',
        '/projects',
        '/projects/unirepo',
        '/writing',
    ].map((route) => ({
        url: `https://wibb.me${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    const posts = allBlogs.map((post) => ({
        url: `https://wibb.me/writing/${post.slug}`,
        lastModified: post.publishedAt,
    }))

    return [...routes, ...posts]
}
