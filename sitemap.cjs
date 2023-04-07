const fs = require('fs');
const tfilot = require('./src/db/data/tefilot.json');
const tunes = require('./src/db/data/tunes.json');

const staticPath = [
    "/",
    "/add-tune",
    "/contribute",
    "/about"
];

content = '<?xml version="1.0" encoding="UTF-8"?>';
content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

staticPath.forEach((path) => {
    content += '<url>';
    content += '<loc>https://tfilatunes.com' + path + '</loc>';
    content += '</url>';
});

tfilot.forEach((tfila) => {
    content += '<url>';
    content += '<loc>https://tfilatunes.com/tunes?text=' + tfila.key + '</loc>';
    content += '</url>';
});

tunes.forEach((tune) => {
    tune.subsections.forEach((subsection) => {
        content += '<url>';
        content += '<loc>https://tfilatunes.com/tunes/' + tune.id + '?subId=' + subsection?.id + '</loc>';
        content += '</url>';
    });
});

content += '</urlset>';

fs.writeFileSync('./public/sitemap.xml', content);
