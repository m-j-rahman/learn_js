import { colors } from "./fifty-shades-of-cold.data.js"

export function generateClasses() {
    
    const style = document.createElement('style')
    document.head.appendChild(style);

    for (let i = 0; i < colors.length; i++) {
        let CssClass = '.' + colors[i] + ' { background: ' + colors[i] + '; }'
        style.appendChild(document.createTextNode(CssClass))
    }

}

export function generateColdShades() {

   let c2 = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', "purple"]

    for (let i = 0; i < colors.length; i++) {

        let found  = false
        for (let j = 0; j < c2.length; j++){
            if (colors[i].includes(c2[j])){
                found = true
                break
            }
        }
        if (found === true ){
            const style = document.createElement('div')
            style.setAttribute('class', colors[i])
            style.appendChild(document.createTextNode(colors[i]))

            document.body.appendChild(style)
        }
    }
}

export function choseShade(shade) {

    let c3 = 'div:not(.' + shade + ')'
    let selectedShade = document.querySelectorAll(c3)

    for (let i = 0; i < selectedShade.length; i++) {
        let elem = selectedShade[i]
        elem.classList.replace(elem.className,shade)
    }

}