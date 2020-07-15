const MessageMixer = {
    countCharacter: function (inputString, inputCharacter) {
        let count = 0;
        let string = inputString.toLowerCase();
        let character = inputCharacter.toLowerCase();
          for (let i = 0; i < string.length; i++) {
            if (string[i] === character) {
               count++;
            }
          }
        return count; 
      },
      capitalizeFirstCharacterOfWords: function (string) {
        let arr = string.split(" ");  
          for (let i = 0; i < arr.length; i++) {  
            let word = arr[i];
              arr[i] = word[0].toUpperCase() + word.substring(1); 
          }
        return arr.join(" "); 
      },
    reverseWord: function (word) {
        return word.split("").reverse().join("");
      }, 
    reverseAllWords: function (sentence) {
        let words = sentence.split(" ");
          for (let i = 0; i < words.length; i++) {
            words[i] = MessageMixer.reverseWord(words[i]);
          }
         return words.join(" ");
      },
    replaceFirstOccurence: function (string, toBeReplaced, replaceWith) {
        return string.replace(toBeReplaced, replaceWith);
      },
    replaceAllOccurrences:  function (string, toBeReplaced, replaceWith) {
        return string.split(toBeReplaced).join(replaceWith);
      },
    encode: function (string) {
        let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
          for (let key in replacementObject) {
            string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]); 
          }	
          return string;
      },
    palindrome: function (str) {
        return str + " " + MessageMixer.reverseWord(str);
    },
    pigLatin: function(sentence, character) {
        return sentence.split(' ').join(character+' ');
    }
};

module.exports = MessageMixer;
// export default MessageMixer;


//pre-written from codecademy, need to convert all functions to object properties
function countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
  };
  
  function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");  
      for (let i = 0; i < arr.length; i++) {  
        let word = arr[i];
          arr[i] = word[0].toUpperCase() + word.substring(1); 
      }
    return arr.join(" "); 
  };
  
  
  function reverseWord(word) {
    return word.split("").reverse().join("");
  };
  
  function reverseAllWords(sentence) {
    let words = sentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
      }
     return words.join(" ");
  };
  
  
  function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  };
  
  
  function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  };
  
  function encode(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  };
  // exporting by variable name, no object reference needed.
//  export {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode}; 
  