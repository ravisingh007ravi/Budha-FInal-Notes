// type of loop  

let str = 'ABA'
// for loop
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}


// while loop  
let i = 0
while (i < str.length) {
    console.log(str[i])
    i++
}

// do while 
let j =0 
do {
    console.log(str[j])
    j++
} while ( j< str.length)


// for of and for in

let obj ={a:1,b:2,c:3}

// for of print only value not index and never modify variable value this method working only array and string
console.log()
for(let char of str){
    console.log(char)
}

// for in work in Obejct, array and sring he is provide value and index 
for(let i in obj){
    console.log(i)
}