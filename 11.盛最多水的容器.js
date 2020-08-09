/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 思路：
 * 双指针，第一个指针从头开始，第二个指针从尾开始，
 * 底边长tail-head, 高为 height[head], height[tail]二者选最小的
 * 面积计算公式：(tail-head)*Math.min(height[head], height[tail]), 
 * 将第一次遍历值全部放入数组，筛选最面积值存起来，Math.max.apply(null, arr)
 * 最后再筛选一遍即可得出最大值
 */
var maxArea = function(height) {
    let len = height.length
    let result = 0
    for(let i = 0; i < len-1; i++) {
        let area = []
        for(let j = len-1; j > i; j--) {
            area.push((j-i)*Math.min(height[i], height[j]))
        }
        let res = Math.max.apply(null, area)
        result = res > result ? res : result
    }
    return result
};
// @lc code=end

