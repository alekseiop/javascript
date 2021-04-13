//Задание 1

var max = 100;
var primes = [2, 3];

var n = 4;
while (n < max) {
    var j = 0;
    while (j < primes.length) {
        if (n % primes[j] === 0) {
            break;
        }
        j++;
    }
    if (j === primes.length) {
        primes.push(n);
    }
    n++;
}

console.log(primes);

// Задание 2

let basket = [
    {
        product: 'pen',
        price: (50, 100)
    },
    {
        product: 'pencil',
        price: (50, 100)
    },
    {
        product: 'file',
        price: (50, 100)
    },
    {
        product: 'paper',
        price: (50, 100)
    }
];
let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log('Товар ' + prod.product + 'стоит: ' + prod.price);
}

console.log('Стоимость корзины: ' + basketPrice + ' у.е.');

// Задание 3

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log('Стоимость корзины: ' + countBasketPrice(basket) + ' у.е. ');

// Задание 4

var i;
for (i = 0; i <= 9; i++) {
    console.log(i);
}

// Задание 5

var arr = [];
var end = 0;
while (end < 20) {
    end++;
    arr.push('x');
    console.log(arr);
}