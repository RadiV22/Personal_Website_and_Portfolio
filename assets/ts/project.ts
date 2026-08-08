interface ProjectPageItem {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
}

const allProjectsData: ProjectPageItem[] = [
  {
    title: "Guest Book",
    description:
      "Aplikasi buku tamu untuk menambahkan dan menampilkan pesan pengunjung.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "./assets/images/guest-book.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Student Dashboard",
    description:
      "Dashboard untuk menampilkan, mencari, dan menghitung rata-rata nilai siswa.",
    technologies: ["HTML", "CSS", "TypeScript"],
    image: "./assets/images/student-dashboard.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "Aplikasi pencatatan pengeluaran dengan penyimpanan data menggunakan Local Storage.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "./assets/images/expense-tracker.png",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Gaming Store",
    description:
      "Landing page responsive untuk memperkenalkan dan menjual produk gaming.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "./assets/images/gaming-store.png",
    githubUrl: "#",
    demoUrl: "#",
  },
];

function renderAllProjects(projectData: ProjectPageItem[]): void {
  const allProjectsElement = document.getElementById("allProjects");

  if (!(allProjectsElement instanceof HTMLDivElement)) {
    throw new Error("Elemen all projects tidak ditemukan");
  }

  if (projectData.length === 0) {
    allProjectsElement.innerHTML = `
      <p class="project-placeholder">
        Project tidak ditemukan.
      </p>
    `;

    return;
  }

  const projectCards: string = projectData
    .map(function (project: ProjectPageItem): string {
      const technologyBadges: string = project.technologies
        .map(function (technology: string): string {
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

  allProjectsElement.innerHTML = projectCards;
}

renderAllProjects(allProjectsData);

function setupProjectSearch(): void {
  const projectSearchElement = document.getElementById("projectSearch");

  if (!(projectSearchElement instanceof HTMLInputElement)) {
    throw new Error("Elemen project search tidak ditemukan");
  }

  projectSearchElement.addEventListener("input", function (): void {
    const keyword: string = projectSearchElement.value.trim().toLowerCase();

    const filteredProjects: ProjectPageItem[] = allProjectsData.filter(
      function (project: ProjectPageItem): boolean {
        return project.title.toLowerCase().includes(keyword);
      },
    );

    renderAllProjects(filteredProjects);
  });
}

renderAllProjects(allProjectsData);
setupProjectSearch();
