function secondLongestWord(str) {
    let max = '', second = '', word = '';

    for (let c of str + ' ') {
        if (c !== ' ') {
            word += c;
        } else if (word) {
            if (word.length > max.length) {
                second = max;
                max = word;
            } else if (word.length > second.length && word !== max) {
                second = word;
            }
            word = '';
        }
    }

    return second;
}
console.log(secondLongestWord("anoop is anoops"));  

