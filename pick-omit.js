function pick(obj, keys) {
    const result = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key == keys) {
            result[key] = obj[key]
        }
    })
    return result
}

function omit(obj, keys) {
    const result = {}
    let keysObj = Object.keys(obj)
    keysObj.forEach(key => {
        if (key != keys) {
            result[key] = obj[key]
        }
    })
    return result
}