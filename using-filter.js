function filterShortStateName(arr) {
    return arr.filter((str) => str.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((str) => str.match(/^[aeiou]/i));
}

function filter5Vowels(arr) {
    return arr.filter((str) => filterStartVowel(str.split("")).length >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter((str) => {
        let vowels = filterStartVowel(str.toLowerCase().split(""))
        vowels.sort()
        return vowels[0] === vowels[vowels.length - 1]
    });
}

function multiFilter(arr) {
    return arr.filter((obj) =>
        obj.capital.length > 7 &&
        !obj.name.match(/^[aeiouAEIOU]/) &&
        obj.tag.match(/[aeiouAEIOU]/g) && 
        obj.region !== "South"
    )
}