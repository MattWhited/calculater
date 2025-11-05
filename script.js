// declaring variables
let results = document.getElementById('resultsBox');
let digitOne = '3';
let digitTwo = '4';
let currentNum = '';

let sum = Number(digitOne) + Number(digitTwo);
let difference = Number(digitOne) - Number(digitTwo);
let product = Number(digitOne) * Number(digitTwo);
let quotient = Number(digitOne) / Number(digitTwo);


// get all of the buttons

document.getElementById('zero').onclick = function() {
    console.log('0')
    results.innerHTML += '0'
}

document.getElementById('one').onclick = function() {
    results.innerHTML += '1'
    currentNum += '1'
    console.log(currentNum)
}

document.getElementById('two').onclick = function() {
    results.innerHTML += '2'
    currentNum += '2'
    console.log(currentNum)
}

document.getElementById('three').onclick = function() {

}

document.getElementById('four').onclick = function() {

}

document.getElementById('five').onclick = function() {

}

document.getElementById('six').onclick = function() {

}

document.getElementById('seven').onclick = function() {

}

document.getElementById('eight').onclick = function() {

}

document.getElementById('nine').onclick = function() {

}

document.getElementById('clear').onclick = function() {
    results.innerHTML = ''
    currentNum = ''
}

document.getElementById('plus').onclick = function() {

}

document.getElementById('minus').onclick = function() {

}

document.getElementById('divide').onclick = function() {

}

document.getElementById('multiply').onclick = function() {

}

document.getElementById('equals').onclick = function() {

}

let operate = () => {
    return Number(digitOne) + Number(digitTwo)
}

console.log(operate())


//store a number
        // write out a number
        // store that in current number
        // when you select operator
        // store current number in digit one
        // set current number back to empty
    // store an operator
    // store a second number
        // write out a number
        // store it in current number
        // when you click equals
        // store that second number in digit two
        // return the results of...
        // (digitOne)(operator)(digitTwo)
    // run that function
    // return that number to the results box
    // store that new number as your first number again
    // clear out the operator and the second number