function isFriday(date) {
    return date.getDay() === 5
}

function isWeekend(date) {
    return date.getDay() === 6 ^ date.getDay() === 0
}

function isLeapYear(date) {
    date.setDate(date.getDate() + 28)
    return date.getMonth() === 1
}

function isLastDayOfMonth(date) {
    let currentMonth = date.getMonth()
    date.setDate(date.getDate() + 1)
    return date.getMonth() !== currentMonth
}
