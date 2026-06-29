//Hello, World! This is a test string Hello again!
let str = prompt("Մուտքագրիր տողը:") || "";

// 1) մաքրում ենք տողը՝
// - հանում ենք եզրերի space-երը
// - դարձնում ենք փոքրատառ
// - պահում ենք միայն տառերը և space-երը
str = str
  .trim()
  .toLowerCase()
  .split("")                                     // "abc" → ["a","b","c"]
  .filter(c => (c >= "a" && c <= "z") || c === " ")
  .join("");                                     // ["a","b"] → "ab"

// 2) բաժանում ենք բառերի՝ մի քանի space-երն էլ ճիշտ աշխատեն
let words = str.split(/\s+/);                    // ["hello","world",...]


// 3) հանում ենք կրկնվող բառերը՝ պահելով հերթականությունը
const seen = new Set();
const uniqueWords = [];

for (const w of words) {
  if (!seen.has(w)) {
    seen.add(w);
    uniqueWords.push(w);
  }
}

// Եթե բառեր չկան, ուղղակի դատարկ թողնենք
if (uniqueWords.length === 0) {
  alert("");
} else {
  // 4) առաջին բառը պահում ենք
  let first = uniqueWords[0];

  // 5) գտնում ենք ամենաերկար բառի ինդեքսը
  let longestIndex = 0;

  for (let i = 1; i < uniqueWords.length; i++) {
    if (uniqueWords[i].length > uniqueWords[longestIndex].length) {
      longestIndex = i;
    }
  }

  // 6) փոխում ենք տեղերով՝ առաջին և ամենաերկար բառերը
  uniqueWords[0] = uniqueWords[longestIndex];
  uniqueWords[longestIndex] = first;

  // 7) նորից տող ենք սարքում
  const result = uniqueWords.join(" ");

  alert(result);
}

