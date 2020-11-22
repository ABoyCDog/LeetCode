// 第一题
// 检查两个字符串数组是否相等
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    if(word1.length < 0 && word1.length > Math.pow(10, 3) && word2 < 0 && word2 > Math.pow(10, 3)) return false
    const str1 = word1.join('')
    const str2 = word2.join('')
    if(str1 === str2) return true
    else return false
};

// 第二题
// 具有给定数值的最小字符串
// https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
// 结果：超时
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    if(n < 1 && n > Math.pow(10, 5) && k < n && k > 26 * n) return
    
    const hashMap = getS()
    let res
    let hashArr = []
    for(let i = 1; i < 27; i++) hashArr.push(i)
    res = combinationSum(hashArr, k, n)[0]
    return res.map(x => hashMap[x-1]).join('')
};
var getS = function() {
    let chs = 'a'
    let strs = '' 
    for(let i = 0; i < 26; i++) strs += String.fromCharCode(chs.charCodeAt(0)+i)
    return strs
};
var combinationSum = function(candidates, target, nn) {
    const res = []
    candidates.sort()
    
    function dfs(arr, start) {
        let sum = 0
        if(arr.length !== 0) {
            sum = arr.reduce((a,b) => a+b)
        }
        if(sum > target) return
        if(sum === target && arr.length === nn) { // 如果和等于target 将当前解集arr推入结果数组
            res.push(arr)
            return
        }
        for(let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]) // 将字符推入解集
            dfs(arr.slice(), i)
            arr.pop()
        }
    }
    dfs([], 0)
    return res
};

// 第三题
// 生成平衡数组的方案数
// https://leetcode-cn.com/problems/ways-to-make-a-fair-array/


// 第四题
// 完成所有任务的最少初始能量
// https://leetcode-cn.com/problems/minimum-initial-energy-to-finish-tasks/