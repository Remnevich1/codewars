// вернуть проверку на число, что бы его длина была 4 или 6, и присутствовали только числа

function validatePIN (pin) {
    let regex = /^(\d{6}|\d{4})$/g
    return regex.test(pin)
  }