// Q4. Count frequency of each alphabet in a text
function getAlphabetFrequency(str) {
    return str.split('').reduce((freq, char) => {
        if (/[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();

            if (freq[char]) {
                freq[char]++;
            }
            else {
                freq[char] = 1;
            }
        }

        return freq;
    }, {})
}

const input = "Hello World";
const result = getAlphabetFrequency(input);
console.log(result);