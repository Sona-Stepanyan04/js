let str = prompt();
let str_l = Math.floor(str.length / 2);
let result = ''

for (let i = 0; i < str_l; i++) {
    let j = str.length - 1 - i;
    if (str[i] == str[j]) {
        result += 'yes'
    } else {
        result += 'no'
    }
}

if (result.includes('no')) {
    alert('No');
} else {
    alert('Yes');
}