export function build(n) {
    let count = 1;
    let interval = setInterval(() => {
        let brick = document.createElement("div")
        brick.id = "brick-" + count
        brick.classList.add("brick")
        if ((count) % 3 == 2) {
            brick.dataset.foundation = true
        }
        document.body.appendChild(brick)
        if (count === n) {
            clearInterval(interval)
        }
        count++
    }, 100)
}

export function repair(...ids) {
    for (let i = 0; i < ids.length; i++) {
        const brick = document.getElementById(ids[i])
        if (brick.hasAttribute("data-foundation")) {
            brick.dataset.repaired = "in progress";
        } else {
            brick.dataset.repaired = "true";
        }
    }
}

export function destroy() {
    let allBricks = document.getElementsByClassName("brick")
    allBricks[allBricks.length-1].remove()
}