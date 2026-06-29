
//This is an array of strings. Keep only those strings that begin with http:// in this array.
const links = [
    "http://google.com",
    "https://facebook.com",
    "http://example.am",
    "ftp://files.server.com",
    "http://mysite.io",
    "just a random string",
    "www.test.com",
    "http://localhost:3000"
];

const newLink = links.filter(link => link.startsWith("http://"));

alert(newLink.join("\n"));