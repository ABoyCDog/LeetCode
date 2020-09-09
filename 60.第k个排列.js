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
// 运行全部用例会超时
// var getPermutation = function(n, k) {
//     let res = []
//     let curr = []
//     const nums = Array.from(Array(n), (i,j)=>j+1)

//     dfs(nums, n, k, curr, res)
//     return res[k-1].join('')
// };
// function dfs(nums, n, targetk, curr, res) {
//     if(curr.length === n) {
//         res.push(curr)
//         return
//     }
//     for(let i = 0; i < n; i++) {
//         if(!curr.includes(nums[i])) {
//             curr.push(nums[i])
//             dfs(nums, n, targetk, curr.slice(), res)
//             curr.pop()
//         }
//     }
// }

// try again
var getPermutation = function(n, k) {
    let res = [0, undefined]
    let curr = []
    const nums = Array.from(Array(n), (i,j)=>j+1)

    dfs(nums, k, curr, res)
    return res[1].join('')
};
function dfs(nums, targetk, curr, res) {
    if(curr.length === nums.length) {
        if(++res[0] === targetk) {
            res[1] = curr.slice()
        }
        return
    }
    for(let i = 0; i < nums.length; i++) {
        if(!curr.includes(nums[i])) {
            curr.push(nums[i])
            dfs(nums, targetk, curr.slice(), res)
            curr.pop()
        }
    }
}

// @lc code=end

