/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 优化写法
// 思路是设置双指针，head=0，tail=1，循环条件为tail <= length
// head到tail为当前子串，使用s.slice(head,tail-1)判断下一个字符是否在子串内
// 不在则记录子串长度（还得判断子串是否有之前的长，记录最长的），tail++；
// 在则head += index+1 （index为s.slice().indexOf()的值），tail++，进入下一循环

// var lengthOfLongestSubstring = function(s) {
//   let result = 0
//   let begin = 0, end = 1
//   while(end <= s.length) {
//       let index = s.slice(begin, end-1).indexOf(s[end-1])
//       if(index !== -1) {
//           begin += (index+1)
//           end++
//       } else {
//           end-begin > result?result = end-begin:null
//           end++
//       }
//   }
//   return result
// };


// 使用数组
var lengthOfLongestSubstring = function(s) {
  let arr = [], max = 0
  for(let i = 0; i < s.length; i++) {
    // -1为不在，其他返回为当前字符在数组里的index，如[1,2,3].indexOf(3) 返回是2，2是3在数组中的index
    let index = arr.indexOf(s[i])
    // 若当前字符在数组中，将当前字符从数组中移除
    // index是当前字符在数组中的位置
    if (index !== -1) arr.splice(0, index+1)
    // 将当前字符推入数组
    arr.push(s.charAt(i))
    // 只求最大值
    max = Math.max(arr.length, max)
  }
  return max
};
// @lc code=end

