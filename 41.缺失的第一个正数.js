/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let result = 1
    let sortNums = nums.filter(x=>x>0)
    while(sortNums.indexOf(result) > -1) {
        result ++
    }
    return result
};
// @lc code=end

