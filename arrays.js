function getSecondLargest(nums) {
    nums = new Set(nums); //ensures there are no duplicate numbers
    nums = Array.from(nums); //creates an array from nums
    nums = nums.sort(comparator);
    return nums[nums.length - 2]; //returns the second largest number
}
function comparator(a, b) {
    return a - b;
}
