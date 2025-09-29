export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("h1");
  headline.textContent = "Restaurant Food Menu";
  content.appendChild(headline);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // ===== Categories =====
  const categories = {
    Burger: [
      { name: "Beef Burger", price: 6 },
      { name: "Chicken Burger", price: 4 },
      { name: "Cheese Burger", price: 7 },
      { name: "Veggie Burger", price: 5 },
    ],
    Pizza: [
      { name: "Margherita", price: 6 },
      { name: "Pepperoni", price: 8 },
      { name: "BBQ Chicken", price: 9 },
      { name: "Veggie Delight", price: 7 },
    ],
    Kebab: [
      { name: "Doner Kebab", price: 6 },
      { name: "Lamb Shish", price: 4 },
      { name: "Mixed Shish", price: 7 },
      { name: "Chicken Shish", price: 5 },
    ],
    Beverages: [
      { name: "Coffee", price: 2.5 },
      { name: "Tea", price: 2 },
      { name: "Orange Juice", price: 3 },
      { name: "Soda", price: 1.5 },
      { name: "Milkshake", price: 4 },
    ],
  };
  const categoryImages = {
    Burger:
      "https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?q=80&w=387&auto=format&fit=crop",
    Pizza:
      "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=327&auto=format&fit=crop",
    Kebab:
      "https://plus.unsplash.com/premium_photo-1663854478523-877ed0dde4af?q=80&w=387&auto=format&fit=crop",
    Beverages:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=387&auto=format&fit=crop",
  };

  Object.keys(categories).forEach((category) => {
    const catCard = document.createElement("div");
    catCard.classList.add("menu-card");
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("diamond");
    const img = document.createElement("img");
    img.src = categoryImages[category];
    img.alt = `${category} image`;
    imgWrapper.appendChild(img);
    catCard.appendChild(imgWrapper);
    const catTitle = document.createElement("h2");
    catTitle.textContent = category;
    catCard.appendChild(catTitle);

    const ul = document.createElement("ul");
    categories[category].forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="dots"></span>
        <span class="item-price">$${item.price}</span>
      `;
      ul.appendChild(li);
    });
    catCard.appendChild(ul);

    menuContainer.appendChild(catCard);
  });

  content.appendChild(menuContainer);
  // Footer
  const footer = document.createElement("div");
  footer.classList.add("menu-footer");
  footer.innerHTML = `
    <p><strong>Free Home Delivery</strong><br>(+0123) 0123 456</p>
    <p>Address: 123 Main St, Addis Ababa, Ethiopia</p>
    <p>Open:  Mon-Fri 8am - 8pm, Sat-Sun 9am - 5pm</p>
    <p>Follow us on 
      <a href="#" target="_blank">Facebook</a>, 
      <a href="#" target="_blank">Instagram</a>, 
      <a href="#" target="_blank">Twitter</a>
    </p>
  `;
  content.appendChild(footer);
}
