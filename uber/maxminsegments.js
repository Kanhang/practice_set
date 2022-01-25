// We define a subarray of size m in an n-element array
// to be the contiguous block of elements in the inclusive range from index i to index j, 
//where j − i + 1 = m and 0 ≤ i ≤ j < n. For example, given array [8, 2, 4], the subarrays of size 
//m = 2 would be [8, 2] and [2, 4] (but not [8, 4] since these elements aren't contiguous).

// Given an array of integers arr, and an integer m, your task is the following:

// Find the minimum value in each of the contiguous subarrays of size m;
// Return the maximum value among these minimums.
// Complete the maxMinInSegments function in the editor to make it return the needed value.

// 