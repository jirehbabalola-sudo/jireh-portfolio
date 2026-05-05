```javascript
/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Jireh Babalola Portfolio",

  description:
    "Substation Engineer, Project Manager, and MBA Candidate passionate about power systems, leadership, operational excellence, and sustainable energy solutions.",

  og: {
    title: "Jireh Babalola Portfolio",
    type: "website",
    url: "https://github.com/jirehbabalola-sudo/jireh-portfolio",
  },
};

// Home Page
const greeting = {
  title: "Jireh Babalola",

  logo_name: "JirehBabalola",

  nickname: "Substation Engineer & MBA Candidate",

  subTitle:
    "Electrical Engineer passionate about power systems, leadership, operational excellence, and sustainable energy solutions.",

  resumeLink:
    "https://drive.google.com/file/d/1TpShSk_yI9atnpY8jcivuUlUax-jylPI/view?usp=sharing",

  portfolio_repository:
    "https://github.com/jirehbabalola-sudo/jireh-portfolio",

  githubProfile: "https://github.com/jirehbabalola-sudo",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/jirehbabalola-sudo",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jirehbablola/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },

  {
    name: "Gmail",
    link: "mailto:Jirehbab@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Section
const skills = {
  data: [
    {
      title: "Power Systems Engineering",

      fileName: "FullStackImg",

      skills: [
        "⚡ Designing and implementing advanced protection and control systems for substations and transmission infrastructure",

        "⚡ Conducting relay coordination studies, fault current analysis, and system resiliency assessments",

        "⚡ Supporting SCADA integration, RTU configuration, automation systems, and operational reliability improvements",

        "⚡ Leading engineering projects focused on operational efficiency, compliance, risk mitigation, and infrastructure modernization",
      ],

      softwareSkills: [
        {
          skillName: "ASPEN",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },

        {
          skillName: "MATLAB",
          fontAwesomeClassname: "simple-icons:mathworks",
          style: {
            color: "#FF6F00",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "AutoCAD",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: {
            color: "#E51050",
          },
        },

        {
          skillName: "LabVIEW",
          fontAwesomeClassname: "simple-icons:ni",
          style: {
            color: "#FFDB00",
          },
        },

        {
          skillName: "SCADA",
          fontAwesomeClassname: "simple-icons:siemens",
          style: {
            color: "#009999",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Bethel University",

      subtitle: "Master of Business Administration (MBA)",

      logo_path: "bethel.png",

      alt_name: "Bethel University",

      duration: "Expected Dec 2025",

      descriptions: [
        "⚡ Pursuing MBA focused on leadership, strategic management, organizational development, and operational excellence.",

        "⚡ Strengthening business leadership capabilities within the energy and infrastructure sector.",
      ],

      website_link: "https://www.bethel.edu/",
    },

    {
      title: "Bethel University",

      subtitle: "Bachelor of Science in Electrical Engineering",

      logo_path: "bethel.png",

      alt_name: "Bethel University",

      duration: "May 2023",

      descriptions: [
        "⚡ Specialized in power systems engineering, protection systems, and substation operations.",

        "⚡ Built strong foundations in engineering analysis, operational planning, automation systems, and infrastructure reliability.",
      ],

      website_link: "https://www.bethel.edu/",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "Project Management Professional (PMP)",

      subtitle: "- In Progress",

      logo_path: "greatriverenergy.png",

      certificate_link: "#",

      alt_name: "PMP",

      color_code: "#0C9D5899",
    },

    {
      title: "NERC Certification",

      subtitle: "- In Progress",

      logo_path: "greatriverenergy.png",

      certificate_link: "#",

      alt_name: "NERC",

      color_code: "#FFBB0099",
    },

    {
      title: "Advanced Relay Protection Training",

      subtitle: "- Completed 2023",

      logo_path: "greatriverenergy.png",

      certificate_link: "#",

      alt_name: "Relay Protection",

      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",

  subtitle: "Engineering, Leadership & Operations",

  description:
    "Experienced in substation engineering, protection systems, project execution, operational leadership, compliance management, and power infrastructure modernization.",

  header_image_path: "experience.svg",

  sections: [
    {
      title: "Work Experience",

      work: true,

      experiences: [
        {
          title: "Substation Engineer & Project Manager",

          company: "Great River Energy",

          company_url: "https://greatriverenergy.com/",

          logo_path: "greatriverenergy.png",

          duration: "Aug 2023 – Present",

          location: "Maple Grove, Minnesota, USA",

          description:
            "Lead substation protection and control upgrade projects while ensuring execution within budget and timeline constraints. Design advanced protection schemes for transformers, breakers, and reactors while improving fault detection efficiency and maintaining compliance with NERC, IEEE, ANSI, and NESC standards. Collaborate with engineers, vendors, contractors, and operational teams to enhance system reliability, operational efficiency, and project success rates.",

          color: "#0879bf",
        },

        {
          title: "System Protection Engineering Intern",

          company: "Xcel Energy",

          company_url: "https://www.xcelenergy.com/",

          logo_path: "greatriverenergy.png",

          duration: "May 2021 – Jul 2023",

          location: "Saint Paul, Minnesota, USA",

          description:
            "Supported substation protection engineering projects involving relay coordination studies, fault current analysis, relay testing, grounding plans, and SCADA integration. Assisted with RTU configuration, automation systems, and protection upgrades while gaining practical experience in utility operations and system resiliency.",

          color: "#FFBB00",
        },
      ],
    },

    {
      title: "Leadership & Professional Involvement",

      experiences: [
        {
          title: "Chair, People of Color Group",

          company: "Great River Energy",

          company_url: "https://greatriverenergy.com/",

          logo_path: "greatriverenergy.png",

          duration: "Present",

          location: "Minnesota, USA",

          description:
            "Lead initiatives focused on diversity, inclusion, mentorship, professional development, and community engagement while organizing internal events and volunteer programs.",

          color: "#0C9D58",
        },

        {
          title: "GRE Ambassador",

          company: "Great River Energy",

          company_url: "https://greatriverenergy.com/",

          logo_path: "greatriverenergy.png",

          duration: "Present",

          location: "Minnesota, USA",

          description:
            "Represent the company at career fairs and professional events while mentoring aspiring engineers and advocating for leadership and workforce development in the energy sector.",

          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",

  description:
    "Projects focused on protection systems, substation modernization, operational reliability, automation, and power systems engineering.",

  avatar_image_path: "projects_image.svg",
};

// Publications Header Replacement
const publicationsHeader = {
  title: "Leadership Philosophy",

  description:
    "I believe leadership is rooted in integrity, accountability, collaboration, and empowering others to grow while delivering sustainable and impactful engineering solutions.",

  avatar_image_path: "projects_image.svg",
};

// Projects / Publications Data
const publications = {
  data: [
    {
      id: "substation-protection-upgrade",

      name: "Substation Protection & Control Upgrade Initiative",

      createdAt: "2024-01-01T00:00:00Z",

      description:
        "Led modernization of protection and control systems across substations to improve reliability, operational efficiency, and compliance standards.",

      url: "https://github.com/jirehbabalola-sudo",
    },

    {
      id: "relay-coordination-analysis",

      name: "Relay Coordination & Fault Current Analysis",

      createdAt: "2024-02-01T00:00:00Z",

      description:
        "Conducted relay coordination studies and developed advanced protection schemes for transformers, breakers, and transmission systems.",

      url: "https://github.com/jirehbabalola-sudo",
    },

    {
      id: "scada-rtu-integration",

      name: "SCADA & RTU Integration Support",

      createdAt: "2024-03-01T00:00:00Z",

      description:
        "Supported SCADA integration and RTU configuration projects to improve communication efficiency, automation, and operational visibility.",

      url: "https://github.com/jirehbabalola-sudo",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",

    profile_image_path: "jireh.png",

    description:
      "I am always open to meaningful conversations, professional collaborations, and opportunities that create impact through engineering, leadership, innovation, and sustainable energy solutions.",
  },

  blogSection: {
    title: "Core Purpose",

    subtitle:
      "To apply engineering principles, strategic thinking, and leadership to create sustainable impact through innovation, operational excellence, and responsible energy solutions.",

    link: "https://www.linkedin.com/in/jirehbablola/",

    avatar_image_path: "projects_image.svg",
  },

  addressSection: {
    title: "Location",

    subtitle: "Maple Grove, Minnesota, USA",

    locality: "Maple Grove",

    country: "USA",

    region: "Minnesota",

    postalCode: "",

    streetAddress: "",

    avatar_image_path: "address_image.svg",

    location_map_link: "https://maps.google.com/",
  },

  phoneSection: {
    title: "Phone Number",

    subtitle: "612-447-3624",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
