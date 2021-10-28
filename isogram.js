//проверить является ли слово изограммой (без повторяющихся букв)

function isogram (str) {
    return str.split('').every((el, i) => str.indexOf(el) === i)
}

console.log('thomas')
console.log('moose')
console.log('hello')

//вариант 2

function isogram2 (str) {
    return !str.match(/([a-z]).*\1/i);
}

//вариант 3 (самый простой и длинный)

function isogram3 (str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; ++i)
      for(let j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }