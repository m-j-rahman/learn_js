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

