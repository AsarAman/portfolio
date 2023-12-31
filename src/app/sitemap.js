export default async function sitemap(){
    const routes = ['', '/about', '/contact', '/resume', '/portfolio'].map((route)=>({
        url:`http://localhost:3000${route}`,
        lastModified: new Date().toISOString()
    }))

    return [...routes]
}