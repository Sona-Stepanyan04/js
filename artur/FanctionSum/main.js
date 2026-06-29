function quantity(n) {// n = թե քանի հատ 1 պետքա տպվի և թիվ գումարվի
  let sum = 0;// սա մեր գումարնա նախնական հավասար է 0
  let j = 0;//մինջև j < n թիվը գումարում ենք  j > n էս դեպքում ոչ որովհետև n հատ ա պետք
  let one = "1";// որ 1 տպենք

  for (let i = 0; i < n; i++){// ցիկլ 1 տպելու համար
    one = one + "\n";
    console.log(one);
  }


  function cycle(m) {//ֆունկցիա որ գումարենք n հատ թիվ
    if (j < n) {//թիվը գումարում ենք
      sum += m;
      j++;
      console.log(sum);
      return cycle;// ինքն իրանա էլի retuen անում ու տենց ոնց որ ցիկլ լինի բայց ցիկլ չի
    } else {
      console.log("Done!");// > n էս դեպքում ոչ
      return sum;
    }

  }

  return cycle;//մեր quantity ֆունկցիան return անում cycle ֆունկցիան;
}

quantity(3)(2)(3); 