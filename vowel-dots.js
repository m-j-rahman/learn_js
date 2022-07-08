const vowels = new RegExp("[aeiouAEIOU]", "g");

function vowelDots(str) {
    return str.replace(vowels, "$&.")
}