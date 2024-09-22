const fs = require('fs');

fs.rename('test.txt', 'sample.txt', err => {
    if (err) {
        return console.error(err);
    }
});