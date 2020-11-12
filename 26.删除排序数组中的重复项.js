/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = nums.length
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len - 1; j++) {
      if (nums[j] === nums[i]) nums.splice(j, j)
    }
  }
  return nums.length
};
// @lc code=end

