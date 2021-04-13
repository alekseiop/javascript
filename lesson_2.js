// Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   значение сначала увеличилось на 1,а затем используется в уравнении  
d = b++; alert(d);           // 1   значение сначала используется в уравнении, а затем увеличивается на 
c = (2 + ++a); alert(c);      // 5   2 + (преинкремент ++a = 3)
d = (2 + b++); alert(d);      // 4   2 + (постинкремент b++ = 2)
alert(a);                    // 3      
alert(b);                    // 3       в итоге оба значения увеличились

//Задание 2
// Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// x = 1 + (2 * 2) 
// x = 5    

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

// Задание 8

var val = prompt('Введите число');
var pow = prompt('Введите степень');

function power(val, pow) {
    if (pow < 0) {
        return 1 / val / power(val, -pow - 2)
    }
    else if (pow == 0) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
if (isNaN(val || pow)) {
    alert('Вы ввели не число');
} else {
    alert(power(+val, +pow));
}

