// задача в том что бы при данных двух массивах сделать один в котором не будет повторяющихся элементов из первого и второго

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
          i--;
      }
    }
  }
    return a
  }


// более элегантное решение 

function arrayDiff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
 }