/**
 * 
    Given two strings s and t which consist of only lowercase letters.

    String t is generated by random shuffling string s and then add one more letter at a random position.

    Find the letter that was added in t.

    Example:

    Input:
    s = "abcd"
    t = "abcde"

    Output:
    e

    Explanation:
    'e' is the letter that was added.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var res = t.charCodeAt(t.length - 1);
    for(var i = 0; i < s.length; i++) {
        res = res ^ s.charCodeAt(i) ^ t.charCodeAt(i);
    }
    return String.fromCharCode(res);
};

console.log(findTheDifference('a', 'aa'))