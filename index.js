let count = 0
//console.log(count)
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment(){
    count = count + 1
    countEl.innerText = count

}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}

function deleted(){

    if (count > 0){
        count = count - 1
    }
    countEl.textContent = count

}



