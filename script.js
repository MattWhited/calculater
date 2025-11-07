// declaring variables
let results = document.getElementById('resultsBox');
let digitOne = '';
let digitTwo = '4';
let currentNum = '';
let currentEquation = '';

let operator = '';




// get all of the buttons

document.getElementById('zero').onclick = function() {
    results.innerHTML += '0'
    currentNum += '0'
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
    // store current num in digit one
    digitOne = currentNum
    // selecting operator
        // send sum to current equation
    operator = '+'
}

document.getElementById('minus').onclick = function() {

}

document.getElementById('divide').onclick = function() {

}

document.getElementById('multiply').onclick = function() {

}

document.getElementById('equals').onclick = function() {

    if (operator = '+') {
        console.log(Number(digitOne) + Number(digitTwo));
    } 
    //let difference = Number(digitOne) - Number(digitTwo);
    //let product = Number(digitOne) * Number(digitTwo);
    //let quotient = Number(digitOne) / Number(digitTwo); 
}



let operate = () => {
    
}



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