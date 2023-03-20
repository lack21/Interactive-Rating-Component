// lear
// Interactive Rating Component

window.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector(".first-section");
  const secondSection = document.querySelector(".second-section");
  const items = document.querySelectorAll(".item");
  const specialNumber = document.querySelector(".spec-number");
  const button = document.querySelector(".btn");
  let number = 0;

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
      number = index + 1;
      specialNumber.innerHTML = number;
    });
  });

  button.addEventListener("click", () => {
    if (!specialNumber.innerHTML) {
      return alert("Please Rate Us!");
    }

    firstSection.style.display = "none";
    secondSection.style.display = "block";
  });
});
