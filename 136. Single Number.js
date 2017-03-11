/**
 * 
    Given an array of integers, every element appears twice except for one. Find that single one.

    Note:
    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //与或运算符的妙用(两个相同的数与或为0)
    return nums.reduce(function(acc, val){ return acc ^ val}, 0);
};

console.log(singleNumber([1,1,2,3,3]));