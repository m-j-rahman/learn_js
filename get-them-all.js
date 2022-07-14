export function getArchitects() {
    let architects = Array.from(document.getElementsByTagName("a"))
    let nonArch = Array.from(document.getElementsByTagName("span"))
    return [architects, nonArch]
}

export function getClassical() {
    let classical = Array.from(document.getElementsByClassName("classical"))
    let nonClass = Array.from(document.querySelectorAll("a:not(.classical)"))
    return [classical, nonClass]
}

export function getActive() {
    let active = Array.from(document.querySelectorAll(".active"))
    let nonAct = Array.from(document.querySelectorAll("a:not(.active)"))
    return [active, nonAct]
}

export function getBonannoPisano() {
    let bon = Array.from(document.getElementById("BonannoPisano"))
    let nonBon = Array.from(document.querySelectorAll("a:not(#BonannoPisano)"))
    return [bon, nonBon]
}