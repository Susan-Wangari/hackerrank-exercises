function modifyArray(nums) {
    return nums.map(elem => elem % 2 === 0? elem * 2 : elem * 3);
}
//if the element is even multiply by 2 and if odd nultiply by 3
