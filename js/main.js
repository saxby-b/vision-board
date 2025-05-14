const update = document.querySelector("span#year");
const date = new Date();
let year = date.getFullYear();
update.innerText = year;
