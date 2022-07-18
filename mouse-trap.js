let circle
let box
let isBoxed = false

export function createCircle(event) {
    if (!event) return
    circle = document.createElement('div')
    circle.style.top = `${event.y - 25}px`
    circle.style.left = `${event.x - 25}px`
    circle.style.background = 'white'
    circle.classList.add('circle')
    document.body.append(circle)
    moveCircle(event)
}

export function moveCircle(event) {
    if (circle) {
        if (!isBoxed && box.left < event.x && event.x < box.right && box.top < event.y && event.y < box.bottom) {
            isBoxed = true
            circle.style.background = `var(--purple)`
        }
        let x = event.x
        let y = event.y

        if (isBoxed) {
            if (y < box.top) y = box.top
            else if (y > box.bottom) y = box.bottom

            if (x < box.left) x = box.left
            else if (x > box.right) x = box.right
        }

        circle.style.top = `${y - 25}px`
        circle.style.left = `${x - 25}px`
    }
}

export function setBox() {
    box = document.createElement('div')
    box.classList.add('box')
    document.body.append(box)
    box.top = box.getBoundingClientRect().top + 25
    box.left = box.getBoundingClientRect().left + 25
    box.right = box.getBoundingClientRect().right - 25
    box.bottom = box.getBoundingClientRect().bottom - 25
}

document.addEventListener('mousedown', createCircle)
document.addEventListener('mousemove', moveCircle)
