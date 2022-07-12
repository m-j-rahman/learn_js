function matchCron(cron, date) {
    let cronSplit = cron.split(" ")
    for(let i = 0; i < cronSplit.length; i++) {
        if (cronSplit[i] != "*") {
            switch (i) {
                case 0:
                    if (date.getMinutes() != cronSplit[i]) {
                        return false
                    }
                    break
                case 1:
                    if (date.getHours() != cronSplit[i]) {
                        return false
                    }
                    break
                case 2:
                    if (date.getDate() != cronSplit[i]) {
                        return false
                    }
                    break
                case 3:
                    if (date.getMonth() != cronSplit[i]-1) {
                        return false
                    }
                    break
                case 4:
                    if (date.getDay() != cronSplit[i]) {
                        return false
                    }
            }
        }
    }
    return true
}