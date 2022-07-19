import { gossips } from "./gossip-grid.data.js";

export function grid() {

    let list = gossips

    let width = document.createElement('input')
    width.classList.add('range')
    width.id = 'width'
    width.type = 'range'
    width.min = '200'
    width.max = '800'

    let fontsize = document.createElement('input')
    fontsize.classList.add('range')
    fontsize.id = 'fontSize'
    fontsize.type = 'range'
    fontsize.min = '20'
    fontsize.max = '40'

    let background = document.createElement('input')
    background.classList.add('range')
    background.id = 'background'
    background.type = 'range'
    background.min = '20'
    background.max = '75'

    let ranges = document.createElement('div')
    ranges.classList.add('ranges')
    ranges.append(width, fontsize, background)

    let form = document.createElement('form')
    form.classList.add('gossip')

    let button = document.createElement('button')
    button.innerHTML = 'Share gossip!'

    let textarea = document.createElement('textarea')
    textarea.placeholder = 'Got a gossip to share ?'

    button.addEventListener('click', e => {
        e.preventDefault()
        list.unshift(textarea.value)
        document.body.innerHTML = ''
        textarea.value = ''
        grid()
    })

    form.append(textarea, button)

    document.body.append(ranges, form)

    list.forEach(el => {
        let div = document.createElement('div')
        div.classList.add('gossip')
        div.innerHTML = el
        document.body.append(div)
    })

    width.addEventListener('input', (e) => {
        Array.from(document.getElementsByClassName('gossip')).forEach(el => {
            el.style.width = `${e.target.value}px`
        })
    })

    fontsize.addEventListener('input', (e) => {
        Array.from(document.getElementsByClassName('gossip')).forEach(el => {
            el.style.fontSize = `${e.target.value}px`
        })
    })

    background.addEventListener('input', (e) => {
        Array.from(document.getElementsByClassName('gossip')).forEach(el => {
            el.style.background = `hsl(280, 50%, ${e.target.value}%)`
        })
    })

}