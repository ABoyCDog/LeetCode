/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    candidates.sort()
    
    function dfs(arr, start) {
        let sum = 0
        if(arr.length !== 0) {
            sum = arr.reduce((a,b) => a+b)
        }
        if(sum > target) return
        if(sum === target) { // 如果和等于target 将当前解集arr推入结果数组
            res.push(arr)
            return
        }
        for(let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]) // 将字符推入解集
            dfs(arr.slice(), i)
            arr.pop()
        }
    }
    dfs([], 0)
    return res
};
// @lc code=end

