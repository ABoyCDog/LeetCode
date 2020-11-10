/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 思路：动态规划dp二维数组
// 设立一个长度len为字符串长度，用dp[len][len]二维数组来表示字符串i-j下标所构成的子串的
var longestPalindrome = function(s) {
  const len = s.length

  let dp = new Array(len)
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      // 当前子串
      let str = s.slice(i, j)
      // 判断是否回文
      if (str.split('').reverse().join('') === str) return '是回文'
    }
  }
};
// @lc code=end

