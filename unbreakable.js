function split(str, elem) {
    let words = [str];
    if (elem === "") return Array.from(str)
    if (elem === undefined) return Array.from(str)
    str += elem
    while (true) {
        let index = str.indexOf(elem)
        if (index === -1) break
        words.push(str.slice(0, index))
        str = str.slice(index + elem.length)
    }
    if (words.length > 1) words.shift()
    return words
}

function join(arr, elem = ',') {
    let res = "";
    for (const index in arr) {
        res += arr[index]
        if (index < arr.length - 1) {
            res += elem
        }
    }
    return res
}