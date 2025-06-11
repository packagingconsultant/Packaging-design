// Toggle hamburger menu on mobile
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Optional: modal logic for image cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.getElementById("popup");
    document.getElementById("popup-img").src = card.querySelector("img").src;
    document.getElementById("popup-title").textContent = card.dataset.title;
    document.getElementById("popup-desc").textContent = card.dataset.description;
    modal.style.display = "flex";
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById("popup").style.display = "none";
});
