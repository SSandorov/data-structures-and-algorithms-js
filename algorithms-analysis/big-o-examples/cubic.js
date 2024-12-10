/*
*   Cubic O(n^3) and higher polynomial functions usually involve many nested loops.
*   Examples are multi-variable equation solver or finding three elements of an array
*   that add up to a certain number.
*/

//! You can improve the runtime of 3sum from O(n3) to O(n2), if we sort items first 
//! and then use one loop and two pointers to find the solutions.

export function threeSum(nums, target = 0) {
    const ans = [];
  
    for(let i = 0; i < nums.length -2; i++)
      for(let j = i + 1; j < nums.length - 1; j++)
        for(let k = j + 1; k < nums.length; k++)
          if (nums[i] + nums[j] + nums[k] === target)
            ans.push([nums[i], nums[j], nums[k]]);
  
    return ans;
  }