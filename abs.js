function isPositive(n){
    return n > 0
}

function abs (n){
    if (n == 0) {
        return n
    }
    if (!isPositive(n)){
        return n * -1
    }
    return n
}