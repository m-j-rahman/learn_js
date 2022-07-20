function filterValues(item, func) {
    const result = {}
    Object.keys(item).forEach(key => {
        if (func(item[key])) {
            result[key] = item[key]
        }
    })
    return result
}

function mapValues(item, func) {
    const result = {}
    Object.keys(item).forEach(key => {
        result[key] = func(item[key])
    })
    return result
}

function reduceValues(item, func, result = 0) {
    return Object.keys(item).reduce((prev, val) => prev + item[val], result)
}