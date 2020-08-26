/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // 暴力回溯 创建映射表
    const map = {
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
    }
    const res = []
    if(digits.length === 0) return res

    const dfs = function(subRes, pr) {
        if(pr > digits.length-1) {          // 指针越界，递归出口
            res.push(subRes)                // 将当前结果推入结果数组
            return                          // 结束当前递归，进入下一个
        }
        const str = map[digits[pr]]         // 当前指针对应的数字是哪些字母
        for(const i of str) {               // 不同的字母选择代表不同的递归分支
            dfs(subRes+i, pr+1)             // 生成新的字符串，pr指针右移，递归
        }
    }

    dfs('', 0)
    return res
};
// @lc code=end

