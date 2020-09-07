/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = []
    const n = nums.length
    let hash = {}
    nums.sort()

    function dfs(arr) {
        if(arr.length === n) {
            res.push(arr)
            return
        }
        for(let i = 0; i < n; i++) {
            if(hash[i] || (hash[i-1] && nums[i] === nums[i-1])) continue
            hash[i] = true
            arr.push(nums[i])
            dfs(arr.slice())
            hash[i] = false
            arr.pop()
        }
    }
    dfs([])
    return res
};
// @lc code=end

