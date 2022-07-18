export function createCircle() {
    document.addEventListener('click', (event)=>{
        let circle = document.createElement('div')
        circle.className = 'circle'
        circle.style.background = 'white'
        circle.style.top = event.clientY-25+'px'
        circle.style.left = event.clientX-25+'px'
        document.body.appendChild(circle)
    },false)
}

export function moveCircle() {
    document.addEventListener('mousemove', (event)=>{
        let lastCircle = document.body.lastChild
        if (lastCircle == null) {
            return
        }
        lastCircle.style.top = event.clientY-25+'px'
        lastCircle.style.left = event.clientX-25+'px'
    },false)
}

export function setBox() {
    let box = document.createElement('div')
    box.className = 'box'
    document.body.appendChild(box)
}