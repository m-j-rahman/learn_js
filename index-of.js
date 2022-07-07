function indexOf(x, y, z = 0) {
    for (let i = z; i < x.length; i++) {
        if(x[i] === y) {
            return i
        }
    }
    return -1
}

function lastIndexOf(x, y, z = x.length - 1) {
    let a = -1
    for (let i = z; i >= 0; i--) {
        if(x[i] === y) {
            return i
        }
    }
    return -1
}

function includes(x, y) {
    let a = false
    for(const b of x) {
        if(b === y) {
            return true
        }
    }
    return false
}