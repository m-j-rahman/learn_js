function isValid(date) {
    if (isNaN(date)|| date == 0) {
        return false
    } else {
        return true
    }
}

function isAfter(date1, date2) {
    return date1 > date2
}

function isBefore (date1, date2) {
    return date1 < date2
}

function isFuture(date) {
    return date > Date.now
}

function isPast(date) {
    return date < Date.now
}