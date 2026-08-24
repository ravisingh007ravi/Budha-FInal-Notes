// let str = 'hello'
// let arr = ['h','e','l','l','o']
// let obj = {
//     L:'L',
//     e:"E",
//     L:'R',
//     h:'H',
//     o:'O',
// }

// console.log(str.length)
// console.log(arr.length)
// console.log(obj.length)
// console.log(Object.entries(obj))
// string store value one index add one char
// String is immutable never change by indexing and same variable but we assign whole value

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

// let arr = [1,2,3]

// // add value last index 
// arr.push(5)
// console.log('Add value last index',arr)
// // add value start index 
// arr.unshift(0)
// console.log('Add value start index',arr)

// // Delete value last index 
// arr.pop()
// console.log('Delete value last index',arr)
// // Delete value start index 
// arr.shift()
// console.log('Delete value start index',arr)



// Object 

// let obj ={
//     name:'ABC',
//     age:26
// }

// obj.name2 = 'Hello'
// delete obj.name
// console.log(obj)

let clothData = [
  {
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    title: 'Classic Cotton T-Shirt',
    des: 'Comfortable premium cotton t-shirt for everyday wear.',
    price: 799,
    offer: '20% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3',
    title: 'Denim Jacket',
    des: 'Stylish blue denim jacket with a modern casual fit.',
    price: 2499,
    offer: '30% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273',
    title: 'Casual Shirt',
    des: 'Smart casual shirt made with soft and breathable fabric.',
    price: 1299,
    offer: '15% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    title: 'Slim Fit Jeans',
    des: 'Classic slim-fit jeans designed for comfortable daily wear.',
    price: 1799,
    offer: '25% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1506629905607-d9d4e9c6e3a8',
    title: 'Summer Dress',
    des: 'Elegant lightweight dress perfect for summer outings.',
    price: 1899,
    offer: '35% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    title: 'Women Fashion Top',
    des: 'Trendy top with a stylish design for casual occasions.',
    price: 999,
    offer: '20% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10',
    title: 'Formal White Shirt',
    des: 'Premium white formal shirt suitable for office and events.',
    price: 1499,
    offer: '18% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378',
    title: 'Hoodie',
    des: 'Warm and comfortable hoodie with a modern streetwear style.',
    price: 1599,
    offer: '25% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    title: 'Leather Jacket',
    des: 'Premium-style jacket with a bold and fashionable look.',
    price: 3999,
    offer: '40% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1',
    title: 'Women Casual Dress',
    des: 'Beautiful casual dress designed for comfort and style.',
    price: 2199,
    offer: '30% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d',
    title: 'Polo T-Shirt',
    des: 'Classic polo t-shirt with a comfortable regular fit.',
    price: 1099,
    offer: '15% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
    title: 'Cargo Pants',
    des: 'Relaxed-fit cargo pants with multiple utility pockets.',
    price: 1899,
    offer: '20% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3',
    title: 'Fashion Outfit',
    des: 'Modern fashion outfit designed for stylish everyday looks.',
    price: 2999,
    offer: '35% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',
    title: 'Women Winter Coat',
    des: 'Warm and elegant winter coat with a premium finish.',
    price: 3499,
    offer: '30% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8',
    title: 'Denim Shirt',
    des: 'Versatile denim shirt that works perfectly with jeans or chinos.',
    price: 1399,
    offer: '20% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    title: 'Graphic T-Shirt',
    des: 'Trendy graphic t-shirt with a stylish printed design.',
    price: 899,
    offer: '25% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae',
    title: 'Women Blazer',
    des: 'Elegant blazer suitable for formal and professional occasions.',
    price: 2799,
    offer: '30% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
    title: 'Casual Fashion',
    des: 'Stylish casual outfit made for comfortable everyday wear.',
    price: 1999,
    offer: '20% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27',
    title: 'Winter Sweater',
    des: 'Soft knitted sweater offering warmth and comfortable fitting.',
    price: 1699,
    offer: '25% OFF'
  },
  {
    img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3',
    title: 'Classic Denim Wear',
    des: 'Classic denim fashion piece with a timeless casual style.',
    price: 2299,
    offer: '35% OFF'
  }
];


let arr =[1,11,22,3,2,5]

let max = clothData[0].price
let result = clothData[0]

for(let i=1;i<clothData.length;i++){
    if(max>clothData[i].price){
        max=clothData[i].price
        result=clothData[i]
    }
}

console.log(max)
console.log(result)