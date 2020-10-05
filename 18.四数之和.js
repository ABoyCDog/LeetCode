/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 * 
 *  给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

    注意：

    答案中不可以包含重复的四元组。

    示例：

    给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

    满足要求的四元组集合为：
    [
      [-1,  0, 0, 1],
      [-2, -1, 1, 2],
      [-2,  0, 0, 2]
    ]
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let result = [];
  let path=[];
  nums.sort((a, b) => a - b)
  function backtrace(start) {
      if(path.length === 4) {
          if(path[0]+path[1]+path[2]+path[3] === target) {
              result.push([...path])
          }
          return
      }
      let r // 解决同一深度的 重复问题
      for(let i = start; i < nums.length; i++) {
          if(r === nums[i]) continue
          r = nums[i]
          path.push(nums[i])
          backtrace(i + 1)
          path.pop()
      }
  }
  backtrace( 0)
  return result;
};
// @lc code=end

