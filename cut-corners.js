function sign(num) {
    if (num > 0) return num;
    if (num < 0) return -num;
    else return 0;
}

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

function round(num) {
    let temp = 0 + num
    let res = 0
    num = Math.abs(num)
    if (temp < 0) {
        num -= 0.01
    }
    if (modulo(num, 1) < 0.5) {
        res = num - modulo(num, 1)
    } else {
        res = num + 1 - modulo(num, 1)
    }
    if (temp < 0) {
        res *= -1
    }
    return res
}

function ceil(num) {
    if (num > 0) {
        return num + 1 - modulo(num, 1);
    } 
    return num - 1 - modulo(num, 1);
}

function floor(num) {
    if (num >= 0) {
        return num - 1 - modulo(num, 1);
    } 
    return num - 1 - modulo(num, 1);
}


function trunc(num) {
    return num - modulo(num, 1);
}


console.log(round(54))