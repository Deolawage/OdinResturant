
export default function menu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const title = document.createElement("h2");
    title.textContent = "Our Menu";
    menuDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "Explore our delicious selection of meals.";
    description.classList.add("para");
    menuDiv.appendChild(description);

    const foodItems = [
        { name: "Jollof Rice", description: "Flavorful rice cooked in a rich tomato sauce." },
        { name: "Grilled Chicken", description: "Tender chicken seasoned and grilled to perfection." },
        { name: "Spaghetti", description: "Delicious spaghetti served with a savory sauce." },
        {name: "Fried Rice", description: "Nice Fried Rice Served with Boiled Chcken."}
    ];

    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    foodItems.forEach((item) => {
        const listItem = document.createElement("li");

        const foodName = document.createElement("h3");
        foodName.textContent = item.name;

        const foodDescription = document.createElement("p");
        foodDescription.textContent = item.description;

        listItem.append(foodName, foodDescription);
        menuList.appendChild(listItem);
    });

    menuDiv.appendChild(menuList);

    return menuDiv;
}
