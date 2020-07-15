
const MessageMixer = require('./messageMixer.js'); //functions have to be declared as properties of MessageMixer Object.
// import MessageMixer from ('./messageMixer');//functions have to be declared as properties of MessageMixer Object.
// import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode} from './messageMixer.js'

function displayMessage() {
    console.log(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(MessageMixer.reverseWord("What is the color of the sky?"));
    console.log(MessageMixer.reverseAllWords("What is the color of the sky?"));
    console.log(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(MessageMixer.encode("What is the color of the sky?"));
    console.log(MessageMixer.palindrome("What is the color of the sky?"));
    console.log(MessageMixer.pigLatin("What is the color of the sky?", '|'));
    // console.log(countCharacter("What is the color of the sky?", "t"));
    // console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    // console.log(reverseWord("What is the color of the sky?"));
    // console.log(reverseAllWords("What is the color of the sky?"));
    // console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    // console.log(encode("What is the color of the sky?"));
    // console.log(palindrome("What is the color of the sky?"));
    // console.log(pigLatin("What is the color of the sky?", '|'));
  }
  
  displayMessage();
  // (node:15612) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
//! seems like only require works