/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//  V 字解法，找规律

// var convert = function(s, numRows) {
//   if(numRows === 1) return s
//   const rows = new Array(numRows).fill('')
//   // 循环周期
//   const n = 2*numRows - 2
//   for(let i = 0; i < s.length; i++) {
//     const x = i % n
//     rows[Math.min(x, n-x)] += s[i]
//   }
//   return rows.join('')
// };

var convert = function (s, numRows) {
  if (numRows !== 1) {
      let arr = new Array(numRows).fill("");
      //用空字符串填充数组，默认是undefined.也为后续字符串相连做准备。
      let n = numRows * 2 - 2;//循环周期
      for (let i = 0; i < s.length; i++) {
          let x = i % n;
          arr[x < numRows ? x : n - x] += s[i];//V字形走位规律
          /*核心是这句，总共有numRows个数组元素。
         字符s.length个，numRows个元素按照v字形走位规律，循环周期是n
          一次循环数组元素依次可接收最多n个字符，一直循环到字符串耗尽为止。*/
      }
      return arr.join("");//把数组默认顺序转换成字符串返回
  } else {
      return s;
  }
};
// @lc code=end

