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
// 忽略了限制条件：使用常数级别的空间，使用filter创建了额外的数组，所以不合适
// var firstMissingPositive = function(nums) {
//     let result = 1
//     // 过滤负数
//     let sortNums = nums.filter(x=>x>0)
//     // 对正数数组开始遍历，使用的indexOf()函数，如果不存在的数字则返回-1，所以从1开始找只要是-1则返回，否则result++继续遍历
//     while(sortNums.indexOf(result) > -1) {
//         result ++
//     }
//     return result
// };

// 所以应该使用原地hash，
// 原地哈希算法主要应用在范围为 [0, len(nums)] 的数组解法中，将数组元素本身作为nums 的下标，即 nums[nums[i]]
// 也就是将数组元素本身作为数组下标的方法，即nums[nums[i]]
var firstMissingPositive = function(nums) {
    let len = nums.length
    for(let i = 0; i < len; i++) {
        if(nums[i] <= 0) nums[i] = len + 1
    }
    for(let i = 0; i < len; i++) {
        let temp = Math.abs(nums[i])
        // 将
        if(temp <= len && nums[temp - 1]) nums[temp - 1] = -Math.abs(nums[temp - 1])
    }
    for(let i = 0; i < len; i++) {
        if(nums[i] > 0) return i + 1
    }
    return len + 1
};
// @lc code=end

