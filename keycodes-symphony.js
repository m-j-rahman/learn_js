export function compose() {

    document.addEventListener('keydown', function (keycolours) {

        if (keycolours.key == 'Backspace') {

            let bk = document.getElementsByClassName('note')
            bk[bk.length - 1].remove()
        }

        if (keycolours.key == 'Escape') {

            let esc = document.querySelectorAll('.note')
            for (let i = 0; i < esc.length; i++) {
                esc[i].remove()
            }
        }

        if (keycolours.key == /[a-z]/.exec(keycolours.key) && keycolours.key.length == 1) {
                let newdivs = document.createElement('div')
                newdivs.setAttribute('class', 'note')
                newdivs.appendChild(document.createTextNode(keycolours.key))
                var ascii = keycolours.key.charCodeAt(0)
                const col = `rgb(${ascii}, ${ascii}, ${ascii})`
                const css = `background: ${col};`

                newdivs.setAttribute("style", css)
                document.body.appendChild(newdivs)
        }
    })

}