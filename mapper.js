function map(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i], i, arr))
    }
    return res
}

function flatMap(arr, func) {
    let res = []
    let mapres = map(arr, func)
    for (let map of mapres) {
        if (Array.isArray(map)) {
            for (let m of map) {
                res.push(m)
            }
        } else {
            res.push(map)
        }
    }
    return res
}