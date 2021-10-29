//дан словарь, необходимо поменять местами значение и ключ, и если значений одинакового типа была несколько сделать массив из ключей оригинала

let obj = {
    'Ice': 'Cream',
    'Age': '21',
    'Light': 'Cream',
    'Double': 'Cream'
}

let newObj = {};

for (let item in obj) {
    if(!newObj[obj[item]]) {
    newObj[obj[item]] = [];
}
    newObj[obj[item]].push(item);
}

console.log(newObj)