const request = require('request');
const cheerio = require('cheerio');
const link = 'https://codequiz.azurewebsites.net';

async function main() {
  const fundNavData = await new Promise((resolve) =>
    request.get(
      {
        url: link,
        headers: {
          Cookie: 'hasCookie=true',
        },
      },
      function (err, httpResponse, html) {
        const $ = cheerio.load(html);
        let fundNavs = {};
        $('body > table > tbody > tr').each((index, element) => {
          if (index === 0) return;
          const row = $(element).find('td');
          const name = $($(row)[0]).text().trim();
          const nav = parseFloat($($(row)[1]).text().trim());
          fundNavs = {
            ...fundNavs,
            [name]: nav,
          };
        });
        resolve(fundNavs);
      }
    )
  );

  console.log(fundNavData[process.argv[2]] || 'no data');
}

main();
