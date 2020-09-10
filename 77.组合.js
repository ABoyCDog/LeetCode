/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 普通写法
var combine = function(n, k) {
    const res = []
    backtrack(n, k, res, 1, [])
    return res
};
function backtrack(n, k, res, pr, temp) {
    if(temp.length === k) {          // 合法答案推入结果数组
        res.push([...temp])
        return
    }
    for(let i = pr; i <= n; i++) {   // 枚举所有选择
        temp.push(i)
        backtrack(n, k, res, i+1, temp)
        temp.pop()
    }
}
// 回溯加剪枝
// function backtrack(n,k,res,pr,temp) {
//     // 剪枝: temp的长度 + [pr, n]的长度 < k,  就不可能构造k长度的temp
//     if(temp.length + (n - pr + 1) < k) {
//         return
//     }
//     // 合法答案推入结果数组
//     if(temp.length === k) {
//         res.push(temp)
//         return
//     }
//     // 考虑选择当前位置
//     backtrack(n, k, res, pr+1, [...temp, pr])
//     // 不选择当前位置
//     backtrack(n, k, res, pr+1, temp)
// }

// @lc code=end

