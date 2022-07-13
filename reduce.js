function fold(arr, func, acc = 0) {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}

function foldRight(arr, func, acc = 0) {
    for (let i = arr.length-1; i >= 0; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}

function reduce(arr, func) {
    if (arr.length < 1) {
        return null
    }
    let acc = arr[0]
    for (let i = 1; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}

function reduceRight(arr, func) {
    if (arr.length < 1) {
        return null
    }
    let acc = arr[arr.length-1]
    for (let i = arr.length-2; i >= 0; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}