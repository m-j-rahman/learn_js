function multiply(a, b) {
    let num = 0;
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            num += a;
        }
    } else {
        for (let i = b; i < 0; i++) {
            num -= a;
        }
    }
    return num
}

function divide(a, b) {
    let res = 0;
    if (b > 0) {
        if (a > 0) {
            while (a - b > 0) {
                res++;
                a -= b;
            }
        } else {
            while (a + b < 0) {
                res--;
                a += b;
            }
        }
    } else {
        if (a > 0) {
            while (a + b > 0) {
                a += b;
                res--;
            }
        } else {
            while (a - b < 0) {
                a -= b;
                res++;
            }
        }
    }
    return res;
}

function modulo(a, b) {
    return a - multiply(divide(a, b), b);
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

//console.log(trunc(-56.78))