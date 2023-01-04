let num = document.querySelector('input#inum')
let list = document.querySelector('select#ilist')
let res = document.querySelector('div#res')
let numbers = [Number(num.value)]

// verifying if the number is already in the list
function inList(n, l){ 
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if(inList(num.value, numbers)){
        window.alert('Sorry, the element is incorrect or it is already in the list')
    }else{
        window.alert('ok')
    }
}