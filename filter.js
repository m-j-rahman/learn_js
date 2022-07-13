function filter(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) == true) {
            res.push(arr[i])
        }
    }
}