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

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used: I can be placed before V (5) and X (10) to make 4 and 9. X can be placed before L (50) and C (100) to make 40 and 90. C can be placed before D (500) and M (1000) to make 400 and 900. Given a roman numeral, convert it to an integer.
// Input: s = "III"
// Output: 3
// Explanation: III = 3

const romanToInt = function(s) {
    let number = 0;
    const romanNum = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    for(let i = 0; i < s.length; i++){
        if(romanNum[s[i]] < romanNum[s[i+1]]){
            number -= romanNum[s[i]];
        } else {
            number += romanNum[s[i]];
        }
    }
    return number;
};

// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    let commonPre = strs[0];
    for(let i = 0; i < strs.length; i++){
        while(strs[i].indexOf(commonPre) !== 0){
            commonPre = commonPre.slice(0, -1);
        }
    }
    return commonPre;
};

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// Input: s = "()"
// Output: true