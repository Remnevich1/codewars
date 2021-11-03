// получить число, и проверить его на квадратный корень, если оно целое вернуть следущее число в квадрате, если нет, то -1

function findNextSquare(sq) {
    let num = Math.sqrt(sq);
    if (parseInt(num) === num) {
      return Math.pow(num + 1, 2)
    }
    return -1;
  }