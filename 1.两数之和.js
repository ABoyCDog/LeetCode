/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    let result
    for(let i = 0; i < len-1; i++) {
        for(let j = len-1; j > i; j--) {
            if(nums[i] + nums[j] === target) {
                result = [i, j]
            }
        }
    }
    return result
};
// @lc code=end

