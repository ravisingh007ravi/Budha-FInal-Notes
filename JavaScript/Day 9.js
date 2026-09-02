// Higher or function => this function work only array


let arr = [1, 2, 3, 2, 1]
// [6,7,8,7,6]


// const addValue = (arr,add)=>{

//     let result = []
//     for(let num of arr){
//         result.push(num+add)
//     }
//     return result
// }


// console.log(addValue([1, 2, 3, 2, 1],5))


// let normalFUnction = arr.map(function (v, i) { return v + 5 })

// let arrowFunction = arr.map((v, i) => v + 5)

// console.log(normalFUnction)
// console.log(arrowFunction)

// let filter = arr.filter((v)=> v>2)

// console.log(filter)


// let findEven  = arr.filter((v)=>v%2==0)
// let addvalue = findEven.map((v)=>v+20)
// console.log(findEven)
// console.log(addvalue)

let sumallValur = arr.reduce((sum,v)=>{
    console.log(sum,v)
    return sum+v
},0)

console.log(sumallValur)

// let data = [
//     {name:'a',salary:1},
//     {name:'a',salary:2},
//     {name:'a',salary:3},
// ]
// let result = data.reduce((s,a)=>{return s+a.salary},0)
// console.log(result)
// let result = arr.filter((v)=>v%2==0).map((v)=>v+20)

// console.log(result)