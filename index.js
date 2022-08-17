// javascript

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")



function increase() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = 0
    
}