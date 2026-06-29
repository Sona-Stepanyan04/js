let str = prompt("Ներածիր տող․") || "";
str = str.trim();

if (str.length === 0) {
  alert("");
} else {
  let words = str.split(/\s+/);

  // գտնում ենք ամենաերկար բառի ինդեքսը
  let longestIndex = 0;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > words[longestIndex].length) {
      longestIndex = i;
    }
  }

  // տեղերով փոխում ենք առաջին բառը և ամենաերկարը
  if (words.length > 1 && longestIndex !== 0) {
    const temp = words[0];
    words[0] = words[longestIndex];
    words[longestIndex] = temp;
  }

  // հանում ենք կրկնվող բառերը՝ պահելով հերթականությունը
  const seen = new Set();
  const uniqueWords = [];

  for (const w of words) {
    if (!seen.has(w)) {
      seen.add(w);
      uniqueWords.push(w);
    }
  }

  alert(uniqueWords.join(" "));
}