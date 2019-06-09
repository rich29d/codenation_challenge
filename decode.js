const sha1 = require('sha1');
const {
  cifrado,
  numero_casas,
} = require('./answer.json')

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const decode = (numberBlock, textCifrado) =>
  Array.from(textCifrado).reduce((accumulator, letter) => {
    const indexLetter = alphabet.indexOf(letter);
    
    if (indexLetter < 0)
      return accumulator + letter;

    return accumulator + alphabet.substr(indexLetter - numberBlock, 1);
  }, '')

const textDecoded = decode(numero_casas, cifrado);
console.log(`deceded: ${textDecoded}`);
console.log(`sha1: ${sha1(textDecoded)}`);