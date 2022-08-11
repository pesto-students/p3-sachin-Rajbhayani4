const maxSubArray = (nums) => {

    let maxSum = -1
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}

console.log(maxSubArray([1, 2, 3, 4, -10]));
console.log(maxSubArray([1, 2, 3, 4]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([4, -1, 2, 1]));