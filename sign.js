function sign(n){
    if (n > 0){
        return 1
    } else if (n < 0){
        return -1
    } else {
        return 0
    }
}

function sameSign(x, y){
    if (sign(x) == sign(y)){
        return true
    }
    return false
}