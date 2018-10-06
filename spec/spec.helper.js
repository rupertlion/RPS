const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let  rps = fs.readFileSync('./src/js/rps.js');
let  randomise = fs.readFileSync('./src/js/rps.js');
eval( rps + `\nexports.Rps = Rps;`)
eval( randomise + `\nexports.Randomise = Randomise;`)