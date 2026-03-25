// common js
// const generateName = require('sillyname');

// ECMAScript
import generateName from 'sillyname';
import {randomSuperhero} from 'superheroes';

const sillyname = generateName();
const superhero = randomSuperhero();

console.log(`My name is ${sillyname}`);
console.log(`I am ${superhero}`);