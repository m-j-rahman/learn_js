function filterKeys(item, func) {
    let result = {}
    for (let value of Object.entries(item)){
        if(func(value[0])) { 
            result[value[0]] = value[1]
        }
    }
    return result
}

function mapKeys(item, func) {
    let result = {}
    for (let value of Object.entries(item)){
            result[func(value[0])] = value[1]
    }
    return result
}

function reduceKeys(item, func, start = undefined) {
    let accumulator = start
    let count = 1
    if (start === undefined ) {
        count = 0
    }
    
    for (let value of Object.entries(item)){
        if(count == 0) {
            accumulator = value[0]
        } else { 
            accumulator = func(accumulator,value[0])
        }
        count++
    }    
    return accumulator
}