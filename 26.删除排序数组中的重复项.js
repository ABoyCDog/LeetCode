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
// 双指针替换
// 思路：同样也是尾指针向后寻找，首尾相同则删除尾所指的元素，同时将尾指针-1，
//       因为删除后元素会往前移动一位，所以尾指针减一就是下一元素;不相等则把头指针前移一位，循环结束条件就是尾指针到头
// var removeDuplicates = function(nums) {
//   let head = 0
//   let tail = 0
//   while(tail < nums.length) {
//     tail++
//     if (nums[head] === nums[tail]) {
//       nums.splice(tail, 1)
//       tail--
//     } else head++
//   }
//   return nums.length
// };
// 指针替换法
// 思路:因为是排序数组，可将互不相等的数值向前替换，如[0,1,1,2]，就可以把2换到前面[0,1,2,1]
var removeDuplicates = function(nums) {
  const len = nums.length
  if (len <= 1) return len
  // 快慢指针 前后对比
  let i = 0 // 慢指针
  for (let j = 1; j < len; j++) {
      if (nums[j] !== nums[i]) {
          // 拷贝替换
          nums[++i] = nums[j]
      }
  }
  return i + 1
};
// @lc code=end

