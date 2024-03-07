interface item {
    product: string
    price: number
}

//creating an objects

const macBook: item= {
    product: 'M3 MacBook Pro',
    price: 500000
}

const car: item= {
    product: 'lexus',
    price: 87500000

}

console.log(`Model: ${macBook.product}, price: ${macBook.price}`);
console.log(`Car: ${car.product}, price: ${car.price}`);