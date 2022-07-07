function split(str, str2) {
    let arr = [];
    let last = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + str2.length) === str2) {
            arr.push(str.slice(last, i));
            last = i + str2.length;
        }
    }
    arr.push(str.slice(last));
    return arr;
}

function join(arr, char) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
        if (i !== arr.length - 1) {
            str += char;
        }
    }
    return arr;
}