/**
 You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var nowList = resList = new ListNode(-1);
    var lastNum = 0;
    var nums = [];
    var handleNum = function (num) {
        return [num % 10, Math.floor(num/10)];
    };
    while (l1 || l2 || lastNum){
        nums = handleNum((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + lastNum);
        nowList = nowList.next = new ListNode(nums[0]);
        lastNum = nums[1];
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    return resList.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);


console.log(addTwoNumbers(l1, l2));

