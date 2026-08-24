let str = 'hello'
let arr = ['h','e','l','l','o']
let obj = {
    L:'L',
    e:"E",
    L:'R',
    h:'H',
    o:'O',
}

// console.log(str.length)
// console.log(arr.length)
// console.log(obj.length)
console.log(Object.entries(obj))
// // string store value one index add one char
// // String is immutable never change by indexing and same variable but we assign whole value

// str[0]='R'
// console.log(str)

// // we add multiple value in one index
// // Array is mutable variable
// arr[0]=['hello',1,3,4,5,'byee']
// console.log(arr)

// let result = ''

// for (let i=0;i<str.length;i++){
//     if(str[i]=='h' || str[i]=='H'){
//         result+='R'
//     }
//     else{
//         result+=str[i]
//     }
// }

// console.log(result)