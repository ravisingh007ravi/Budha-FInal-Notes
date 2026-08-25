// function are 2 type

// normal and arrow function

// Normal is global function never console.log inside function if we use clg only find error
// user defined function

function evenOrOdd(n) {
    return n % 2 == 0 ? "Even" : "Odd"
}

//console.log(evenOrOdd(5))
//console.log(evenOrOdd(510))
//console.log(evenOrOdd(75))


function ptn1 (n){
    let result = ''

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            result+='* '
        }
        result+='\n'
    }

    return result
}

//console.log(ptn1(5))
//console.log(ptn1(2))