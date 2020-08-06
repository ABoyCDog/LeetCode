/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2)
    let len = arr.length
    let result
    arr.sort(function(a,b) {return a-b})
    if(arr.length % 2 === 0) {
        result = (arr[len / 2 - 1] + arr[len / 2]) / 2
        return result.toFixed(1)
    } else {
        result = arr[parseInt(len / 2)]
        return result.toFixed(1)
    }
};
// @lc code=end

