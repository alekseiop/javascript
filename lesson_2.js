//Задание 3
var a = prompt('Введите первое число:');
var b = prompt('Введите второе число:');

if (isNaN(a || b)) {
    alert('Вы ввели не число');
} else {
    if (a > 0 && b > 0) {
        alert(a - b);
    }
    else if (a < 0 && b < 0) {
        alert(a * b);
    }
    else if (a >= 0 && b <= 0 || a <= 0 && b >= 0) {
        alert(+a + +b)
    }
}


//Задание 4
var x = parseInt(prompt('Введите число от 0 до 15'));
if (isNaN(x)) {
    alert('Вы ввели не число');
}
else {
    if (x < 0 || x > 15) {
        alert('Число вне диапазона');
    }
    else {
        switch (x) {
            case 1:
                alert(1);
            case 2:
                alert(2);
            case 3:
                alert(3);
            case 4:
                alert(4);
            case 5:
                alert(5);
            case 6:
                alert(6);
            case 7:
                alert(7);
            case 8:
                alert(8);
            case 9:
                alert(9);
            case 10:
                alert(10);
            case 11:
                alert(11);
            case 12:
                alert(12);
            case 13:
                alert(13);
            case 14:
                alert(14);
            case 15:
                alert(15);
                break;
        }
    }
}

//Задание 5 и 6 вместе

var a = prompt('Введите число');
var b = prompt('Введите число');
var oper = prompt('Введите операцию');

function math(arg1, arg2, oper) {
    var result;
    if (isNaN(a || b)) {
        alert('Вы ввели не число');
    } else {
        function plus(arg1, arg2) {
            return arg1 + arg2;
        }
        function minus(arg1, arg2) {
            return arg1 - arg2;
        }
        function umnoj(arg1, arg2) {
            return arg1 * arg2;
        }
        function del(arg1, arg2) {
            return arg1 / arg2;
        }
    }
    switch (oper) {
        case 'сложение':
            result = plus(arg1, arg2)
            break
        case 'вычитание':
            result = minus(arg1, arg2)
            break
        case 'умножение':
            result = umnoj(arg1, arg2)
            break
        case 'деление':
            result = del(arg1, arg2)
            break
    }
    return result;
}

alert(math(+a, +b, oper))




