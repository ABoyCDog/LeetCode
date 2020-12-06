// 5617. 设计 Goal 解析器
// 请你设计一个可以解释字符串 command 的 Goal 解析器 。
// command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。
// Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。
// 然后，按原顺序将经解释得到的字符串连接成一个字符串。
// 给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。
// 输入：command = "G()(al)"
// 输出："Goal"
// 解释：Goal 解析器解释命令的步骤如下所示：
// G -> G
// () -> o
// (al) -> al
// 最后连接得到的结果是 "Goal"

// 输入：command = "G()()()()(al)"
// 输出："Gooooal"

// 输入：command = "(al)G(al)()()G"
// 输出："alGalooG"

// 提示：

// 1 <= command.length <= 100
// command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let len = command.length
    let str = ''
    let flag = ''
    for(let i = 0; i < len; i++) {
        switch(command[i]) {
            case 'G': {
                str += 'G'
                break
            }
            case '(': {
                flag += '('
                break
            }
            case ')': {
                flag += ')'
                if(flag === '()') {
                    str += 'o'
                    flag = ''
                }
                if(flag === '(al)') {
                    str += 'al'
                    flag = ''
                }
                break
            }
            case 'a': {
                flag += 'a'
                break
            }
            case 'l': {
                flag += 'l'
                break
            }
        }
    }
    return str
};

// 5618. K 和数对的最大数目
// 给你一个整数数组 nums 和一个整数 k 。
// 每一步操作中，你需要从数组中选出和为 k 的两个整数，并将它们移出数组。
// 返回你可以对数组执行的最大操作数。
// 示例 1：

// 输入：nums = [1,2,3,4], k = 5
// 输出：2
// 解释：开始时 nums = [1,2,3,4]：
// - 移出 1 和 4 ，之后 nums = [2,3]
// - 移出 2 和 3 ，之后 nums = []
// 不再有和为 5 的数对，因此最多执行 2 次操作。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 此答案超时
// var maxOperations = function(nums, k) {
//     let len = nums.length
//     let res = 0
//     for(let i = 0; i < len - 1; i++) {
//         if(nums[i] > k) continue
//         for(let j = i + 1; j < len; j++) {
//             if(nums[j] > k) continue
//             if(nums[i] + nums[j] === k) {
//                 nums.splice(i,1)
//                 nums.splice(j-1,1)
//                 res++
//                 i--
//                 break
//             }
//         }
//     }
//     return res
// };