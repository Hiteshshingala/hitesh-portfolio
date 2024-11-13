const fs = require('fs');
const path = require('path');

function generateSitemap() {
    const urls = [
        { loc: 'https://hiteshshingala.github.io/portfolio/', priority: '1.0' },
        { loc: 'https://hiteshshingala.github.io/portfolio/#about', priority: '0.8' },
        { loc: 'https://hiteshshingala.github.io/portfolio/#services', priority: '0.8' },
        { loc: 'https://hiteshshingala.github.io/portfolio/#resume', priority: '0.8' },
        { loc: 'https://hiteshshingala.github.io/portfolio/#portfolio', priority: '0.8' },
        { loc: 'https://hiteshshingala.github.io/portfolio/#blog', priority: '0.8' },
        { loc: 'https://hiteshshingala.github.io/portfolio/#contact', priority: '0.8' }
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
    <url>
        <loc>${url.loc}</loc>
        <priority>${url.priority}</priority>
    </url>`).join('')}
</urlset>`;

    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
    console.log('sitemap.xml has been generated!');
}

generateSitemap();