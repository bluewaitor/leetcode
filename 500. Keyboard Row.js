/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(function(v, i){
        return !(!/^[qwertyuiop]*$/i.test(v) && !/^[asdfghjkl]*$/i.test(v) && !/^[zxcvbnm]*$/i.test(v));
    });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));