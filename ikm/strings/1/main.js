let str = prompt();

str = str.replaceAll('', '');           // հեռացնում է բոլոր բացատները
str = str.toUpperCase();               // մեծատառերի փոխարկում
let str_length = Math.floor(str.length / 2);  // կիսով կտրած երկարություն
str = str.slice(0, str_length);        // կտրում ենք տեքստի առաջին կեսը
alert(str);                            // ցույց է տալիս կիսով կտրած տեքստը