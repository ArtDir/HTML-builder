const path = require('path');
const fs = require('fs');

let filePath = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(filePath, 'utf-8');

readableStream.on('data', (chunk) => console.log(chunk));
readableStream.on('error', (error) => console.log(error));
