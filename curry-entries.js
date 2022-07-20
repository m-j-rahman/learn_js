function defaultCurry(obj1) {
    return function (obj2) {
        return Object.fromEntries(Object.entries(obj1).concat(Object.entries(obj2)))
    }
}

function mapCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).map(func))
    }
}

function reduceCurry(func) {
    return function (obj, init) {
        return Object.entries(obj).reduce(func, init)
    }
}

function filterCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).filter(func))
    }
}

function reduceScore(personnel, start) {
    let filter = filterCurry(([k, v]) => v.isForceUser === true) (personnel)
    return (reduceCurry((acc,[k, v]) => (acc += v.pilotingScore+v.shootingScore)) (filter,start) )
}
function filterForce(personnel) {
    let filter = filterCurry(([k, v]) => v.isForceUser === true) (personnel)
    return (filterCurry(([k, v]) => v.shootingScore >= 80) (filter))
}
function mapAverage(personnel) {
    for (let entries of Object.entries(personnel)) {
        personnel[entries[0]]["averageScore"] = (entries[1].pilotingScore + entries[1].shootingScore) / 2
    }
    return personnel
}