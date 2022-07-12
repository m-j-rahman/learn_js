function matchCron(cron, date) {
    let splitcron = cron.split(" ")
    for(let i = 0; i < cronArray.length; i++) {
        if (cronArray[i] != "*") {
            switch (i) {
                case 0:
                    if (date.getMinutes() != splitcron[i]) {
                        return false
                    }
                    break
                case 1:
                    if (date.getHours() != splitcron[i]) {
                        return false
                    }
                    break
                case 2:
                    if (date.getDate() != splitcron[i]) {
                        return false
                    }
                    break
                case 3:
                    if (date.getMonth() != splitcron[i]-1) {
                        return false
                    }
                    break
                case 4:
                    if (date.getDay() != splitcron[i]) {
                        return false
                    }
            }
        }
    }
    return true
}