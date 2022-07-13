function citiesOnly(arr) {
    return arr.map(elem => elem.city) 
}

function upperCasingStates(arr) {
    return arr.map(state => {
        return state.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(" ")
    })
}

function fahrenheitToCelsius(arr) {
    return arr.map((elem) => Math.floor((parseInt(elem)-32)/1.8) + "°C")
}

function trimTemp(arr) {
    return arr.map(elem => {
        elem["temperature"] = elem["temperature"].split(" ").join("")
        return elem
    })
}

function tempForecasts(arr) {
    arr = trimTemp(arr)
    return arr.map((elem) => fahrenheitToCelsius([trimTemp([elem])[0].temperature]) + "elsius in " + upperCasingStates([e.city, e.state]).join(", "))
}