// ! >>==================================>> Navbar
let lastScroll = 0;
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const curr = window.scrollY;
    if (curr <= 0) nav.style.transform = "translateY(0)";
    else if (curr > lastScroll) nav.style.transform = "translateY(-100px)";
    else nav.style.transform = "translateY(0)";
    lastScroll = curr;
});

function togglePhoneList() {
    const menuPhone = document.getElementById("menuPhone");
    menuPhone && menuPhone.classList.toggle("hidden")
}

// ! >>==================================>> Effects

const contactSection = document.querySelector("#contact");
const heart = confetti.shapeFromPath({ path: 'M10 30 A20 20 0 0 1 50 30 A20 20 0 0 1 90 30 Q90 60 50 90 Q10 60 10 30Z' });
let fired = false;

window.addEventListener("scroll", () => {
    const rect = contactSection.getBoundingClientRect();
    if (!fired && rect.top < window.innerHeight * 0.8) {
        const end = Date.now() + 500; fired = true;
        function frame() {
            confetti({
                shapes: [heart],
                particleCount: 15,
                spread: 120,
                startVelocity: 50,
                gravity: 0.8,
                scalar: 1.2,
                // colors: ['#73a2fd', '#76db7f', '#e46e6c', '#ffffff'],
                origin: { y: 0.8 }
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        }; frame();
    } else if (fired && rect.top > window.innerHeight * 0.8) fired = false;
});

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

// ! >>==================================>> Dynamic Skills

const skills = [
    {
        name: "HTML",
        persent: "80",
        color: "bg-orange-500",
        bgColor: "bg-orange-500/10 border-orange-500/10",
    },
    {
        name: "TailwindCSS",
        persent: "85",
        color: "bg-sky-600",
        bgColor: "bg-sky-600/10 border-sky-600/10",
    },
    {
        name: "JavaScript",
        persent: "90",
        color: "bg-yellow-500",
        bgColor: "bg-yellow-500/10 border-yellow-500/10",
    },
    {
        name: "React",
        persent: "80",
        color: "bg-sky-400",
        bgColor: "bg-sky-400/10 border-sky-400/10",
    },
    {
        name: "Next.js",
        persent: "75",
        color: "bg-gray-500",
        bgColor: "bg-gray-500/10 border-gray-500/10",
    },
    {
        name: "NodeJS",
        persent: "95",
        color: "bg-green-600",
        bgColor: "bg-green-600/10 border-green-600/10",
    },
];

const skills_container = document.getElementById("skills-container");
skills_container.innerHTML = ""

skills.forEach(s => {
    skills_container.innerHTML += `
    <article class="${s.bgColor} border rounded-xl p-5 animate-fadeUp">
        <div class="flex items-center justify-between mb-3">
            <div class="text-sm text-gray-300">${s.name}</div>
            <div class="text-xs text-gray-400">${s.persent}%</div>
        </div>
        <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <div class="h-2 rounded-full ${s.color}" style="width: ${s.persent}%;"></div>
        </div>
    </article>
    `;
    // <div class="bg-gray-600/10 rounded-xl p-6 text-center animate-fadeUp">
    //     <div class="text-lg font-medium text-white">Tailwind</div>
    //     <p class="text-sm text-gray-300 mt-3">Utility-first CSS for rapid UI.</p>
    // </div>

});


// ! >>==================================>> Dynamic Projects

const statuses = {
    completed: { name: "Completed", color: "bg-green-500/20 text-green-400", cardColor: "bg-green-500/5 border-green-500/10" },
    beta: { name: "Beta", color: "bg-lime-500/20 text-lime-400", cardColor: "bg-lime-500/5 border-lime-500/10" },
    inProgress: { name: "In Progress", color: "bg-yellow-500/20 text-yellow-400", cardColor: "bg-yellow-500/5 border-yellow-500/10" },
    idle: { name: "IDLE", color: "bg-gray-500/20 text-gray-400", cardColor: "bg-gray-500/5 border-gray-500/10" },
    old: { name: "Old Version", color: "bg-gray-500/20 text-gray-400", cardColor: "bg-gray-500/5 border-gray-500/10" },
    canceled: { name: "Canceled", color: "bg-red-500/20 text-red-400", cardColor: "bg-red-500/5 border-red-500/10" },
}

const projects = [
    {
        name: "Prime Dental Clinic",
        desc: "Dental clinic website.",
        image: "../media/web_primedentalclinic.png",
        link: "https://primedentalclinic.net/",
        createDate: '11-2024',
        skills: ["HTML", "TailwindCSS", "JS"],
        tags: ["Clinic"],
        status: statuses.completed,
    },
    {
        name: "Abdelmawla Portfolio",
        desc: "Personal website for Media Buyer.",
        image: "../media/web_abdelmawla.png",
        link: "https://abdelmawla.site/",
        createDate: '9-2025',
        skills: ["HTML", "TailwindCSS", "JS"],
        tags: ["Portfolio"],
        status: statuses.completed,
    },
    {
        name: "Kareem Portfolio",
        desc: "Personal website.",
        image: "../media/web_kareem.png",
        link: "https://xrk111.github.io/kareem/",
        createDate: '9-2025',
        skills: ["HTML", "TailwindCSS", "JS"],
        tags: ["Portfolio"],
        status: statuses.inProgress,
    },
    {
        name: "TempBot",
        desc: "Discord Bot for Managing Temporary Roles.",
        image: "../media/web_tempbot.png",
        link: "https://www.tempbot.xyz",
        createDate: '',
        skills: ["Node.js", "MySQL", "discord.js", "REST API", "HTML", "TailwindCSS", "JS"],
        tags: ["Discord Bot"],
        status: statuses.idle,
    },
    {
        name: "Ahmed Talaat Portfolio",
        desc: "My old personal portfolio website.",
        image: "../media/web_ahmedtalaat.png",
        link: "https://Ziller01.github.io/me",
        createDate: '9-2025',
        skills: ["HTML", "TailwindCSS", "JS"],
        tags: ["Portfolio"],
        status: statuses.old,
    },
];

const projects_container = document.getElementById("projects-container");
projects_container.innerHTML = ""

projects.forEach(p => {
    projects_container.innerHTML += `
    <article class="bg-cyan-500/5 rounded-xl p-5 flex flex-col gap-5 animate-fadeUp border border-white/10">
        <img src="${p.image}" alt="project" class="w-full aspect-video object-cover object-top rounded-md" />

        <div class="flex flex-col gap-1">
            <h4 class="font-semibold text-xl text-white">${p.name}</h4>
            <p class="font-normal text-sm text-gray-300">${p.desc}</p>

            <div class="flex gap-3 flex-wrap text-sm font-normal">
                ${p.skills.slice(0, 3).map(m => `<span class="text-gray-500/80">${m}</span>`).join("\n")}
                ${p.skills.length > 3 ? `<span class="cursor-pointer group text-gray-600/80" data-dropdown="${p.skills.slice(3)}">+${p.skills.length - 3} more</span>` : ""}
            </div>

            <div class="flex gap-3 flex-wrap font-normal text-sm">
                ${p.tags.map(m => `<span class="px-1 border border-cyan-500/10 rounded-sm bg-cyan-500/10 text-cyan-500">${m}</span>`).join("\n")}
            </div>
        </div>

        
        <div class="flex justify-between gap-3">
            <span class="w-fit text-sm px-2 py-1 font-light rounded-full uppercase ${p.status.color}">${p.status.name}</span>
            <a href="${p.link}" target="_blank" class="text-sm px-3 py-1 bg-cyan-400/70 border border-cyan-400/50 hover:bg-cyan-400 hover:shadow-all-md shadow-cyan-400 text-black flex gap-3 rounded-full duration-100"><i class="bi bi-box-arrow-up-right"></i> Go Live</a>
        </div>
    </article>
    `;
});

// ! >>==================================>> Dropdown Menu

document.querySelectorAll("[data-dropdown]").forEach(el => {
    const key = el.dataset.dropdown;
    const items = key.split(',');
    if (!items) return;
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <div class="cursor-default absolute hidden z-10 group-hover:flex flex-col justify-center items-center gap-1 0-translate-x-full bg-gray-950/80 backdrop-blur-sm text-gray-400/80 font-light text-sm border border-white/10 rounded-md shadow-lg overflow-hidden">
            ${items.map(i => `<p class="whitespace-nowrap px-2 py-1">${i}</p>`).join("")}
        </div>
    `;
    el.appendChild(wrapper);
});