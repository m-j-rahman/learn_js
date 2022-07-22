function replica(...objects) {
    let result = {}
    objects.forEach(obj => {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === "object" && typeof result[key] === "object" &&
                !Array.isArray(obj[key]) && !Array.isArray(result[key])) {
                result[key] = {...result[key], ...obj[key]}
            } else result[key] = obj[key]
        })
    })
    return result
}