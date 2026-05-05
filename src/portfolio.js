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

const skills = {
  data: [
    {
      title: "Power Systems Engineering",

      fileName: "DataScienceImg",

      skills: [
        "⚡ Relay Coordination and Fault Analysis for transmission and distribution systems",

        "⚡ Protection Scheme Development and Substation Design",

        "⚡ Power system operational analysis and grid reliability improvement",

        "⚡ SCADA Integration and RTU Configuration support",
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
            color: "#E16737",
          },
        },

        {
          skillName: "SCADA",

          fontAwesomeClassname: "simple-icons:siemens",

          style: {
            color: "#009999",
          },
        },

        {
          skillName: "AutoCAD",

          fontAwesomeClassname: "simple-icons:autodesk",

          style: {
            color: "#E51050",
          },
        },
      ],
    },

    {
      title: "Engineering Tools & Technical Systems",

      fileName: "FullStackImg",

      skills: [
        "⚡ RTU Configuration and SCADA Integration",

        "⚡ Technical reporting, operational planning, and engineering analysis",

        "⚡ Experience working with electrical protection and automation systems",
      ],

      softwareSkills: [
        {
          skillName: "Python",

          fontAwesomeClassname: "logos-python",

          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "C++",

          fontAwesomeClassname: "logos-c-plusplus",

          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Verilog",

          fontAwesomeClassname: "simple-icons:verilog",

          style: {
            color: "#3366CC",
          },
        },

        {
          skillName: "Excel",

          fontAwesomeClassname: "simple-icons:microsoftexcel",

          style: {
            color: "#217346",
          },
        },
      ],
    },

    {
      title: "Leadership & Project Management",

      fileName: "CloudInfraImg",

      skills: [
        "⚡ Leading cross-functional engineering and operational teams",

        "⚡ Risk Mitigation and Project Execution",

        "⚡ Strategic leadership focused on sustainability and operational excellence",
      ],

      softwareSkills: [
        {
          skillName: "Project Management",

          fontAwesomeClassname: "simple-icons:trello",

          style: {
            color: "#0052CC",
          },
        },

        {
          skillName: "Leadership",

          fontAwesomeClassname: "simple-icons:linkedin",

          style: {
            color: "#0A66C2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Bethel University",

      subtitle: "MBA",

      logo_path: "bethel.png",

      alt_name: "Bethel University",

      duration: "Expected Dec 2025",

      descriptions: [
        "⚡ Currently pursuing MBA focused on leadership, strategic management, and organizational development.",
      ],

      website_link: "https://www.bethel.edu/",
    },

    {
      title: "Bethel University",

      subtitle: "BSc Electrical Engineering",

      logo_path: "bethel.png",

      alt_name: "Bethel University",

      duration: "2023",

      descriptions: [
        "⚡ Studied electrical engineering with focus on power systems, protection systems, and operational engineering.",
      ],

      website_link: "https://www.bethel.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PMP",

      subtitle: "- In Progress",

      logo_path: "certification.png",

      certificate_link: "#",

      alt_name: "Project Management",

      color_code: "#0C9D5899",
    },

    {
      title: "Advanced Relay Protection Training",

      subtitle: "- Professional Training",

      logo_path: "certification.png",

      certificate_link: "#",

      alt_name: "Relay Protection",

      color_code: "#1F70C199",
    },

    {
      title: "Leadership & Strategic Management",

      subtitle: "- Professional Training",

      logo_path: "certification.png",

      certificate_link: "#",

      alt_name: "Leadership",

      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",

  subtitle: "Professional Engineering Experience",

  description:
    "Experienced in substation engineering, project management, operational planning, protection systems, and power system modernization initiatives.",

  header_image_path: "experience.svg",

  sections: [
    {
      title: "Work",

      work: true,

      experiences: [
        {
          title: "Substation Engineer & Project Manager",

          company: "Great River Energy",

          company_url: "https://greatriverenergy.com/",

          logo_path: "greatriverenergy.png",

          duration: "Aug 2023 – Present",

          location: "Minnesota, USA",

          description:
            "Led protection and control upgrade projects across multiple substations. Improved fault detection efficiency by 50%, reduced project timelines by 30%, and ensured compliance with NERC, IEEE, ANSI, and NESC standards while collaborating with engineering teams, contractors, and stakeholders.",

          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",

  description:
    "Projects focused on power systems engineering, protection systems, operational efficiency, and grid modernization.",

  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Leadership & Engineering Focus",

  description:
    "Focused on innovation, operational excellence, leadership, and sustainable energy solutions.",

  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "substation-protection",

      name: "Substation Protection & Control Upgrade Initiative",

      createdAt: "2024-01-01T00:00:00Z",

      description:
        "Led modernization of protection and control systems across substations to improve reliability, fault detection, and operational performance.",

      url: "https://github.com/jirehbabalola-sudo/jireh-portfolio",
    },

    {
      id: "relay-coordination",

      name: "Relay Coordination & Fault Current Analysis",

      createdAt: "2024-01-01T00:00:00Z",

      description:
        "Conducted technical studies and developed protection schemes for transformers, breakers, and transmission systems.",

      url: "https://github.com/jirehbabalola-sudo/jireh-portfolio",
    },

    {
      id: "scada-rtu",

      name: "SCADA & RTU Integration Support",

      createdAt: "2024-01-01T00:00:00Z",

      description:
        "Supported RTU configuration and SCADA integration projects for automation and system monitoring improvements.",

      url: "https://github.com/jirehbabalola-sudo/jireh-portfolio",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",

    profile_image_path: "jireh.png",

    description:
      "I am always open to meaningful conversations, professional collaborations, and opportunities that create impact through engineering, leadership, and innovation.",
  },

  blogSection: {
    title: "Core Purpose",

    subtitle:
      "To apply engineering principles, strategic thinking, and leadership to create sustainable impact through innovation, operational excellence, and responsible energy solutions.",

    link: "https://github.com/jirehbabalola-sudo",

    avatar_image_path: "blogs_image.svg",
  },

  addressSection: {
    title: "Address",

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
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
