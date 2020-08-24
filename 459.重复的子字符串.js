/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 掐头去尾，如果是重复子串组成，s+s 必然包含 s
    return (s+s).slice(1, -1).includes(s)
    // let len = s.length
    // 奇数  必须全部一致才为true
    // if(len % 2 === 1) 
};
// @lc code=end

