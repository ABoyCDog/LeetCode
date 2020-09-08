/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const res = []
    const nums = Array.from(Array(n), (i,j)=>k)

    function dfs(arr) {
        if(arr.length === n) {
            res.push(arr)
            return
        }
        for(let i = 0; i < n; i++) {
            if(!arr.includes(nums[i])) {
                arr.push(nums[i])
                dfs(arr.slice())
                arr.pop()
            }
        }
    }
    dfs([])
    return res[k-1].join('')
};
// @lc code=end

