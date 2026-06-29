//abc 1test 2hello hello3 5 9x - 10years

const str = prompt("Enter a string:");

const result = str
  .split(/\s+/) //Տողը բաժանում է բառերի՝ ըստ բացատների: \s նշանակում է ցանկացած whitespace (բացատ, tab, նոր տող)  + նշանակում է 1 կամ ավելի
  .filter(word => /^\d/.test(word)) //Ֆիլտրում է միայն այն բառերը, որոնք սկսվում են թվով: ^\d նշանակում է, որ տողը սկսվում է թվանշանով
  .join(" "); //Միավորում է ֆիլտրված բառերը մեկ տողում՝ բացատներով բաժանված


alert(result);