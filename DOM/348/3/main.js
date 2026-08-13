let one = document.getElementById("one");
let two = document.getElementById("two");
let button = document.getElementById("sum");

button.addEventListener("click", function() {
    alert(Number(one.textContent) + Number(two.textContent));
})