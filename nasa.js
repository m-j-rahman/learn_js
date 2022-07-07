function nasa(N) {
    let res = ""
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0) res += "NA"
        if (i % 5 === 0) res += "SA"
        if (!(i % 3 === 0)) res += i
        if (i !== N) res += " "
    }
    return res
}