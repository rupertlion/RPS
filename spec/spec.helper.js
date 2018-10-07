const  fs = require('fs');
const  chai = require('chai');
const sinon = require('sinon');
global.expect = chai.expect;

let  rps = fs.readFileSync('./src/js/rps.js');
eval( rps + `\nexports.Rps = Rps;`)

let  randomise = fs.readFileSync('./src/js/rps.js');
eval( randomise + `\nexports.Randomise = Randomise;`)