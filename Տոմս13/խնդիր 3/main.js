// հարցնում ենք քանի էլեմենտ է ունենալու զանգվածը
let n = Number(prompt("Քանի տող ես ուզում մուտքագրել?") || "0");

let arr = [];

for (let i = 0; i < n; i++) {
  let line = prompt("Մուտքագրիր " + (i + 1) + "-րդ տողը:") || "";
  arr.push(line);
}

let digitCounts = [];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  let toggled = "";
  let digitsInThisString = 0;

  for (let j = 0; j < str.length; j++) {
    const ch = str[j];

    if (ch >= "0" && ch <= "9") {
      // թվանշան է
      digitsInThisString++;
      toggled += ch;          // թվանշանը չի փոխվում
    } else if (ch >= "a" && ch <= "z") {
      // փոքրատառ → մեծատառ
      toggled += ch.toUpperCase();
    } else if (ch >= "A" && ch <= "Z") {
      // մեծատառ → փոքրատառ
      toggled += ch.toLowerCase();
    } else {
      // մնացած սիմվոլները չի փոխվում
      toggled += ch;
    }
  }

  // փոխված տողը պահում ենք զանգվածում
  arr[i] = toggled;
  // թվանշանների քանակը պահում ենք առանձին զանգվածում
  digitCounts.push(digitsInThisString);
}

/* --- ԱՅՍՏԵՂ ՍԿՍՎՈՒՄ Է ԴԱՍԱՎՈՐՈՒՄԸ --- */
// Դասավորում ենք arr և digitCounts զանգվածները միասին
// նվազման կարգով ըստ digitCounts-ի արժեքների

for (let i = 0; i < digitCounts.length - 1; i++) {
  for (let j = 0; j < digitCounts.length - 1 - i; j++) {
    if (digitCounts[j] < digitCounts[j + 1]) {
      
      let tmpCount = digitCounts[j];
      digitCounts[j] = digitCounts[j + 1];
      digitCounts[j + 1] = tmpCount;

      // նույն swap-ը անում ենք նաև համապատասխան տողերի վրա
      let tmpStr = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmpStr;
    }
  }
}


alert(
  "Փոխված տողերը (դասավորված՝ թվանշանների քանակի նվազման կարգով):\n" +
  arr.join("\n") +
  "\n\nԹվանշանների քանակները՝\n" +
  digitCounts.join(", ")
);

