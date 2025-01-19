const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'output.txt');
const writeStream = fs.createWriteStream(filePath);

const consoleInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  'Приветствую, мой юный подаван! Мне пришли что-нибудь, буду в файл записывать я:',
);

consoleInterface.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    consoleInterface.close();
    return;
  }
  writeStream.write(input + '\n', (error) => {
    if (error) {
      console.error('Ошибка записи:', error.message);
    }
  });
});

consoleInterface.on('close', () => {
  writeStream.end();
  console.log('Да пребудет с тобой Сила!');
  process.exit();
});

process.on('SIGINT', () => {
  consoleInterface.close();
});
