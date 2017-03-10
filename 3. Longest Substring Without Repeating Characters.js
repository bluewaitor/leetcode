/**
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var maxLen = 0;
    var i = 0;
    var substr = '';
    while(i < len){
        var c = s.charAt(i);
        if(substr.indexOf(c) === -1){
            substr += c;
            maxLen = Math.max(maxLen, substr.length);
            i++;
        }else{
            substr = '';
            s = s.substring(s.indexOf(c) + 1);
            len = s.length;
            i = 0;
        }
    }
    return maxLen;
};



console.log(lengthOfLongestSubstring('aab'));