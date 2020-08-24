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
    // 解法一
    // 掐头去尾，如果是重复子串组成，s+s 必然包含 s
    // 举例:
    // s = abc|abc; // 2abc
    // s+s = abc|abc|abc|abc; // 4abc
    // s1 = a|bcabcabcab|c = bcabcabcab; // bc + 2*abc + ab
    // return (s+s).slice(1, -1).includes(s)

    // 解法二 暴力
    let len = s.length
    for(let i = 0; i < (len-1)/2; i++) {
        let str = s.slice(0, i+1)
        if(len % (str.length) === 0) {
            if(s.split(str).filter(t => t).length === 0) return true
        }
    }
    return false
};
// @lc code=end

