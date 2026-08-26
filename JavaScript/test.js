let data = [
{img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',title:'Classic White T-Shirt',des:'Comfortable cotton casual t-shirt',price:'799'},
{img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',title:'Black Casual T-Shirt',des:'Soft black everyday t-shirt',price:'699'},
{img:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3',title:'Blue Denim Jacket',des:'Stylish classic denim jacket',price:'1899'},
{img:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10',title:'Formal White Shirt',des:'Premium fit formal shirt',price:'1299'},
{img:'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab',title:'Beige Casual Shirt',des:'Lightweight casual cotton shirt',price:'999'},
{img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf',title:'Blue Formal Shirt',des:'Smart office wear shirt',price:'1199'},
{img:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273',title:'Black Formal Shirt',des:'Elegant slim fit formal shirt',price:'1399'},
{img:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',title:'Women White Blouse',des:'Elegant white blouse for women',price:'1099'},
{img:'https://images.unsplash.com/photo-1551028719-00167b16eac5',title:'Brown Leather Jacket',des:'Premium leather style jacket',price:'2999'},
{img:'https://images.unsplash.com/photo-1548883354-7622d03aca27',title:'Black Leather Jacket',des:'Classic biker style jacket',price:'3199'},
{img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',title:'Blue Slim Jeans',des:'Stretchable slim fit denim jeans',price:'1499'},
{img:'https://images.unsplash.com/photo-1542272604-787c3835535d',title:'Classic Denim Jeans',des:'Comfortable regular fit jeans',price:'1299'},
{img:'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec',title:'Black Skinny Jeans',des:'Modern skinny fit black jeans',price:'1399'},
{img:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1',title:'Women Blue Jeans',des:'Trendy high waist denim jeans',price:'1599'},
{img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',title:'Women Summer Dress',des:'Beautiful floral summer dress',price:'1699'},
{img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c',title:'Elegant Black Dress',des:'Classic party wear black dress',price:'2199'},
{img:'https://images.unsplash.com/photo-1539008835657-9e8e9680c956',title:'Red Party Dress',des:'Stylish red evening dress',price:'2399'},
{img:'https://images.unsplash.com/photo-1595777457583-95e059d581b8',title:'Pink Midi Dress',des:'Comfortable pink midi dress',price:'1799'},
{img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae',title:'Floral Maxi Dress',des:'Flowy floral maxi dress',price:'1999'},
{img:'https://images.unsplash.com/photo-1551803091-e20673f15770',title:'Yellow Summer Dress',des:'Bright casual summer outfit',price:'1499'},
{img:'https://images.unsplash.com/photo-1551489186-cf8726f514f8',title:'Grey Hoodie',des:'Warm fleece casual hoodie',price:'1299'},
{img:'https://images.unsplash.com/photo-1556821840-3a63f95609a7',title:'Black Pullover Hoodie',des:'Comfortable everyday hoodie',price:'1199'},
{img:'https://images.unsplash.com/photo-1578681994506-b8f463449011',title:'Beige Hoodie',des:'Soft oversized casual hoodie',price:'1399'},
{img:'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633',title:'White Sweatshirt',des:'Premium cotton winter sweatshirt',price:'1099'},
{img:'https://images.unsplash.com/photo-1576566588028-4147f3842f27',title:'Green Sweatshirt',des:'Casual comfortable sweatshirt',price:'1199'},
{img:'https://images.unsplash.com/photo-1583743814966-8936f37f3844',title:'Black Oversized T-Shirt',des:'Trendy oversized streetwear t-shirt',price:'899'},
{img:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',title:'Women Casual Top',des:'Stylish everyday casual top',price:'799'},
{img:'https://images.unsplash.com/photo-1564257577054-1e1e9e5d1e3b',title:'Women Pink Top',des:'Soft pink fashionable top',price:'899'},
{img:'https://images.unsplash.com/photo-1566206091558-7f218b696731',title:'Women Black Top',des:'Minimal black casual top',price:'849'},
{img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',title:'Women Denim Jacket',des:'Classic cropped denim jacket',price:'1799'},
{img:'https://images.unsplash.com/photo-1517841905240-472988babdf9',title:'Women Beige Blazer',des:'Smart casual fitted blazer',price:'2499'},
{img:'https://images.unsplash.com/photo-1591369822096-ffd140ec948f',title:'Women Formal Blazer',des:'Professional office blazer',price:'2699'},
{img:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3',title:'Denim Overshirt',des:'Trendy casual denim overshirt',price:'1599'},
{img:'https://images.unsplash.com/photo-1610652492500-ded49ceeb378',title:'Men Black Polo',des:'Classic premium cotton polo',price:'899'},
{img:'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99',title:'Men Grey Polo',des:'Comfortable slim fit polo shirt',price:'849'},
{img:'https://images.unsplash.com/photo-1625910513413-5fc45d4c2a2d',title:'Men Green Polo',des:'Casual cotton polo t-shirt',price:'799'},
{img:'https://images.unsplash.com/photo-1564859228273-274232fdb516',title:'Men Checked Shirt',des:'Classic checked casual shirt',price:'999'},
{img:'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e',title:'Men Printed Shirt',des:'Modern printed casual shirt',price:'1099'},
{img:'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114',title:'Men Winter Jacket',des:'Warm padded winter jacket',price:'2499'},
{img:'https://images.unsplash.com/photo-1544923246-77307dd628b4',title:'Men Bomber Jacket',des:'Stylish lightweight bomber jacket',price:'2299'},
{img:'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f',title:'Men Wool Coat',des:'Premium winter wool coat',price:'3499'},
{img:'https://images.unsplash.com/photo-1578932750294-f5075e85f44a',title:'Women Wool Coat',des:'Elegant warm winter coat',price:'3299'},
{img:'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc',title:'Women Trench Coat',des:'Classic stylish trench coat',price:'2899'},
{img:'https://images.unsplash.com/photo-1516762689617-e1cffcef479d',title:'Women Casual Jacket',des:'Lightweight everyday jacket',price:'1899'},
{img:'https://images.unsplash.com/photo-1496217590455-aa63a8350eea',title:'Women Fashion Jacket',des:'Trendy street style jacket',price:'1999'},
{img:'https://images.unsplash.com/photo-1551488852-080175b1bcd8',title:'Men Linen Shirt',des:'Breathable linen summer shirt',price:'1199'},
{img:'https://images.unsplash.com/photo-1604594849809-dfedbc827105',title:'Men White Kurta',des:'Traditional comfortable cotton kurta',price:'999'},
{img:'https://images.unsplash.com/photo-1597983073493-88cd35cf93d0',title:'Women Traditional Kurta',des:'Elegant printed ethnic kurta',price:'1299'},
{img:'https://images.unsplash.com/photo-1583391733956-6c78276477e2',title:'Women Ethnic Suit',des:'Beautiful traditional suit set',price:'1999'},
{img:'https://images.unsplash.com/photo-1610030469983-98e550d6193c',title:'Traditional Saree',des:'Elegant printed saree for occasions',price:'2299'},
{img:'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb',title:'Designer Saree',des:'Stylish festive saree collection',price:'2999'}
];

let result =``

for(let v of data){
    result+=`
    <div class="bg-white h-full">
            <img class="h-150 w-full bg-cover object-cover"
                src=${v.img} alt="">
            <h1 class="text-center py-3">${v.title}</h1>
            <h1 class="text-center py-3">${v.des}</h1>
            <h1 class="text-center py-3">$ ${v.price}</h1>
        </div>
    `
}

console.log(result)