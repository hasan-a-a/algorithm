// @param {number[]} nums
// @param {number} target
// @return {number[]}
// */
function twoSum(nums, target) {
    for(let i in nums){
        // console.log(nums[i], target)
        for(let j in nums){
            if(nums[i]+nums[j] == target){
                return `${nums[i]} + ${nums[j]} = ${target}`

            }
        } 
    }
}
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
// let nums = [2,7,11,15]
// let target = 9
// twoSum([2,7,11,15],9)