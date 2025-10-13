// ! >>==================================>> Navbar
let lastScroll = 0;
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const curr = window.scrollY;
    if (curr <= 0) nav.style.transform = "translateY(0)";
    else if (curr > lastScroll) nav.style.transform = "translateY(-100%)";
    else nav.style.transform = "translateY(0)";
    lastScroll = curr;
});


const menuBtn = document.getElementById("menuBtn");
menuBtn && menuBtn.addEventListener("click", () => { alert("Mobile menu — implement as needed"); });

// ! >>==================================>> Animations

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

// ! >>==================================>> Footer

document.getElementById("year").textContent = `2023-${new Date().getFullYear()}`;
// ! >>==================================>> Dynamic Projects

const statuses = {
    completed: { name: "COMPLETED", color: "bg-green-500/20 text-green-400", cardColor: "bg-green-500/5 border-green-500/10" },
    beta: { name: "BETA", color: "bg-lime-500/20 text-lime-400", cardColor: "bg-lime-500/5 border-lime-500/10" },
    inProgress: { name: "IN PROGRESS", color: "bg-yellow-500/20 text-yellow-400", cardColor: "bg-yellow-500/5 border-yellow-500/10" },
    idle: { name: "IDLE", color: "bg-gray-500/20 text-gray-400", cardColor: "bg-gray-500/5 border-gray-500/10" },
    canceled: { name: "CANCELLED", color: "bg-red-500/20 text-red-400", cardColor: "bg-red-500/5 border-red-500/10" },
}

const projects = [
    {
        name: "Prime Dental Clinic",
        desc: "Three.js experiment.",
        image: "../media/web_primedentalclinic.png",
        link: "https://primedentalclinic.net/",
        tech: ["HTML", "Tailwind v3", "JS"],
        tags: ["Clinic"],
        status: statuses.completed,
    },
    {
        name: "Eslam Portfolio",
        desc: "Three.js experiment.",
        image: "../media/web_eslam-portfolio.png",
        link: "https://dreslamnubi.com/",
        tech: ["HTML", "Tailwind v4", "JS"],
        tags: ["Portfolio"],
        status: statuses.completed,
    },
    {
        name: "Abdelmawla Portfolio",
        desc: "Personal site built with Tailwind.",
        image: "../media/web_abdelmawla.png",
        link: "https://abdelmawla.site/",
        tech: ["HTML", "Tailwind v4", "JS"],
        tags: ["Portfolio"],
        status: statuses.completed,
    },
    {
        name: "Kareem Portfolio",
        desc: "Interactive AI admin panel.",
        image: "../media/web_kareem.png",
        link: "https://xrk111.github.io/kareem/",
        tech: ["HTML", "Tailwind v4", "JS"],
        tags: ["Portfolio"],
        status: statuses.inProgress,
    },
];

const projects_container = document.getElementById("projects-container");
projects_container.innerHTML = ""

projects.forEach(p => {
    projects_container.innerHTML += `
    <article class="bg-gray-500/10 rounded-xl p-5 flex flex-col gap-5 animate-fadeUp border border-white/10">
        <img src="${p.image}" alt="project" class="w-full aspect-video object-cover object-top rounded-md" />

        <div class="flex flex-col gap-1">
            <h4 class="font-semibold text-xl text-white">${p.name}</h4>
            <p class="font-normal text-sm text-gray-300">${p.desc}</p>
            <div class="flex gap-3 flex-wrap font-medium text-sm">
                ${p.tech.map(m => `<span class="text-gray-500/80">${m}</span>`).join("\n")}
                ${p.tech.length > 3 ? `<span class="text-gray-600/80">+${p.tech.length - 3} more</span>` : ""}
            </div>
        </div>

        
        <div class="flex justify-between gap-3">
            <span class="w-fit text-sm px-2 py-1 font-light rounded-md ${p.status.color}">${p.status.name}</span>
            <a href="${p.link}" class="text-sm px-3 py-1 bg-cyan-600 text-black flex gap-3 rounded-md"><i class="bi bi-box-arrow-up-right"></i> Go Live</a>
        </div>
    </article>
    `;
});

// ! >>==================================>> Dynamic Skills

const skills = [
    {
        name: "Prime Dental Clinic",
        desc: "Three.js experiment.",
        image: "../media/web_primedentalclinic.png",
        link: "https://primedentalclinic.net/",
        tech: ["HTML", "Tailwind v3", "JS"],
        tags: ["Clinic"],
        status: statuses.completed,
    },
    {
        name: "Eslam Portfolio",
        desc: "Three.js experiment.",
        image: "../media/web_eslam-portfolio.png",
        link: "https://dreslamnubi.com/",
        tech: ["HTML", "Tailwind v4", "JS"],
        tags: ["Portfolio"],
        status: statuses.completed,
    },
    {
        name: "Abdelmawla Portfolio",
        desc: "Personal site built with Tailwind.",
        image: "../media/web_abdelmawla.png",
        link: "https://abdelmawla.site/",
        tech: ["HTML", "Tailwind v4", "JS"],
        tags: ["Portfolio"],
        status: statuses.completed,
    },
    {
        name: "Kareem Portfolio",
        desc: "Interactive AI admin panel.",
        image: "../media/web_kareem.png",
        link: "https://xrk111.github.io/kareem/",
        tech: ["HTML", "Tailwind v4", "JS"],
        tags: ["Portfolio"],
        status: statuses.inProgress,
    },
];

const skills_container = document.getElementById("skills-container");
skills_container.innerHTML = ""

skills.forEach(p => {
    skills_container.innerHTML += `
    <article class="bg-gray-500/10 rounded-xl p-5 flex flex-col gap-5 animate-fadeUp border border-white/10">
        <img src="${p.image}" alt="project" class="w-full aspect-video object-cover object-top rounded-md" />

        <div class="flex flex-col gap-1">
            <h4 class="font-semibold text-xl text-white">${p.name}</h4>
            <p class="font-normal text-sm text-gray-300">${p.desc}</p>
            <div class="flex gap-3 flex-wrap font-medium text-sm">
                ${p.tech.map(m => `<span class="text-gray-500/80">${m}</span>`).join("\n")}
                ${p.tech.length > 3 ? `<span class="text-gray-600/80">+${p.tech.length - 3} more</span>` : ""}
            </div>
        </div>

        
        <div class="flex justify-between gap-3">
            <span class="w-fit text-sm px-2 py-1 font-light rounded-md ${p.status.color}">${p.status.name}</span>
            <a href="${p.link}" class="text-sm px-3 py-1 bg-cyan-600 text-black flex gap-3 rounded-md"><i class="bi bi-box-arrow-up-right"></i> Go Live</a>
        </div>
    </article>
    <article class="bg-blue-800/10 rounded-xl p-5 animate-fadeUp">
        <div class="flex items-center justify-between mb-3">
            <div class="text-sm text-gray-300">HTML / Tailwind</div>
            <div class="text-xs text-gray-400">70%</div>
        </div>
        <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div class="h-2 rounded-full" style="width: 70%; background: linear-gradient(90deg, #065fd4, #388bf8)"></div>
        </div>
    </article>
    `;
});