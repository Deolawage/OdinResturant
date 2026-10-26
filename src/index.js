import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";
import "./style.css";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

// Display the Home page when the application starts.
content.appendChild(home());

// Create a function to switch the displayed page.
function displayPage(page) {
content.replaceChildren(page());
}

// Add event listeners to the navbar buttons.
homeBtn.addEventListener("click", () => {
displayPage(home);
});


menuBtn.addEventListener("click", () => {
displayPage(menu);
});


aboutBtn.addEventListener("click", () => {
displayPage(about);
});