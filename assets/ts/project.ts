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
    title: "BarberBro",
    description:
      "A barbershop booking and management application with customer bookings, barber schedules, online payments through Midtrans Sandbox, and real-time updates for customers and staff.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
    ],
    image: "./assets/images/barberbro.png",
    githubUrl: "https://github.com/RadiV22/barbershop-management-app",
    demoUrl: "",
  },
  {
    title: "Student Dashboard",
    description:
      "A student dashboard for viewing and searching student records, with automatic calculation of average scores.",
    technologies: ["HTML", "CSS", "TypeScript"],
    image: "./assets/images/student-dashboard.PNG",
    githubUrl: "https://github.com/RadiV22/Student_Dashboard_Typescript",
    demoUrl: "",
  },
  {
    title: "Expense Tracker",
    description:
      "An expense tracking application that saves records in Local Storage to keep data available between visits.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "./assets/images/expense-tracker.PNG",
    githubUrl: "https://github.com/RadiV22/Expense_tracker",
    demoUrl: "",
  },
  {
    title: "Guest Book",
    description:
      "An interactive guest book that allows visitors to add messages and view previous entries.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "./assets/images/guest-book.PNG",
    githubUrl: "https://github.com/RadiV22/Interactive_guest_book",
    demoUrl: "",
  },
  {
    title: "Gaming Store",
    description:
      "A responsive landing page showcasing gaming products with a layout built using Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "./assets/images/gaming-store.PNG",
    githubUrl: "https://github.com/RadiV22/Personal-web-demo",
    demoUrl: "",
  },
];

function renderAllProjects(projectData: ProjectPageItem[]): void {
  const allProjectsElement = document.getElementById("allProjects");

  if (!(allProjectsElement instanceof HTMLDivElement)) {
    throw new Error("Elemen all projects tidak ditemukan");
  }

  if (projectData.length === 0) {
    allProjectsElement.innerHTML = `
      <div class="col-12">
        <p role="status" class="project-placeholder">
          No projects match your search.
        </p>
      </div>
    `;

    return;
  }

  const projectCards = projectData
    .map(function (project: ProjectPageItem): string {
      const technologyBadges = project.technologies
        .map(function (technology: string): string {
          return `
            <span class="project-technology">
              ${technology}
            </span>
          `;
        })
        .join("");

      const demoLink =
        project.demoUrl && project.demoUrl !== "#"
          ? `
            <a
              href="${project.demoUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          `
          : "";

      return `
        <div class="col-md-6 col-lg-4">
          <article class="project-card">
            <img
              src="${project.image}"
              class="project-image"
              alt="Screenshot of ${project.title}"
              loading="lazy"
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

                ${demoLink}
              </div>
            </div>
          </article>
        </div>
      `;
    })
    .join("");

  allProjectsElement.innerHTML = projectCards;
}

function setupProjectSearch(): void {
  const projectSearchElement = document.getElementById("projectSearch");

  if (!(projectSearchElement instanceof HTMLInputElement)) {
    throw new Error("Elemen project search tidak ditemukan");
  }

  projectSearchElement.addEventListener("input", function (): void {
    const keyword = projectSearchElement.value.trim().toLowerCase();

    const filteredProjects = allProjectsData.filter(function (
      project: ProjectPageItem,
    ): boolean {
      const matchesTitle = project.title.toLowerCase().includes(keyword);

      const matchesTechnology = project.technologies.some(function (
        technology: string,
      ): boolean {
        return technology.toLowerCase().includes(keyword);
      });

      return matchesTitle || matchesTechnology;
    });

    renderAllProjects(filteredProjects);
  });
}

renderAllProjects(allProjectsData);
setupProjectSearch();
