function adder(arr, start = 0) {
    return arr.reduce(((prev, curr) => prev + curr), (start))
}

