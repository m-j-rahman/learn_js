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
    let sign = 1
    if (num < 0) {
        num *= -1;
        sign = -1;
    }
    if (modulo(num, 1) >= 0.5) {
        return sign * ceil(num);
    } 
    return sign * floor(num);
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