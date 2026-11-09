"use strict";
const projects = [
    {
        title: "BarberBro",
        description: "A barbershop booking and management application with customer bookings, barber schedules, online payments through Midtrans Sandbox, and real-time updates for customers and staff.",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Socket.IO",
        ],
        image: "./assets/images/barberbro.PNG",
        githubUrl: "https://github.com/RadiV22/barbershop-management-app",
        demoUrl: "",
        featured: true,
    },
    {
        title: "Guest Book",
        description: "Aplikasi buku tamu untuk menambahkan dan menampilkan pesan pengunjung.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "./assets/images/guest-book.PNG",
        githubUrl: "https://github.com/RadiV22/Interactive_guest_book",
        demoUrl: "",
        featured: false,
    },
    {
        title: "Student Dashboard",
        description: "A student dashboard for viewing and searching student records, with automatic calculation of average scores.",
        technologies: ["HTML", "CSS", "TypeScript"],
        image: "./assets/images/student-dashboard.PNG",
        githubUrl: "https://github.com/RadiV22/Student_Dashboard_Typescript",
        demoUrl: "",
        featured: true,
    },
    {
        title: "Expense Tracker",
        description: "An expense tracking application that saves records in Local Storage to keep data available between visits.",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        image: "./assets/images/expense-tracker.PNG",
        githubUrl: "https://github.com/RadiV22/Expense_tracker",
        demoUrl: "",
        featured: true,
    },
    {
        title: "Gaming Store",
        description: "Landing page responsive untuk memperkenalkan dan menjual produk gaming.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        image: "./assets/images/gaming-store.PNG",
        githubUrl: "https://github.com/RadiV22/Personal-web-demo",
        demoUrl: "",
        featured: false,
    },
];
const skills = [
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "TypeScript", icon: "fa-solid fa-code" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "React Native", icon: "fa-brands fa-react" },
    { name: "Tailwind CSS", icon: "fa-solid fa-palette" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express", icon: "fa-solid fa-server" },
    { name: "PostgreSQL", icon: "fa-solid fa-database" },
    { name: "Prisma", icon: "fa-solid fa-layer-group" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "GitHub", icon: "fa-brands fa-github" },
];
function renderFeaturedProjects(projectData) {
    const featuredProjectsElement = document.getElementById("featuredProjects");
    if (!(featuredProjectsElement instanceof HTMLDivElement)) {
        throw new Error("Elemen featured projects tidak ditemukan");
    }
    const featuredProjects = projectData.filter(function (project) {
        return project.featured === true;
    });
    const projectCards = featuredProjects
        .map(function (project) {
        const technologyBadges = project.technologies
            .map(function (technology) {
            return `
            <span class="project-technology">
              ${technology}
            </span>
          `;
        })
            .join("");
        return `
        <div class="col-md-6 col-lg-4">
          <article class="project-card">
            <img
              src="${project.image}"
              class="project-image"
              alt="Tampilan proyek ${project.title}"
            />

            <div class="project-content">
              <h3>${project.title}</h3>

              <p>${project.description}</p>

              <div class="project-technologies">
                ${technologyBadges}
              </div>

              <div class="project-links">
                <a
                  href="${project.githubUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                                ${project.demoUrl && project.demoUrl !== "#"
            ? `
                      <a
                        href="${project.demoUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    `
            : ""}
              </div>
            </div>
          </article>
        </div>
      `;
    })
        .join("");
    featuredProjectsElement.innerHTML = projectCards;
}
function renderSkills(skillData) {
    const skillsListElement = document.getElementById("skillsList");
    if (!(skillsListElement instanceof HTMLDivElement)) {
        throw new Error("Elemen skills list tidak ditemukan");
    }
    const skillCards = skillData
        .map(function (skill) {
        return `
        <div class="col-6 col-md-4 col-lg-2">
          <article class="skill-card">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
          </article>
        </div>
      `;
    })
        .join("");
    skillsListElement.innerHTML = skillCards;
}
function setupContactForm() {
    const contactFormElement = document.getElementById("contactForm");
    const contactNameElement = document.getElementById("contactName");
    const contactEmailElement = document.getElementById("contactEmail");
    const contactSubjectElement = document.getElementById("contactSubject");
    const contactMessageElement = document.getElementById("contactMessage");
    const contactErrorElement = document.getElementById("contactError");
    if (!(contactFormElement instanceof HTMLFormElement) ||
        !(contactNameElement instanceof HTMLInputElement) ||
        !(contactEmailElement instanceof HTMLInputElement) ||
        !(contactSubjectElement instanceof HTMLInputElement) ||
        !(contactMessageElement instanceof HTMLTextAreaElement) ||
        !(contactErrorElement instanceof HTMLParagraphElement)) {
        throw new Error("Elemen contact form tidak ditemukan");
    }
    // Variabel dengan tipe yang sudah pasti
    const contactForm = contactFormElement;
    const contactNameInput = contactNameElement;
    const contactEmailInput = contactEmailElement;
    const contactSubjectInput = contactSubjectElement;
    const contactMessageInput = contactMessageElement;
    const contactErrorText = contactErrorElement;
    const contactDraftKey = "contactDraft";
    const whatsappNumber = "6281296112577";
    function saveContactDraft() {
        const contactDraft = {
            name: contactNameInput.value,
            email: contactEmailInput.value,
            subject: contactSubjectInput.value,
            message: contactMessageInput.value,
        };
        localStorage.setItem(contactDraftKey, JSON.stringify(contactDraft));
    }
    function loadContactDraft() {
        const savedContactDraft = localStorage.getItem(contactDraftKey);
        if (savedContactDraft === null) {
            return;
        }
        const contactDraft = JSON.parse(savedContactDraft);
        contactNameInput.value = contactDraft.name;
        contactEmailInput.value = contactDraft.email;
        contactSubjectInput.value = contactDraft.subject;
        contactMessageInput.value = contactDraft.message;
    }
    contactNameInput.addEventListener("input", saveContactDraft);
    contactEmailInput.addEventListener("input", saveContactDraft);
    contactSubjectInput.addEventListener("input", saveContactDraft);
    contactMessageInput.addEventListener("input", saveContactDraft);
    loadContactDraft();
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = contactNameInput.value.trim();
        const email = contactEmailInput.value.trim();
        const subject = contactSubjectInput.value.trim();
        const message = contactMessageInput.value.trim();
        if (name === "" || email === "" || subject === "" || message === "") {
            contactErrorText.textContent = "Semua kolom wajib diisi.";
            return;
        }
        contactErrorText.textContent = "";
        const whatsappMessage = `
    Halo, saya ${name}.

    Email: ${email}
    Subject: ${subject}

    Pesan:
    ${message}
    `;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
}
renderFeaturedProjects(projects);
renderSkills(skills);
setupContactForm();
//# sourceMappingURL=index.js.map