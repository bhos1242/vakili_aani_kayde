/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.vakilianikayde.in',
    generateRobotsTxt: true, // (optional)
    exclude: ['/auth/*', '/dashboard/*', '/api/*'],
    // ...other options
}
