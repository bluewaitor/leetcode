/**
 *  
    Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

    Example:
    For num = 5 you should return [0,1,1,2,1,2].

    Follow up:

    It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
    Space complexity should be O(n).
    Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var res = [0];
    for(var i = 1; i <= num; i++) {
        //分析可以发现, 每次要进位, 都是 i 的一半 + 1, 所以可以简化为 f[i] = f[i/2] + i % 2;
        res[i] = res[Math.floor(i/2)] + i % 2;
        //res.push(i.toString(2).split('').filter(function(v) {return v == '1'}).length);
    }
    return res;
};

console.log(countBits(20));