function deepCopy(x) {
    if (Array.isArray(x)) {
        let result = []
        x.forEach(element => {
            if (typeof obj1 == "object" || Array.isArray(element)) {
                result.push(deepCopy(element))
            } else {
                result.push(element)
            }
        })
        return result
    } else {
        let result = {}
        for (let entries of Object.entries(x)) {
            result[entries[0]] = entries[1]
        }
        return result
    }
}