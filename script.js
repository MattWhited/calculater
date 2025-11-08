// declaring variables
let results = document.getElementById('resultsBox');
let digitOne = '';
let currentNum = '';
let operator = '';

// get all of the buttons

document.getElementById('zero').onclick = function() {
    results.innerHTML += '0'
    currentNum += '0'
}

document.getElementById('one').onclick = function() {
    results.innerHTML += '1'
    currentNum += '1'
}

document.getElementById('two').onclick = function() {
    results.innerHTML += '2'
    currentNum += '2'
}

document.getElementById('three').onclick = function() {
    results.innerHTML += '3'
    currentNum += '3'
}

document.getElementById('four').onclick = function() {
    results.innerHTML += '4'
    currentNum += '4'
}

document.getElementById('five').onclick = function() {
    results.innerHTML += '5'
    currentNum += '5'
}

document.getElementById('six').onclick = function() {
    results.innerHTML += '6'
    currentNum += '6'
}

document.getElementById('seven').onclick = function() {
    results.innerHTML += '7'
    currentNum += '7'
}

document.getElementById('eight').onclick = function() {
    results.innerHTML += '8'
    currentNum += '8'
}

document.getElementById('nine').onclick = function() {
    results.innerHTML += '9'
    currentNum += '9'
}

document.getElementById('clear').onclick = function() {
    results.innerHTML = ''
    currentNum = ''
}

document.getElementById('plus').onclick = function() {
    results.innerHTML += '+'
    digitOne = currentNum
    operator = '+'
    currentNum = ''
}

document.getElementById('minus').onclick = function() {
    results.innerHTML += '-'
    digitOne = currentNum
    operator = '-'
    currentNum = ''
}

document.getElementById('divide').onclick = function() {
    results.innerHTML += '/'
    digitOne = currentNum
    operator = '/'
    currentNum = ''
}

document.getElementById('multiply').onclick = function() {
    results.innerHTML += '*'
    digitOne = currentNum
    operator = '*'
    currentNum = ''
}

// equals button runs the math
document.getElementById('equals').onclick = function() {
    
    if (operator == '+') {
        results.innerHTML = (Number(digitOne) + Number(currentNum));
    } else if (operator == '-') {
        results.innerHTML = (Number(digitOne) - Number(currentNum))
    } else if (operator == '*') {
        results.innerHTML = (Number(digitOne) * Number(currentNum))
    } else if (operator == '/') {
        results.innerHTML = (Number(digitOne) / Number(currentNum))
    } else {
        console.log('ERROR')
    }

    currentNum = results.textContent
}