// проверить строку если в ней содержатся все буквы алфита, игнорируя пробелы и цифры

function panagram(str) {
    let regex = /([a-z])(?!.*\1)/g;
    return (string.toLowerCase().match(regex)|| []).length === 26;
}

panagram("The quick brown fox jumps over the lazy dog.");
panagram("Hello world")