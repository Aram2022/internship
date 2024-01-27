const fs = require('fs');

const readFilePath = 'read.txt';

fs.readFile(readFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // let letters = Array.from(data)
    const letters = data.split(/[^a-zA-Z0-9]+/).join('').split('');
    const words = data.split(/[^a-zA-Z0-9]+/);
    const sentences = data.split('. ')
    const lettersObj = {};
    const wordsObj = {};
    

    function counter(arr, obj) {
        let max, n = 0;

        arr.forEach(el => {
            if (obj[el]) obj[el]++;
            else obj[el] = 1;
        })

        for (const key in obj) {
            if (obj[key] > n) {
                n = obj[key];
                max = key;
            }
        }
        if(n < 2) return 0;
        return max;
    }

    const maxLetter = counter(letters, lettersObj)
    const maxWord = counter(words, wordsObj)
    const result = `Words: ${words.length}\nLetters: ${letters.length}\nSentences: ${sentences.length}\nWord frequency: ${maxWord}\nLetter frequency: ${maxLetter}`
    const writeFilePath = 'write.txt';

    fs.writeFile(writeFilePath, result, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });

});


