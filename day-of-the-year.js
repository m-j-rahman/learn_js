function dayOfTheYear(date) {
    const firstDayYear = new Date(date)
    firstDayYear.setDate(1)
    firstDayYear.setMonth(0)
    return 1 + (date.getTime() - firstDayYear.getTime()) / (1000 * 60 * 60 * 24)
}