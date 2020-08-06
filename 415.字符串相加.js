/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = ''
    let i = num1.length - 1
    let j = num2.length - 1
    let sum = 0
    let flag = 0
    while(i >= 0 || j >= 0 || flag){
      let n1 = +num1[i--] || 0
      let n2 = +num2[j--] || 0
      sum = n1 + n2 + flag
      if(sum >= 10){
        flag = 1
        sum = sum - 10
      } else {
        flag = 0
      }
      res = sum + '' + res
    }
    return res
};
// @lc code=end

