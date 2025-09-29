export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const headline = document.createElement("h1");
  headline.textContent = "The Cozy Byte";
  headline.classList.add("home-headline");

  const description = document.createElement("p");
  description.textContent =
    "The Cozy Byte is a warm and inviting cafe offering a delightful selection of food and beverages. Join us for a unique dining experience.";
  description.classList.add("home-description");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("home-image-container");
  const imageUrls = [
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=385&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1723120606839-31c009a7cb2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  imageUrls.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `Cafe Image ${index + 1}`;
    img.classList.add("home-image-scattered");
    imageContainer.appendChild(img);
  });

  const workingHours = document.createElement("p");
  workingHours.textContent =
    "Working Hours: Mon-Fri 8am - 8pm, Sat-Sun 9am - 5pm";
  workingHours.classList.add("home-info");

  const address = document.createElement("p");
  address.textContent = "Address: 123 Main St, Addis Ababa, Ethiopia";
  address.classList.add("home-info");

  content.appendChild(headline);
  content.appendChild(imageContainer);
  content.appendChild(description);
  content.appendChild(workingHours);
  content.appendChild(address);
}
