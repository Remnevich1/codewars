// на входу получаем число и делаем из его отдельных значений максимальное число

function changeToMax (num) {
    let newStr = num.toString().split('').map((item) => {
        return +item
    })
    let orderedArr = newStr.sort((a, b) => {
        return b - a
    })
    return +orderedArr.join('')
}

console.log(change(56978))