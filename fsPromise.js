const fs = require('fs/promises');

async function example() {
    const fileName = 'sample.txt';
    try {
        const data = await fs.readFile(fileName, 'utf8');
        console.log(data);
        const content = 'Some content!';
        await fs.writeFile(fileName, content); // Existing data is overwritten
        console.log('Wrote some content!');
        const newData = await fs.readFile(fileName, 'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}

example();
