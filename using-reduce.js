function adder(arr, start = 0) {
    return arr.reduce((acc, curr) => acc + curr, start)
}

function sumOrMul(arr, start = 0) {
    return arr.reduce((acc, curr) => {
        if (curr % 2 === 0) acc *= curr
        else acc += curr
        return acc
    }, start)
}

function funcExec(arr, start = 0) {
    return arr.reduce((acc, func) => func(acc), start)
}