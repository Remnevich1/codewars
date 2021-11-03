// отсортировать массив так, что бы нечетные числа в нарастающем порядке, а четные оставались на своих местах

function sortArray(array) {
    let oddArr = array.filter(item => item % 2).sort((a, b) => a - b);
    return array.map(item => {
      if (item % 2 === 0) {
        return item
      } else {
        return oddArr.shift()
      }
    })
  }