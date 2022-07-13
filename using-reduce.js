function adder(arr, sum = 0) {
    return arr.reduce((sum, elem) => sum + elem, sum)
}