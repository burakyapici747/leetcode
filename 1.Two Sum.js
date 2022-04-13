/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if( (nums[i] + nums[j])  === target){
                indexes.push(i);
                indexes.push(j);
                break;
            }
        }
    }
};