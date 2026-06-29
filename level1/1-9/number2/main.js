//Given an array of strings, keep only those strings that end in .html in this array.

const files = [
    "index.html",
    "style.css",
    "script.js",
    "about.html",
    "contact.HTML",
    "image.png"
];

const filteredFiles = files.filter(name => name.toLowerCase().endsWith(".html"));

alert(filteredFiles.join("\n"));