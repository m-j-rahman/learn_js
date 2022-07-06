const planets = {
    earth: 1, 
    mercury: 0.2408467, 
    venus: 0.61519726, 
    mars: 1.8808158, 
    jupiter: 11.862615, 
    saturn:  29.447498, 
    uranus: 84.016846, 
    neptune: 164.79132, 
}

let year = 31557600 //seconds

function dogYears (planet, dogAge) {
    dogAge = dogAge / year
    dogAge = dogAge / planets[planet] * 7
    return Math.round(dogAge * 100) / 100;
}