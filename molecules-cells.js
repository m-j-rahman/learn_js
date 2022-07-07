function RNA(DNA) {
    let result = ""
    for (let i = 0; i < DNA.length; i++) {
        if (RNA[i] === "G") {
            result += "C"
        }
        if (RNA[i] === "C") {
            result += "G"
        }
        if (RNA[i] === "T") {
            result += "A"
        }
        if (RNA[i] === "A") {
            result += "U"
        }
    }
    return result
}

function DNA(RNA) {
    let result = ""
    for (let i = 0; i < RNA.length; i++) {
        if (RNA[i] === "C") {
            result += "G"
        }
        if (RNA[i] === "G") {
            result += "C"
        }
        if (RNA[i] === "A") {
            result += "T"
        }
        if (RNA[i] === "U") {
            result += "A"
        }
    }
    return result
}