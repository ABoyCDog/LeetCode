/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 使用回溯
// 1、字符任取一个位置左侧必  左括号>=右括号
// 2、某一次递归结束需要将当前字符串存入数组
// 3、每次递归除了需要传当前字符，还需要记住当前左右括号数
var generateParenthesis = function(n) {
    const res = []

    function dfs(curStr, left, right) {
        if(curStr.length === 2*n) {        // 结束递归条件 当前字符串长度等于总括号数
            res.push(curStr)               // 存字符串 推入结果数组
            return      
        }
        if(left < n) {                  // 左括号
            dfs(curStr+'(', left+1, right) // 添加左括号 推入递归
        }
        if(right < left) {              // 当前位置，右括号数必小于左括号数才可添加右括号
            dfs(curStr+')', left, right+1) // 添加右括号 推入递归
        }
    }
    dfs('', 0, 0)
    return res
};
// @lc code=end

