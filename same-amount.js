function sameAmount(str, reg1, reg2) {
    reg1 = new RegExp(reg1, "g")
    reg2 = new RegExp(reg2, "g")
    const r1 = (str.match(reg1) || []).length
    const r2 = (str.match(reg2) || []).length
    if (r1 === r2) {
        return true
    }
    return false
}