// Scroll animation
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.4 });

cards.forEach(card => observer.observe(card));

// Modal popup
const modal = document.getElementById("popup");
const modalImg = document.getElementById("popup-img");
const modalTitle = document.getElementById("popup-title");
const modalDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.dataset.title;
    const desc = card.dataset.description;

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
