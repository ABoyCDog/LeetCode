/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 暴力法
// var isPalindrome = function(s) {
//     let i = 0
//     let j = s.length - 1
//     while(i < j) {
//         if(s[i] !== s[j]) return false
//         i++
//         j--
//     }
//     return true
// }
// var countSubstrings = function(s) {
//     let result = 0
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i; j < s.length; j++) {
//             if(isPalindrome(s.substring(i, j+1))) {
//                 result++
//             }
//         }
//     }
//     return result
// };

// 动态规划
// 定义好数组dp[i][j],表示以i为中心位置 且长度为j 的字符串 是否是回文串
// 那么该数组满足以下递推关系:
// 1，dp[i][1] = true;
// 2，dp[i][2] = s[i] == s[i+1] ;
// 3，dp[i][j] = dp[i][j-2] && s[i + Math.ceil((j-1)/2)] ==s [ i- Math.floor((j-1)/2)];

// 然后统计dp[i][j] 为真 的数量并返回即可。

var countSubstrings = function(s) {
    let result = 0
    let len = s.length
    let dp = Array.from(new Array(len),() => new Array(len).fill(false))

    // 外层循环是计算的字符串长度
    for(let i = 0; i < len; i++) {
        // 内层循环是开始位置
        for(let j = 0; j <= i; j++) {
            // 在首位相等时，如果长度是1(如a)或2(如aa),或去收尾字符串是回文
            if(s[i] === s[j] && (i - j < 2 || dp[j+1][i-1])) {
                dp[j][i] = true
                result++
            }
        }
    }
    return result
}
// @lc code=end

