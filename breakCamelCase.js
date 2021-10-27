// нужно разделить слово в camelCase и преобразовать его в отдельную строку 

function splitCamel (str) {
    return str.replace(/([A-Z])/g, ' $1')
}

splitCamel('privetAndrey')
splitCamel('starausKakMogu')