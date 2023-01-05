let num = document.querySelector('input#inum')
let list = document.querySelector('select#ilist')
let res = document.querySelector('div#res')
let numbers = []

// verifying if the number is already in the list
function inList(n, l){ 
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function add(){
    if(isNumber(num.value) && !inList(num.value, numbers)){
        numbers.push(Number(num.value))
        let text = document.createElement('option')
        text.innerHTML = `Number ${num.value} added.`
        list.appendChild(text)
        res.innerHTML = ''
    }else{
        window.alert('Sorry, the element is incorrect or it is already in the list')
    }
    num.value = ''
    num.focus()
}

function sent(){
    let total = numbers.length
    let bigger = Math.max.apply(null, numbers); // Get the biggest array value
    let smaller = Math.min.apply(null, numbers); // Get the smallest array value
    let adding = 0
    let arithmeticAverage = 0
    for(let pos in numbers){
        if(numbers[pos] > bigger)
            bigger = numbers[pos]
        if(numbers[pos] < bigger)
            smaller = numbers[pos]
    }
    arithmeticAverage = adding / total
    res.innerHTML = ''
    res.innerHTML += `<p>You have ${total} numbers added;</p>`
    res.innerHTML += `<p>The biggest value is ${bigger};</p>`
    res.innerHTML += `<p>The smallest value is ${smaller};</p>`
    res.innerHTML += `<p>Adding all the numbers, the result is ${adding};</p>`
    res.innerHTML += `<p>The arithmetic average of the values is ${arithmeticAverage};</p>`
}