/**
 * 
    Given a binary array, find the maximum number of consecutive 1s in this array.

    Example 1:
    Input: [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s.
        The maximum number of consecutive 1s is 3.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var res = 0;
    var max = 0;
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            max += 1;
            if(res < max) {
                res = max;
            }
        }
        if (nums[i] === 0) {
            max = 0;
        }
    }
    return res;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));