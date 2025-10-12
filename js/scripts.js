// footer year
document.getElementById("year").textContent = `2023-${new Date().getFullYear()}`;

// mobile menu (simple)
const menuBtn = document.getElementById("menuBtn");
menuBtn &&
    menuBtn.addEventListener("click", () => {
        alert("Mobile menu — implement as needed");
    });

// form basic handler (non-sending)
const form = document.getElementById("contactForm");
form &&
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Message captured (demo). Hook up your backend/email service.");
        form.reset();
    });

// reveal on scroll using IntersectionObserver
const obs = new IntersectionObserver(
    entries => {
        entries.forEach(ent => {
            if (ent.isIntersecting) {
                ent.target.style.opacity = 1;
                ent.target.style.transform = "none";
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll(".animate-fadeUp").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(12px)";
    obs.observe(el);
});