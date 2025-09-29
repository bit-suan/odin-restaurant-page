export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";
  headline.classList.add("contact-headline");

  const description = document.createElement("p");
  description.textContent =
    "If you have any questions or feedback, feel free to reach out to us!";
  description.classList.add("contact-description");
  const email = document.createElement("p");
  email.textContent = "Email: info@cozybyte.com";
  email.classList.add("contact-info");
  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";
  phone.classList.add("contact-info");
  // Chef card
  const chef = document.createElement("div");
  chef.classList.add("contact-card");
  chef.innerHTML = `
    <img src="images/chef.jpg" alt=" ">
    <div>
      <h2>Our Chef</h2>
      <p>Chef John Doe is a culinary expert with over 10 years of experience.</p>
      <p class="small-email">Email: chef@cozybyte.com</p>
    </div>
  `;
  // Manager card
  const manager = document.createElement("div");
  manager.classList.add("contact-card");
  manager.innerHTML = `
    <img src="images/manager.jpg" alt=" ">
    <div>
      <h2>Our Manager</h2>
      <p>Manager Jane Smith has been leading our team with passion and dedication.</p>
      <p class="small-email">Email: manager@cozybyte.com</p>
    </div>
  `;
  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(email);
  content.appendChild(phone);
  content.appendChild(manager);
  content.appendChild(chef);
}
