/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

    让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

    A.length >= 3
    在 0 < i < A.length - 1 条件下，存在 i 使得：
    A[0] < A[1] < ... A[i-1] < A[i] 
    A[i] > A[i+1] > ... > A[A.length - 1]

    输入：[2,1]
    输出：false

    输入：[0,3,2,1]
    输出：true
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const len = A.length
  if (len < 3) return false

  let head = false
  let tail = false

  let max = A[0]
  let index = 0
  for(let i = 1; i < len; i++) {
    if (A[i] > max) {
      max = A[i]
      index = i
    }
  }
  for(let i = 0; i < index; i++) {
    if (A[i] < A[i+1]) head = true
    else {
      head = false
      break
    }
  }
  for(let i = index; i < len - 1; i++) {
    if (A[i] > A[i+1]) tail = true
    else {
      tail = false
      break
    }
  }

  if (head && tail) return true
  else return false

};
// @lc code=end

