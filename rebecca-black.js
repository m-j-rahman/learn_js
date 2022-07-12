function isFriday(Date) {
    return Date.getDay() === 5
}

function isWeekend(Date) {
    return Date.getDay() === 6 ^ Date.getDay() === 0
}

function isLeapYear(Date) {
    Date.setDate(Date.getDate() + 28)
    return Date.getMonth() === 1
}

function isLastDayOfMonth(Date) {
    let currentMonth = Date.getMonth()
    Date.setDate(Date.getDate() + 1)
    return Date.getMonth() !== currentMonth
}
