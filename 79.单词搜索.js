/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

 /**
  * 
  * 
Companies
    给定一个二维网格和一个单词，找出该单词是否存在于网格中。

    单词必须按照字母顺序，通过相邻的单元格内的字母构成，
    
    其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
    
    同一个单元格内的字母不允许被重复使用。

示例:

    board =
    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]

    给定 word = "ABCCED", 返回 true
    给定 word = "SEE", 返回 true
    给定 word = "ABCB", 返回 false
 

提示：

    board 和 word 中只包含大写和小写英文字母。
    1 <= board.length <= 200
    1 <= board[i].length <= 200
    1 <= word.length <= 10^3
  */
// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let vistList = [];
    // for (index in board) {
    //     let temp = []
    //     for (index2 in board[index]) {
    //         temp[index2] = 0
    //     }
    //     vistList[index] = temp;
    // }
    let xlen = board.length;
    let ylen = board[0].length;
    let result = false;
    let dfs = (x, y, n) => {
        if(result){return}
        if (board[x][y] == word[n] ) {
            let tmp = board[x][y];
            board[x][y] = null;
            // vistList[x][y] = 1
            if (n == word.length-1) {
                result = true;
                return;
            }
            // check(x + 1, y) ? (dfs(x + 1, y , n + 1), vistList[x + 1][y] = 0) : null;
            // check(x - 1, y) ? (dfs(x - 1, y , n + 1), vistList[x - 1][y] = 0) : null;
            // check(x, y + 1) ? (dfs(x, y + 1 , n + 1), vistList[x][y + 1] = 0) : null;
            // check(x, y - 1) ? (dfs(x, y - 1 , n + 1), vistList[x][y - 1] = 0) : null;
            check(x + 1, y) ? (dfs(x + 1, y , n + 1)) : null;
            check(x - 1, y) ? (dfs(x - 1, y , n + 1)) : null;
            check(x, y + 1) ? (dfs(x, y + 1 , n + 1)) : null;
            check(x, y - 1) ? (dfs(x, y - 1 , n + 1)) : null;
            board[x][y] = tmp;
        }else{
            return;
        }

    }
    let check = (x, y) => {
        return x < xlen && x >= 0 && y >= 0 && y < ylen && !result;
    }
    for (var x = 0; x < board.length; x++) {
        for (var y = 0; y < board[x].length; y++) {
            (board[x][y] == word[0] && !result) ? dfs(x, y, 0) : null
        }
    }
    return result;
};
// @lc code=end

