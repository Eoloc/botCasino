const fs = require('fs')

let de = require('./de.json');

module.exports = {
    get: function () {
        return de;
    },
    getAsync: function (cb) {
        fs.readFile('commands/casino/de.json', (err, r) => {  
            if (err) cb(err);
            cb(null, JSON.parse(r));
        });
    },
    set: function (n, cb) {
        de = n;
        fs.writeFile('commands/casino/de.json', JSON.stringify(n), (err) => {  
            if (err) cb(err);
            cb(null);
        });
    }
}