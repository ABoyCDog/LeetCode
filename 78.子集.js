/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start

/**
 * Companies
    给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

    说明：解集不能包含重复的子集。

    示例:

    输入: nums = [1,2,3]
    输出:
    [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
    ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 普通循环
// var subsets = function(nums) {
//     var res=[[]]
//     for(let i=0;i<nums.length;++i){
//         for(let j=0,len=res.length;j<len;++j){
//             res.push(res[j].concat(nums[i]))
//         }
//     }
//     return res;
// };

// 回溯
var subsets = function(nums) {
    const res = []
    backtrack(nums, res, 0, [])
    return res
};
function backtrack(nums, res, pr, temp) {
    res.push([...temp])
    if(temp.length >= nums.length) return
    for(let i = pr; i < nums.length; i++) {
        temp.push(nums[i])
        backtrack(nums, res, i+1, temp)
        temp.pop()
    }
};
// @lc code=end

