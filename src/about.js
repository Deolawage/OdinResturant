const aboutDiv = document.createElement("div");
const title = document.createElement("h2");
const paragraph = document.createElement("p");
const sideImg = document.createElement("div");



title.textContent = "A Little About Us";
aboutDiv.appendChild(title);

paragraph.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ducimus accusamus, vero sit voluptate corporis quo labore voluptatem! Accusantium, dolor"
paragraph.classList.add("para");
aboutDiv.appendChild(paragraph);

sideImg.classList.add("about-img");
aboutDiv.appendChild(sideImg);

export default aboutDiv;