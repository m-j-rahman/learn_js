function fusion(a, b) {

    const result = {}

    Object.keys(a).forEach(key => {
        result[key] = a[key]
    })

    Object.keys(b).forEach(key => {
        if (typeof result[key] !== typeof b[key]) {
            result[key] = b[key]
        } else if (Array.isArray(result[key]) && Array.isArray(b[key])) {
            result[key] = result[key].concat(b[key])
        } else if (typeof result[key] === 'string') {
            result[key] += ' ' + b[key]
        } else if (typeof result[key] === 'number') {
            result[key] += b[key]
        } else if (typeof result[key] === 'object') {
            result[key] = fusion(result[key], b[key]);
        }
    })
    
    return result

}