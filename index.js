export default (function () {

    let beststring = new Object()

    let root = (typeof window === "undefined") ? global : window;
  
    beststring.capitalize = function (givenString) {
        // let givenString = this;
        let firstChar = givenString.charAt(0);
        let upperFirst = firstChar.toUpperCase();
        let remaining = givenString.slice(1);
        let finalString = upperFirst + remaining;
        return finalString
      }
    
    beststring.toTitleCase = function (givenString) {
      
        let words = givenString.split(' ')
      
        for(let i = 0; i < words.length; i++){
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()  
        }
      
        let finalString = words.join(" ");
      
        return finalString;
      }

      beststring.shorten = function (givenString, limit, ending){
        let substring = givenString.substring(0, limit)
        console.log(substring + ending)
        return substring + ending
      }

      beststring.countWords = function (givenString){
        let words = givenString.split(" ");
        console.log("words", words.length);
        return words.length;
      }
  
      beststring.readTime = function (givenString){
        let words = givenString.countWords();
        let speed = Number(words/200);
        console.log(Math.ceil(speed));
        return Math.ceil(speed)
      }

      beststring.maskEmail = function(givenString){
      
        let split1 = givenString.split("@");
      
        let split2 = split1[1].split(".")
      
        let firstmask = split1[0].charAt(0) + "*".repeat(split1[0].length - 1)
      
        let secondmask = split2[0].charAt(0) + "*".repeat(split2[0].length - 1)
      
        let final = firstmask + "@" +secondmask +"."+split2[1]
        
        console.log(final)
      
        return final
      }

      root._ = beststring;
    
  })()

// console.log(root)