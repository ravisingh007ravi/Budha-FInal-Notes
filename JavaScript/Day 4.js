

// let str = ''

// for (let i = 1; i < 5; i++) {
//     //    str=str + ' '+ i
//     str += `${i} `
// }

// console.log(str)


// let n = 3 
// first way
// let str = ''
// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=n;j++){
//         str+='* '
//     }
//     console.log(str)
//     str=''
// }

// second way 

// for (let i = 1; i <= n; i++) {
//     let str = ''
//     for(let j=1;j<=n;j++){
//         str+='* '
//     }
//     console.log(str)
// }

//third way 

// let str = ''
// for (let i = 1; i <= n; i++) {
//     for(let j=i;j<=n;j++){
//         str+=j +' '
//     }
//     str+='\n'
// }
// console.log(str)

let n = 3
let result = '' 
// i = 1 
// space  = --
// star = * 
// --*
// i = 2 
// space = - 
// star = ***

// --*
// -***

// i = 3 
// space false
// start *****

// --*
// -***
// ***** 
for (let i = 1; i <= n; i++) {
    for (let j = i; j < n; j++) {
        result += '  '
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        result += '* '
    }

    result += '\n'
}

console.log(result)


// let result = ''
// for(let i =1 ;i<=n;i++){
//     for(let j = 1;j<=2*i-1;j++){
//         result+='*'
//     }
//     result+='\n'
// }

// console.log(result)