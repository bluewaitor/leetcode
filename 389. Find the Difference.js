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