import officeCard from "../assets/Image/Portfolio/Card.png";
import officeBrochure from "../assets/Image/Portfolio/Brochure.png";
import portfolio from "../assets/Image/Portfolio/behance.png";

export const HERO_CONTENT = `Experienced creative professional with 4 years in Graphic Design, 2 years in UI/UX , and 2 years as a 3D Artist. Combines practical design skills with technical know-how to deliver intuitive, responsive, and engaging user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Graphic Designer, UI/UX Designer",
    company: "Unlimited Remit",
    description: `As a Graphic Designer, I create visually striking digital and print assets, including logos, branding materials, and marketing collateral. I collaborate with teams to ensure cohesive design strategies that align with brand identity, effectively engaging the target audience. As a UI/UX Designer, I specialize in designing intuitive, user-centered interfaces, conducting user research, wireframing, and prototyping to deliver seamless, polished experiences across web and mobile platforms. My focus is on merging aesthetics with functionality to ensure the highest level of user satisfaction and interaction.`,
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
    year: "2023 - 2023",
    role: "UI/UX Designer & Frontend Developer",
    company: "NepFilili",
    description: `As a UI/UX Designer, I designed and optimized user-centered interfaces for responsive websites and web apps. I collaborated with cross-functional teams on user research, wireframing, and prototyping, ensuring intuitive and engaging designs. I also implemented my designs into frontend projects using ReactJS, focusing on user experiences, accessibility, and functionality.`,
    technologies: [
      "Figma",
      "Sketch",
      "Adobe XD",
      "HTML",
      "CSS",
      "JavaScript",
      "User Research",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    year: "2022 - 2022",
    role: "3D Modeling and Texturing Artist",
    company: "MAYA Animation Studio",
    description: `At MAYA Animation Studio, I specialized in creating detailed 3D models and textures for interior design and architectural visualization. Using industry-standard software like Maya and Blender, I crafted realistic and visually accurate representations of spaces, furniture, and materials. I collaborated closely with architects and designers to ensure models were optimized for realistic rendering and seamless integration into virtual environments. My work contributed to high-quality architectural visualizations for both design presentations and client projects.`,
    technologies: ["Maya", "Blender", "Substance Painter", "3ds Max"],
  },
  {
    year: "2021 - 2021",
    role: "Graphic Designer",
    company: "Maitreya Bodhi Home Care & Clinic",
    description: `As a Graphic Designer, I developed visually compelling marketing materials including business cards, brochures, and posters. I was responsible for creating brand guidelines, visual assets, and promotional content that resonated with the target audience. This role honed my skills in branding and layout design, allowing me to develop a keen eye for detail while maintaining consistency across all marketing materials.`,
    technologies: ["Adobe Photoshop", "Adobe Illustrator"],
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
