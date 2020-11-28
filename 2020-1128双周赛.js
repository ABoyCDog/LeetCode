// 第一题
// 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。
// 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {

};

// 第二题
// 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
// 请你将 list1 中第 a 个节点到第 b 个节点删除，并将list2 接在被删除节点的位置。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    
};

// 第三题
// 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。

// 请你完成 FrontMiddleBack 类：

// FrontMiddleBack() 初始化队列。
// void pushFront(int val) 将 val 添加到队列的 最前面 。
// void pushMiddle(int val) 将 val 添加到队列的 正中间 。
// void pushBack(int val) 将 val 添加到队里的 最后面 。
// int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// 请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：

// 将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
// 从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。
var FrontMiddleBackQueue = function() {

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {

};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {

};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {

};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {

};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {

};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

//  第四题
// 我们定义 arr 是 山形数组 当且仅当它满足：

// arr.length >= 3
// 存在某个下标 i （从 0 开始） 满足 0 < i < arr.length - 1 且：
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// 给你整数数组 nums​ ，请你返回将 nums 变成 山形状数组 的​ 最少 删除次数。

// 输入：nums = [1,3,1]
// 输出：0
// 解释：数组本身就是山形数组，所以我们不需要删除任何元素。
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {

};