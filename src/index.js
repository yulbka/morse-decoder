const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  
let codedLettersArray = [];
let codeObj = {'**********': ' '};


for (let i = 0; i < expr.length; i++) {
  if (i % 10 != 0) continue;
  codedLettersArray.push(expr.slice(i, i + 10));
}

for (let key in MORSE_TABLE) {
  let codedLetter = '';
  for (let i = 0; i < key.length; i++) {
    if (key[i] == '.') {
      codedLetter += 10;
    } 
    if (key[i] == '-') {
      codedLetter += 11;
    }
  }
    if (codedLetter.length < 10) {
      codedLetter = '0'.repeat(10 - codedLetter.length) + codedLetter;
    }
    codeObj[codedLetter] = MORSE_TABLE[key];
  }

  let decodedStr = '';

for (let i = 0; i < codedLettersArray.length; i++) {  
  decodedStr += codeObj[codedLettersArray[i]]; 
}

return decodedStr;
}

module.exports = {
    decode
}