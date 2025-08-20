const fs = require('fs');

const dataFromAJS = fs.readFileSync('worker.js');

const dt = dataFromAJS.toString();

eval(dt);
