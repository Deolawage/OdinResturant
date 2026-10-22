//home.js
const container = document.createElement("div");
const header = document.createElement("h1");
const para = document.createElement("p");
const secondPara = document.createElement("p")



header.textContent = "Welcome to FoodPlace";
header.classList.add("header-text");
container.appendChild(header);

para.textContent = "Discover delicious food, fresh ingredients, and a warm dining experience."
para.classList.add("para");
container.appendChild(para);

secondPara.textContent = "Fresh ingredients. Wonderful flavors. Every day."
secondPara.classList.add("para");
container.appendChild(secondPara);


export default container;


