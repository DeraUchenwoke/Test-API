// Acquires cheerio and axios dependencies from package.json.
// Const ensures it cannot be edited within the same block.
const cheerio = require('cheerio');
const axios = require('axios'); 

// Gets site URL and raw html data in json format.

async function checkGet() {
    try{
        axios.get('https://www.asos.com/women/ctas/generic-promos/promotion-4/cat/?cid=28025&ctaref=globalbanner|ww|50offsummerstock').then(urlResponse => {
            console.log(urlResponse.data); 

        });
    } catch (err) {
        
        console.log(err); 
    }
};

checkGet(); 