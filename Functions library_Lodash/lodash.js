const _ = {
    clamp(number, lower, upper) {
      
     let lowerClampedValue =  Math.max(number, lower);
     let ClampedValue = Math.min(lowerClampedValue, upper);
    return ClampedValue;
    },

    inRange(number, start, end) {
      if(end === undefined) {
        end = start;
        start = 0; 
      }
      if(start > end) {
       tempstart = start;
       tempend = end;
        start = tempend;
        end = tempstart;
      }
  
    if(start <= number && number < end) {
        return true;
      } else {
        return false;
      }
  
    },

    words(string) {
      return string.split(" ");
    },

    pad(string, length) {
      if(string.length >= length) {
        return string;
      } 
        let leftPad = Math.floor((length - string.length)/2);
        let rightPad = length - string.length - leftPad;
        let padStr = ' '.repeat(leftPad) + string + ' '.repeat(rightPad);
        return padStr;
      
    },

    invert(object) {
        let newObj = {};
        for (let key in object) {
          let originalValue = object[key];
          newObj[originalValue] = key;
       
        }
        return newObj;
    },

    findKey(object, func) {
        for(let key in object) {
          if(func(object[key])) {
            return key;
          } 
           return undefined;
        }
    },

    drop(array, drop) {
      if(!drop) {
        drop = 1;
      };
      let droppedArray = array.slice(drop);
      return droppedArray;
      },

      dropWhile(array, func) {
        const cb = (elem, index) => {
          return !func(elem, index, array)
        };
        let dropNumber = array.findIndex(cb);
        let droppedArr = this.drop(array, dropNumber);
        return droppedArr;
      },
      
      chunk(array, size) {
        if ( size === undefined) {
          size = 1;
        };
        let arrayChunks = [];
        for(let i = 0; i < array.length; i += size) {
          let arrayChunk = array.slice(i,(i+size));
          arrayChunks.push(arrayChunk);
        };
        return arrayChunks;
      },  
  };
  

  
