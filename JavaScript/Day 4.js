

// let str = ''

// for (let i = 1; i < 5; i++) {
//     //    str=str + ' '+ i
//     str += `${i} `
// }

// console.log(str)


let n = 3 // n row and n col
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

let str = ''
for (let i = 1; i <= n; i++) {
    for(let j=i;j<=n;j++){
        str+='* '
    }
    str+='\n'
}
console.log(str)