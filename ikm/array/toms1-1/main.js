let arr = [12, 305, 7, 41];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];             
  let str = String(num);        
  let sum = 0;                   

  for (let j = 0; j < str.length; j++) {
    sum += Number(str[j]);        // "1" → 1, "2" → 2
  }

  alert("Թիվը " + num + " → թվանշանների գումարը = " + sum);
}