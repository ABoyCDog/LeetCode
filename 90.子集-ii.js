/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [[]]
    let n = nums.length
    nums.sort()
    const hashMap = {}

    function backtrack(cur, start) {
        if(cur.length === n) return
       
        for(let i = start; i < n; i++) {
            cur.push(nums[i])
            if(hashMap[cur] === undefined) {
                res.push([...cur])
                hashMap[cur] = true
            }
            backtrack(cur,i+1)
            cur.pop()
        }
    }

    backtrack([],0)
    return res
};

// @lc code=end

