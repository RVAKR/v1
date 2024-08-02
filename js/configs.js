const fs = require('fs');

const filePath = "./core/config.json";

function readJsonFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

const jsonData = readJsonFile(filePath);
console.log(jsonData.key); // Access the value using dot notation or bracket notation
