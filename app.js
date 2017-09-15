const config = require('./config');

// # Setup Express
const express = require('express')
const app = express();

// # Set Express view-engine to utilize EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    generateMuchWow(10)
    .then((strings) => {
        string.forEach((str) => {
            console.log(str);
        });
    });
});

app.listen(8080, () => {
    console.log('MuchWow now listening on port ' + 8080 + '!')
  });

const generateMuchWow = (num) => {
    return new Promise((resolve, reject) => {
        let strings = [];
        for(let i = 0; i < num; i++) {  
            let pronoun = Math.floor(Math.random() * config.pronouns.length());
            let noun = Math.floor(Math.random() * config.nouns.length());
            strings.push(config.pronouns[pronoun] + " " + config.nouns[noun] + "!");
        }  
        
        resolve(strings);
    }
}