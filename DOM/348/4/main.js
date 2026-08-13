let one = document.getElementById("one");
let two = document.getElementById("two");
let res = document.getElementById("sum");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    res.textContent = Number(one.textContent) + Number(two.textContent);
})