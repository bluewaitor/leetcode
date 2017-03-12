/**
 * 
    Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

    Example:
    Given a = 1 and b = 2, return 3.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    //速度太慢
    //return b ? getSum(a ^ b, (a&b)<<1) : a;
    var res = 0;
    var carry = 0;
    while(b) {
        res = a ^ b;
        carry = (a & b) << 1;
        a = res;
        b = carry;
    }
    return res;
};

console.log(getSum(1, 2));