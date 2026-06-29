let arr = [12, "abc", 248, "123", 7, "007", 480, "hello", 42];
let digitAllArray = [];
let evenArray = [];

// 1) հավաքում ենք միայն թվերը (բնական թվերի ենթազանգված)
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > 0 && Number.isInteger(arr[i])) {
        digitAllArray.push(arr[i]);
    }
}

// 2) ընտրում ենք այն թվերը, որոնց բոլոր թվանշանները even են
for (let i = 0; i < digitAllArray.length; i++) {
    let num = digitAllArray[i];       // օրինակ՝ 248
    let str = String(num);            // "248"
    let allEven = true;               // ենթադրում ենք՝ բոլոր թվանշաններն even են

    for (let j = 0; j < str.length; j++) {
        let digit = Number(str[j]);   // "2" → 2, "4" → 4...
        if (digit % 2 !== 0) {        // եթե digit-ը կենտ է
            allEven = false;
            break;                    // էլիմենտը մեզ պետք չի, դուրս ենք գալիս
        }
    }

    if (allEven) {
        evenArray.push(num);
    }
}

alert(
  "Բնական թվերի ենթազանգվածը: " + digitAllArray.join(", ") +
  "\nԹվեր, որոնց բոլոր թվանշանները զույգ են: " + evenArray.join(", ")
);