// Acquires cheerio and axios dependencies from package.json.
// Const ensures it cannot be edited within the same block.
const cheerio = require('cheerio');
const axios = require('axios'); 

// Gets site URL and raw html data in json format.

async function checkGet() {
    try{
        axios.get('https://www.asos.com/women/ctas/generic-promos/promotion-4/cat/?cid=28025&ctaref=globalbanner|ww|50offsummerstock').then(urlResponse => {
            // Passes in the HTML document for the website.
            const $ = cheerio.load(urlResponse.data); 

            // Uses the selector 'article' to search the scope within in.
            // This gets the link to each item.
            $('article.KCXt8Eb').each((i, element) => {
                const link = $(element)
                .find('a.B36cezB')
                .attr('href'); 

              // Gets description of item.
                const description = $(element)
                .find('div.zrNElLX')
                .text(); 

                console.log(description); 
                console.log(link);
                console.log('\n');
            })
        });
    } catch (err) {
        
        console.log(err); 
    }
};

checkGet(); 