// написать функцию которая на входу принимает массив и число, нужно создать массив из четных чисел и сократить 
// его длинну до второго параметра фунцкции, удаляя элементы из начала

function evenNum(arr, number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        newArr.push(arr[i])
      }
    }
    if (newArr.length - 1 >= number) {
       do {
      newArr.shift()
    } while (newArr.length - 1 >= number)
    }
    return newArr
  }
  
  console.log(evenNum([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))

//вариант 2, более лаконичный, но сложный для понимания

const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);