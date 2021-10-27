// найти максимальное и минимальное значение в массиве

//старая версия
function min(arr) {
    if (Array.isArray(arr)) {
        let a = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < a) {
                a = arr[i]
            }
        }
        return a
    } else {
        alert('Введите массив')
    }
}

function max(arr) {
    if (Array.isArray(arr)) {
        let b = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > b) {
                b = arr[i]
            }
        }
        return b
    } else {
        alert('Введите массив')
    }
}

min([1, -533, 10]);
max([1000, 7, 34]);
max(3);
min('Privet!');

// ES6

function min (arr) {
    return Math.min(...arr);
} 

function max (arr) {
    return Math.max(...arr);
} 