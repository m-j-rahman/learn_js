let count = 0
let direction = 0

import { styles } from "./pimp-my-style.data.js"

export function pimp (){

    let button = document.querySelector('button')

    // This if -else finds the direction of the pimp button and adds or removes styles accordingly
    if (button.classList.contains('unpimp')){
        button.classList.remove(styles[count])
        direction = -1
    } else {
        button.classList.add(styles[count])
        direction = 1
    }

    // This if-else adds or remove the 'unpimp' class to 'button'
    if (count == 14){
        button.classList.add('unpimp')
    } else if (count == 0){
        button.classList.remove('unpimp')
    }

    // this moves the counter in the direction
    count = count + direction

    if (count == 15){
        count = 14
    } else if (count == -1){
        count = 0
    }

}