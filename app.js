const config = require('./config');
const utility = require('./utility-functions');

// # Setup Express
const express = require('express')
const app = express();

// # Set Express view-engine to utilize EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const templateVars = {};
    generateMuchWow(10)
    .then((strings) => {
        templateVars.strings = strings;
        console.log(templateVars.strings);
        res.render('main', templateVars);
    });
});

app.listen(8080, () => {
    console.log('MuchWow now listening on port ' + 8080 + '!')
  });

const generateMuchWow = (num) => {
    return new Promise((resolve, reject) => {
        let strings = [];
        for(let i = 0; i < num; i++) {  
            strings.push(utility.randomItem(config.pronouns) + " " + utility.randomItem(config.nouns) + "!");
        }  
        
        resolve(strings);
    });
}