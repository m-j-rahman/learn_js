function RNA(DNA) {
    let result = ""
    for (let i = 0; i <= DNA.length-1; i++) {
        if (RNA[i] === "G") {
            result += "C"
        }
        else if (RNA[i] === "C") {
            result += "G"
        }
        else if (RNA[i] === "T") {
            result += "A"
        }
        else if (RNA[i] === "A") {
            result += "U"
        }
    }
    return result
}

function DNA(RNA) {
    let result = ""
    for (let i = 0; i <= RNA.length-1; i++) {
        if (RNA[i] === "C") {
            result += "G"
        }
        else if (RNA[i] === "G") {
            result += "C"
        }
        else if (RNA[i] === "A") {
            result += "T"
        }
        else if (RNA[i] === "U") {
            result += "A"
        }
    }
    return result
}