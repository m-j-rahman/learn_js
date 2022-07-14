export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let size = 11, letters = 120, weight = 300;
    let partition = (letters / 3);
    let section = partition - 1;
    for (let i = 0; i < letters; i++) {
        let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
        const newDiv = document.createElement("div");
        newDiv.id = String(i);
        newDiv.textContent = letter;
        newDiv.style.fontSize = String(size) + "px";
        newDiv.style.fontWeight = String(weight)
        document.body.append(newDiv);
        if (i === section) {
            section += partition
            if (weight === 300) {
                weight += 100
            }
            if (weight === 400) {
                weight += 200
            }
        }
        size++
    }
}