function dayWeek(date) {
    const start = new Date("0001-01-01")
    const days = Math.round((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return (days % 7) + 1
}

function firstDayWeek(week, year) {
    let count = 1
    if (week < 1 || week > 53) {
        return undefined
    } 
    if (typeof s !== "string" && year.length != 4) {
        return undefined
    }
    let date = new Date(year + "-01-01")
    if (week == 1) {
        return "01-01-" + year
    }
    while (count < 54) {
        date.setDate(date.getDate()+1)
        if (dayWeek(date) == 1) {
            count++
        }
        if (week == count) {
            let day = date.getDate()
            if (day < 10) {
                day = "0" + day
            }
            let month = date.getMonth() + 1
            if (month < 10) {
                month = "0" + month
            }
            return day + "-" + month + "-" + year
        }
    }
    return 0
}
