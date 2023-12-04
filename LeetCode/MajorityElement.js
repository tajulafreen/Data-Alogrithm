var majorityElement = function(nums) {
   
    nums.sort((a,b) => a-b)
   return nums[Math.floor(nums.length/2)]
   
};

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2