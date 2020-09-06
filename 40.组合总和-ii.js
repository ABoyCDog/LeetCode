/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 第一版 基于39题的基础上 做了结果去重、dfs递归时不会讲i再一次放入而是i+1
var combinationSum2 = function(candidates, target) {
    const res = []
    const n = candidates.length
    candidates.sort()

    function dfs(arr, start) {
        let sum = 0
        if(arr.length !== 0) {
            sum = arr.reduce((a,b) => a+b)
        }
        if(sum > target) return
        if(sum === target) {
            let flag = true
            for(let item of res) {
                if(arr.toString() === item.toString()) {
                    flag = false
                }
            }
            if(flag) res.push(arr)
            return
        }
        for(let i = start; i < n; i++) {
            arr.push(candidates[i])
            dfs(arr.slice(), i+1)
            arr.pop()
        }
    }
    dfs([], 0)
    return res
};
// 第二版


// @lc code=end

