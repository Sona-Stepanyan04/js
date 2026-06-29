const str = "Hello, World! 123";

if (str.length > 0) {                     // որ ապահով լինենք, տողը դատարկ չէ
    const lastChar = str[str.length - 1]; // վերցնում ենք վերջին սիմվոլը

    if (lastChar >= '0' && lastChar <= '9') { // եթե սա digit սիմվոլ է
        alert("The string ends with a digit.");
    } else {
        alert("The string does not end with a digit.");
    }
} else {
    alert("Empty string.");
}