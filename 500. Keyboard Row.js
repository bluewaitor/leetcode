/**
 * 
    Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

    American keyboard

    Example 1:
    Input: ["Hello", "Alaska", "Dad", "Peace"]
    Output: ["Alaska", "Dad"]
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(function(v, i){
        return !(!/^[qwertyuiop]*$/i.test(v) && !/^[asdfghjkl]*$/i.test(v) && !/^[zxcvbnm]*$/i.test(v));
        //如果使用或运算的话, 效率比较低, 是因为或如果一个为假, 则要继续后面的判断.
        //return /^[qwertyuiop]*$/i.test(v) || /^[asdfghjkl]*$/i.test(v) || /^[zxcvbnm]*$/i.test(v);
    });
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));