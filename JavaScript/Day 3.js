// for (let i = 1; i < 3; i++) { // 1 2
//     console.log('a')
//     for (let j = 1; j < 3; j++) { // 1 2
//         console.log(i,j)
//     }
//     console.log('b')
// }


for (let i = 1; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        for (let k = 1; k < 2; k++) {
            for (let r = 1; r < i; r++) {
                console.log(i, j, k, r)
            }
        }
    }
    console.log()
}

// i 1 j 1 2
// i 2  j 2