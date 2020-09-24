/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 * Companies
  格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

  给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

  格雷编码序列必须以 0 开头。

  

  示例 1:

  输入: 2
  输出: [0,1,3,2]
  解释:
  00 - 0
  01 - 1
  11 - 3
  10 - 2

  对于给定的 n，其格雷编码序列并不唯一。
  例如，[0,2,3,1] 也是一个有效的格雷编码序列。

  00 - 0
  10 - 2
  11 - 3
  01 - 1
  示例 2:

  输入: 0
  输出: [0]
  解释: 我们定义格雷编码序列必须以 0 开头。
      给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
      因此，当 n = 0 时，其格雷编码序列为 [0]。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * 
 * 题解思路：
 * 一、(错误思路，注意题目，两个连续的数值仅有一个位数的差异，所以还是要看01排列的顺序的)
 * 格雷编码序列长度为 2的n次方
 * n为2时，格雷编码长度为4，也就[0，1，2，3]的数组,数组第一位必须为0，其他顺序无所谓
 * n=3，长度8，[0,1,2,3,4,5,6,7]
 * 所以！masaga！直接算出长度，输出数组就好了！
 */
// var grayCode = function(n) {
//   const len = Math.pow(2, n)
//   let result = new Array(len)
//   for(let i = 0; i < len; i++) {
//     result[i] = i
//   }
//   return result
// };

/**
 * 
 * 思路：
 * 
 */
// var grayCode = function(n) {
//   const len = Math.pow(2, n)
//   const res = []
  
//   function backtrack() {

//   }
//   backtrack()

//   return res
// };
// 

// 题解 极简递归 思路清奇
var grayCode = function(n) {
  if (n === 0) return [0]
  const codes = grayCode(--n)
  return [...codes, ...codes.map(x => (1 << n) | x).reverse()]
}

// @lc code=end

