let btn = document.getElementById("btn");

btn.addEventListener("dblclick", function() {
    btn.innerText = "double Click Me";
});

btn.addEventListener("mouseover", function() {
    btn.innerText = "mouseover";
})

btn.addEventListener("mouseout", function() {
    btn.innerText = "mouseout";
})