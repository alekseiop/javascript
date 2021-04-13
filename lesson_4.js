// Задание 1

var max = 999;
var digit = {
    number: Math.round(Math.random() * max),
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (digit.number <= 9) {
    digit.units = digit.number;
} else if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);

function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

// Задание 2

function totalSum() {
    return this.price * this.quantity;
}

var basket = [
    {
        product: 'pen',
        price: 200,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'pencil',
        price: 700,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'file',
        price: 1100,
        quantity: 3,
        total: totalSum
    },
    {
        product: 'paper',
        price: 150,
        quantity: 5,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

alert('В корзину добавлены следующие товары:' + descBasketPrice(basket) + 'Общая стоимость составляет: ' + countBasketPrice(basket));