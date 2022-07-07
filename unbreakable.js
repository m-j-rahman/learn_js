function split(str, elem) {
    let arr = [];
    for (let i = 0; i < str.length - elem.length + 1; i++) {
        if (str.slice(i, i + elem.length) === elem) {
            arr.push(str.slice(0, i));
            str = str.slice(i + elem.length);
            i = 0
        }
    }
    arr.push(str);
    return arr;
}

function join(arr, elem) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (elem.length === 0) {
            str += arr[i];
        } else {
            str += arr[i] + elem
        } 
    }
    str = str.slice(0, str.length - elem.length)
    return str
}