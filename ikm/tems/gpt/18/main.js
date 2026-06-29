let str = prompt("Մուտքագրիր տողը:") || "";

str = str.trim();

// բաժանում ենք բառերի՝ հաշվի առնելով մի քանի բացատ
let words = str.split(/\s+/);

const seen = new Set();
const uniqueWords = [];

for (const w of words) {
  if (!seen.has(w)) {     // եթե դեռ չենք հանդիպել այս բառը
    seen.add(w);          // նշում ենք, որ տեսել ենք
    uniqueWords.push(w);  // ավելացնում ենք արդյունքի մեջ
  }
}

const result = uniqueWords.join(" ");
alert(result);
