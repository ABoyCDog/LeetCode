/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start

/**
 * 
 * Companies
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

 * 示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let len = nums.length
//     let result
//     for(let i = 0; i < len-1; i++) {
//         for(let j = len-1; j > i; j--) {
//             if(nums[i] + nums[j] === target) {
//                 result = [i, j]
//             }
//         }
//     }
//     return result
// };

// Hash
// 解题思路：
// 1、用hashMap存一下遍历过的元素和对应的索引；
// 2、每访问一个元素，查看一下hashMap中是否存在满足要求的目标数字
const twoSum = function(nums, target) {
    const hashMap = {} // 存放出现过的数字，和对应索引
    for(let i = 0; i < nums.length; i++) {
        const curNum = nums[i] // 当前元素
        const targetNum = target - curNum  // 满足题目要求的目标元素
        const targetNumIndex = hashMap[targetNum]  // 在hashMap中找目标元素的索引
        if(targetNumIndex !== undefined) {  // 如果存在，直接返回 [目标元素索引， 当前索引]
            return [targetNumIndex, i]
        }
        // 如果不存在，说明之前没出现过目标元素
        hashMap[curNum] = i  // 每次都存入当前元素和对应的索引
    }
}
// @lc code=end

