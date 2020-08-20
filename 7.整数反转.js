/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // let flag = 1
    // if(x < 0) flag = -1 
    // let result = Math.abs(x).toString().split('').reverse().join('')
    // if(flag < 0) return result <= Math.pow(2,31)?Number(-result):0
    // else return result < Math.pow(2,31)?Number(result):0
    let now = Math.abs(x).toString().split('').reverse().join('')
    if(x < 0) return now <= Math.pow(2,31) ? -now : 0
    else return now < Math.pow(2,31) ? now : 0
};
// @lc code=end

