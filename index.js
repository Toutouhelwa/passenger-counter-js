let countEl = document.getElementById("count-el")
let string = document.getElementById("string-el")
 var count = 0;
function increment() {
    count+=1
    countEl.innerText=count
}
function save (){
    let counster = count+" - "
    string.textContent+=counster
    countEl.innerText = 0
    count= 0
}


