"use strict";

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(nums[j] === target - nums[i]){
                return [j, i];
            }
        }
    }
};

// Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

const isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    return String(x) === String(x).split("").reverse().join("");
};