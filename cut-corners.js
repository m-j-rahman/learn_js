function modulo(a, b) {
    let A = a;
    let B = b;
    if (a < 0 || b < 0) {
        A = sign(a); //if -a, int to positive
        B = sign(b); //if -b, int to positive
    }
    while (A > B) {
        A -= B; //122-23-23-23-23-23-23-23-23-23 A > B
    }
    if (a < 0 && b < 0) { //a = -122, b = -23
        return -A;
    }
    if (a > 0 && b > 0) {// a= 122, b = 23
        return A;
    }
    if (a < 0 && b > 0) {   //a= -122, b= 23
        return -A;
    }
    if (a > 0 && b < 0) {   //a =122, b=-23
        return A;
    }
}

function sign(num) {
    if (num > 0) return num;
    if (num < 0) return -num;
    else return 0;
}

function trunc(num) {
    return num - modulo(num, 1)
}

function floor(num) {
    if (num > 0 || num === trunc(num)) return trunc(num)
    else return trunc(num) -1
}

function ceil(num) {
    if (num > 0 && num !== trunc(num)) return trunc(num) + 1
    else return trunc(num)
}

function round(num) {
    if (num > 0) {
        if (num - trunc(num) >= 0.5) return ceil(num)
        return floor(num)
    }
    if (trunc(num) - num >= 0.5) return floor(num)
    return ceil(num)
}

console.log(trunc(-56.78))