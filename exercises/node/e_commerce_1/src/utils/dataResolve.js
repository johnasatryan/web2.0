const fs = require('node:fs');
const path = require('node:path');

const writeData = (pathname, data) => {
  const dataPath = path.resolve(__dirname, '../../data', pathname + '.json');
  const result = readData(dataPath);
  result.push(data);
  fs.writeFileSync(dataPath, JSON.stringify(result, null, 2));
};

const readData = (pathname) => {
  if (!pathname.includes('.json')) {
    pathname += '.json';
  }
  const dataPath = path.resolve(__dirname, '../../data', pathname);
  if (fs.existsSync(dataPath)) {
    return JSON.parse(fs.readFileSync(dataPath));
  } else {
    fs.writeFileSync(dataPath, JSON.stringify([], null, 2));
    return [];
  }
};

module.exports = { writeData, readData };
