/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = []

    const dfs = (subRes, start) => {                        // 复原从start开始的子串
        if(subRes.length === 4 && start === s.length) {     // 用满四个段且start移到了最后一位，即用完了字符串
            res.push(subRes.join('.'))                      // 拼接.字符串 ,放入结果数组 
            return
        }
        if(subRes === 4 && start < s.length) {              // 已满四段 但没用光字符串，直接返回
            return
        }
        for(let len = 1;len <= 3; len++) {
            if(start + len -1 >= s.length) return
            if(len !== 1 && s[start] === '0') return        // 不能是0开头 0x 或者 0xx

            const str = s.substring(start, start + len)     // 切割当前位置加上长度为子串
            if(len ===3 && +str > 255) return               // 限制小于255

            subRes.push(str)                                // 选择
            dfs(subRes, start + len)                        // 基于这种选择向下遍历
            subRes.popp()                                   // 撤销最后的选择，回到之前的状态
        }
    }

    dfs([], 0)
    return res
};
// @lc code=end

