//Given an array of numbers, increase each number in the array by 10 percent.

const prices = [100, 250, 50, 1200, 380];

// const increasedPrices = prices.map(price => (price * 1.1).toFixed(0));

const increasedPrices = prices.map(price => Math.round(price * 1.1));

alert(increasedPrices.join("\n"));