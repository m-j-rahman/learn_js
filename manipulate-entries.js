function filterEntries(item, func) {
    let result = {}
    for (let value of Object.entries(item)) {
        if (func(value)) {
            result[value[0]] = value[1]
        }
    }
    return result
}

function mapEntries(item, func) {
    let result = {}
    for (let value of Object.entries(item)) {
        let arrayResult = func(value)
        result[arrayResult[0]] = arrayResult[1]
    }
    return result
}

function reduceEntries(item, func, start = undefined) {
    let accumulator = start
    let count = 1
    if (start === undefined) {
        count = 0
    }
    for (let value of Object.entries(item)) {
        if (count == 0) {
            accumulator = value
        } else {
            accumulator = func(accumulator, value)
        }
        count++
    }
    return accumulator
}

function totalCalories(item) {
    return reduceEntries(mapEntries(item, ([k, v]) => [`${k}`, (Math.round(nutritionDB[k]["calories"] * v) / 1000) * 10,]), (acc, [k, v]) => acc + v, 0);
};

function lowCarbs(item) {
    return filterEntries(item, ([k, v]) => (v / 100) * nutritionDB[k]["carbs"] < 50);
};

function cartTotal(item) {
    return mapEntries(item, ([k, v]) => {
        let result = {};
        for (let [key, val] of Object.entries(nutritionDB[k])) {
            result[key] = parseFloat(((val * v) / 100).toFixed(3));
            return [k, result];
        }
    });
};