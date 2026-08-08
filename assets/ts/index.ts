interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Guest Book",
    description:
      "Aplikasi buku tamu untuk menambahkan dan menampilkan pesan pengunjung.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "./assets/images/guest-book.png",
    githubUrl: "https://github.com/RadiV22/Interactive_guest_book",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Student Dashboard",
    description:
      "Dashboard untuk menampilkan, mencari, dan menghitung rata-rata nilai siswa.",
    technologies: ["HTML", "CSS", "TypeScript"],
    image: "./assets/images/student-dashboard.png",
    githubUrl: "https://github.com/RadiV22/Student_Dashboard_Typescript",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Expense Tracker",
    description:
      "Aplikasi pencatatan pengeluaran dengan penyimpanan data menggunakan Local Storage.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    image: "./assets/images/expense-tracker.png",
    githubUrl: "https://github.com/RadiV22/Expense_tracker",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Gaming Store",
    description:
      "Landing page responsive untuk memperkenalkan dan menjual produk gaming.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "./assets/images/gaming-store.png",
    githubUrl: "https://github.com/RadiV22/Personal-web-demo",
    demoUrl: "#",
    featured: false,
  },
];

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
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

interface ContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function renderFeaturedProjects(projectData: Project[]): void {
  const featuredProjectsElement = document.getElementById("featuredProjects");

  if (!(featuredProjectsElement instanceof HTMLDivElement)) {
    throw new Error("Elemen featured projects tidak ditemukan");
  }

  const featuredProjects: Project[] = projectData.filter(function (
    project: Project,
  ): boolean {
    return project.featured === true;
  });

  const projectCards: string = featuredProjects
    .map(function (project: Project): string {
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

  featuredProjectsElement.innerHTML = projectCards;
}

function renderSkills(skillData: Skill[]): void {
  const skillsListElement = document.getElementById("skillsList");

  if (!(skillsListElement instanceof HTMLDivElement)) {
    throw new Error("Elemen skills list tidak ditemukan");
  }

  const skillCards: string = skillData
    .map(function (skill: Skill): string {
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

function setupContactForm(): void {
  const contactFormElement = document.getElementById("contactForm");
  const contactNameElement = document.getElementById("contactName");
  const contactEmailElement = document.getElementById("contactEmail");
  const contactSubjectElement = document.getElementById("contactSubject");
  const contactMessageElement = document.getElementById("contactMessage");
  const contactErrorElement = document.getElementById("contactError");

  if (
    !(contactFormElement instanceof HTMLFormElement) ||
    !(contactNameElement instanceof HTMLInputElement) ||
    !(contactEmailElement instanceof HTMLInputElement) ||
    !(contactSubjectElement instanceof HTMLInputElement) ||
    !(contactMessageElement instanceof HTMLTextAreaElement) ||
    !(contactErrorElement instanceof HTMLParagraphElement)
  ) {
    throw new Error("Elemen contact form tidak ditemukan");
  }

  // Variabel dengan tipe yang sudah pasti
  const contactForm: HTMLFormElement = contactFormElement;
  const contactNameInput: HTMLInputElement = contactNameElement;
  const contactEmailInput: HTMLInputElement = contactEmailElement;
  const contactSubjectInput: HTMLInputElement = contactSubjectElement;
  const contactMessageInput: HTMLTextAreaElement = contactMessageElement;
  const contactErrorText: HTMLParagraphElement = contactErrorElement;

  const contactDraftKey: string = "contactDraft";
  const whatsappNumber: string = "6281296112577";

  function saveContactDraft(): void {
    const contactDraft: ContactDraft = {
      name: contactNameInput.value,
      email: contactEmailInput.value,
      subject: contactSubjectInput.value,
      message: contactMessageInput.value,
    };

    localStorage.setItem(contactDraftKey, JSON.stringify(contactDraft));
  }

  function loadContactDraft(): void {
    const savedContactDraft: string | null =
      localStorage.getItem(contactDraftKey);

    if (savedContactDraft === null) {
      return;
    }

    const contactDraft: ContactDraft = JSON.parse(savedContactDraft);

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

contactForm.addEventListener(
  "submit",
  function (event: SubmitEvent): void {

    event.preventDefault();

    const name: string = contactNameInput.value.trim();
    const email: string = contactEmailInput.value.trim();
    const subject: string = contactSubjectInput.value.trim();
    const message: string = contactMessageInput.value.trim();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      contactErrorText.textContent = "Semua kolom wajib diisi.";
      return;
    }

    contactErrorText.textContent = "";

    const whatsappMessage: string = `
    Halo, saya ${name}.

    Email: ${email}
    Subject: ${subject}

    Pesan:
    ${message}
    `;

    const encodedMessage: string =
      encodeURIComponent(whatsappMessage);

    const whatsappUrl: string =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    localStorage.removeItem(contactDraftKey);
    contactForm.reset();
  },
);
}

renderFeaturedProjects(projects);
renderSkills(skills);
setupContactForm();
