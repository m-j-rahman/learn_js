function invert(obj) {
    let result = {}
    Object.keys(obj).forEach(key => {
        res[obj[key]] = key
    })
    return result
}