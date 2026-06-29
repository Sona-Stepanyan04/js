function sumBinar(a, b) {

  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;

  let carry = 0; 
  let result = "";


  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;

    if (sum === 0) {
      result = "0" + result;
      carry = 0;
    } else if (sum === 1) {
      result = "1" + result;
      carry = 0;
    } else if (sum === 2) {
      result = "0" + result;
      carry = 1;
    } else if (sum === 3) {
      result = "1" + result;
      carry = 1;
    }
  }


  if (carry === 1) result = "1" + result;

  return result;
}

console.log(sumBinar("1010", "101")); 