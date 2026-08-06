"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projects = [
    {
        title: "Guest Book",
        description: "Aplikasi buku tamu untuk menambahkan dan menampilkan pesan pengunjung.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "./assets/images/guest-book.png",
        githubUrl: "#",
        demoUrl: "#",
        featured: true,
    },
    {
        title: "Student Dashboard",
        description: "Dashboard untuk menampilkan, mencari, dan menghitung rata-rata nilai siswa.",
        technologies: ["HTML", "CSS", "TypeScript"],
        image: "./assets/images/student-dashboard.png",
        githubUrl: "#",
        demoUrl: "#",
        featured: true,
    },
    {
        title: "Expense Tracker",
        description: "Aplikasi pencatatan pengeluaran dengan penyimpanan data menggunakan Local Storage.",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        image: "./assets/images/expense-tracker.png",
        githubUrl: "#",
        demoUrl: "#",
        featured: true,
    },
    {
        title: "Gaming Store",
        description: "Landing page responsive untuk memperkenalkan dan menjual produk gaming.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        image: "./assets/images/gaming-store.png",
        githubUrl: "#",
        demoUrl: "#",
        featured: false,
    },
];
const skills = [
    {
        name: "HTML",
        icon: "fa-brands fa-html5",
    },
    {
        name: "CSS",
        icon: "fa-brands fa-css3-alt",
    },
    {
        name: "JavaScript",
        icon: "fa-brands fa-js",
    },
    {
        name: "TypeScript",
        icon: "fa-solid fa-code",
    },
    {
        name: "Bootstrap",
        icon: "fa-brands fa-bootstrap",
    },
    {
        name: "Git",
        icon: "fa-brands fa-git-alt",
    },
    {
        name: "GitHub",
        icon: "fa-brands fa-github",
    },
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

                <a
                  href="${project.demoUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      `;
    })
        .join("");
    featuredProjectsElement.innerHTML = projectCards;
}
renderFeaturedProjects(projects);
//# sourceMappingURL=index.js.map