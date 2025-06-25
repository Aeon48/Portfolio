import officeCard from "../assets/Image/Portfolio/Card.png";
import officeBrochure from "../assets/Image/Portfolio/Brochure.png";
import portfolio from "../assets/Image/Portfolio/behance.png";

export const HERO_CONTENT = `Experienced creative professional with 4 years in Graphic Design, 2 years in UI/UX , and 2 years as a 3D Artist. Combines practical design skills with technical know-how to deliver intuitive, responsive, and engaging user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Graphic Designer, UI/UX Designer & Frontend Developer",
    company: "Unlimited Remit",
    description: `At Unlimited Remit, I lead visual design efforts across branding, digital marketing, and user interfaces. As a Graphic Designer, I produce visually compelling logos, advertisements, and promotional materials. In my role as a UI/UX Designer, I conduct user research, wireframing, and prototyping to deliver intuitive experiences. I also collaborate closely with frontend developers to implement responsive, accessible interfaces using modern web technologies.`,
    technologies: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "HTML",
      "CSS",
      "ReactJS",
    ],
  },
  {
    year: "2023 - 2024",
    role: "UI/UX Designer & Frontend Developer",
    company: "NepFilili",
    description: `At NepFilili, I played a dual role—designing and implementing responsive, user-centered interfaces. I was involved in user research, interface prototyping, and frontend development using ReactJS. My work ensured consistent design systems across web platforms while enhancing usability and performance.`,
    technologies: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "User Research",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    year: "2021 - 2023",
    role: "3D Modeling and Texturing Artist",
    company: "MAYA Animation Studio",
    description: `At MAYA Animation Studio, I created detailed 3D models and textures for characters, hard surface assets, and environments. I applied realistic materials, handled lighting setups, and collaborated with the animation and technical teams to deliver visually accurate and optimized scenes for production.`,
    technologies: ["Maya", "Blender", "Substance Painter", "3ds Max"],
  },
  {
    year: "2020 - 2021",
    role: "Graphic Designer",
    company: "Maitreya Bodhi Home Care & Clinic",
    description: `As a Graphic Designer, I produced branding and marketing materials across print and digital formats. I was responsible for layout design, image retouching, and project planning. My work supported the clinic’s outreach, brand presence, and patient engagement.`,
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "InDesign"],
  },
];

export const PROJECTS = [
  {
    title: "Remittance Mobile App",
    description:
      "A sleek, user-friendly mobile app design for a remittance website, focusing on easy money transfers, secure transactions, and a smooth UX flow.",
    image: "...", // Keep your existing image URL or update later
    figmaEmbedUrl:
      "https://embed.figma.com/design/KaoKwt19VKNVEZCC30rm8v/Unlimited-App-Demo?node-id=0-1&embed-host=share",
    figmaPrototypeLink:
      "https://www.figma.com/proto/KaoKwt19VKNVEZCC30rm8v/Unlimited-App-Demo?node-id=0-1",
    technologies: [
      "Figma",
      "Mobile Design",
      "UX/UI",
      "Prototyping",
      "Remittance",
    ],
  },

  {
    title: "Travel Agency Website",
    description:
      "A modern and visually appealing website design for a travel agency, focusing on seamless booking experiences and attractive destination showcases.",
    image: "...", // Keep your existing image URL or update later
    figmaEmbedUrl:
      "https://embed.figma.com/design/4xfb30sbawd8XqEJWAoEAs/Untitled?node-id=0-1&embed-host=share",
    figmaPrototypeLink:
      "https://www.figma.com/proto/4xfb30sbawd8XqEJWAoEAs/Untitled?node-id=0-1",
    technologies: ["Figma", "Web Design", "UX/UI", "Prototyping", "Travel"],
  },

  {
    title: "Office Card Design",
    image: officeCard,
    description:
      "A sleek visiting card design for corporate identity and brand awareness.",
    technologies: ["Photoshop", "Illustrator"],
  },

  {
    title: "Office Brochure",
    image: officeBrochure,
    description:
      "A professional brochure design to showcase the company services and values.",
    technologies: ["Photoshop", "InDesign"],
  },
];

export const BEHANCE_PORTFOLIO = {
  title: "My Behance Portfolio",
  description:
    "Explore my full range of creative work on Behance, including Graphic Design and UI/UX Design.",
  link: "https://www.behance.net/abhishetuladha/projects/", // Replace with your actual Behance URL
  image: portfolio, // Optional: You can add a preview image of your Behance profile
};

export const INTERN = [
  {
    year: "2022 - 2022",
    role: "3d Modeling and Texturing Artist",
    company: "MAYA Animation Studio",
    technologies: ["Maya", "Blender", "Substance Painter", "3ds Max"],
  },

  {
    year: "2023 - 2023",
    role: "Full Stack Developer",
    company: "Jaamun Tech",
    technologies: ["MongoDB", "Express", "ReactJS", "NodeJS"],
  },
];

export const CONTACT = {
  address: "Chettrapati, Kathmandu ",
  phoneNo: "+977 9847387469 ",
  email: "abhishek_tuladhar@hotmail.com",
};
