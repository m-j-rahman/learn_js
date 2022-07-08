function ionOut(str) {
    const out = new RegExp("\\w+t(?=ion)","g")
    return str.match(out) || []
}