// напишите функцию которая на вход принимает массив и таргетное число. Функция должна вернуть индексы в массиве чисел,
// которые при сумме дают таргетное число

function twoSum (arr, target) {
    for (let i = 0; i< arr.length; i++) {
        for (let j = 1; j< arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
}