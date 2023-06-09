import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  flutter,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  untangled,
  poster,
  design,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Event Manager",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "GitHub",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cheif Executive Officer",
    company_name: "Rent Rave",
    icon: rent,
    iconBg: "#E6DEDD",
    date: "November 2022 - Present",
    points: [
      "Maintaining website and all other social media handles.",
      "Product and catalouge management to ensure smooth sales",
      "Implementing and developing marketing strategies",
      "Photography, videography and content creation for social media campaigns",
    ],
  },
  {
    title: "GSoC Head",
    company_name: "FOSS MEC",
    icon: foss,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Proficient in team and project management, demonstrated through successful completion of  projects.",
      "Skilled in researching organizations and solving technical problems",
      "Able to communicate effectively with mentors and peers, and actively participate in technical communities and events",
      "Participating in code documentation and ensuring active participation of all members.",
    ],
  },
  {
    title: "Marketing Coordinator",
    company_name: "TEDX MEC",
    icon: ted,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Proficient in lead generation, marketing calls.",
      "Demonstrated ability to successfully sell event tickets.",
      "Skilled in social media marketing, including content creation, platform management, and audience engagement. ",
      
    ],
  },
  {
    title: "Designer",
    company_name: "Developer's Student Club, MEC",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Proficient in designing posters, logos, and banners for various club activities.",
      "Demonstrated creativity and innovation in developing concepts and generating ideas for club activities",
      "Created certificates and posters for various events",
    ],
  },
  {
    title: "Social Media Marketing - Lead Intern",
    company_name: "Take it Eazy Media",
    icon: tiem,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Maintaining website and all other social media handles.",
      "Collaborating with cross-functional teams to ensure smooth execution of marketing strategies",
      "Implementing marketing strategies for music promotion through Spotify marketing, influencer marketing etc.",
      "Curation and design of social media content, challenges, strategies etc",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Energy and enthusiasm of our beloved first-year's powered TEDxMEC 2023 ❤️Theertha did an amazing job with all the responsibilities she was assigned. Keep evolving; Let's see what the future holds :)",
    name: "Amith Tony",
    designation: "COO",
    company: "TEDX MEC",
    image: "https://media.licdn.com/dms/image/D4D03AQGO3vWiJhfCQQ/profile-displayphoto-shrink_800_800/0/1669533819598?e=1687996800&v=beta&t=_nXixMIFVvObufbpBoc4RQd9ub6kGVg6LCHSCLEfJVQ",
  },
  {
    testimonial:
      "I can't wait to see what you are going to do with your life Theertha Avinash! Super happy with what you did for TEDxMEC! ❤️",
    name: "Vishnumaya Unni",
    designation: "Licensee",
    company: "TEDX MEC",
    image: "https://media.licdn.com/dms/image/D5603AQF9ABcESaSLfw/profile-displayphoto-shrink_800_800/0/1678382765612?e=1687996800&v=beta&t=bpRoBfdXFWsh9L5KLNv5PdTOkH6KwngLq19obCel5Ak",
  },
  {
    testimonial:
      "Your performance was amazing. During the review meeting, Principal, Model Engg College was not hesitant to special mention your name.Kudos Theertha.",
    name: "Rashid M E",
    designation: "Asst Professor",
    company: "Electronics at Model Engineering College",
    image: "https://media.licdn.com/dms/image/C5603AQFsQog-bGL-xA/profile-displayphoto-shrink_800_800/0/1595320542201?e=1687996800&v=beta&t=WII1m59rNM-XOTAr_5SJtJihp6-WXESOhmeA09lP7Us",
  },
];


const projects = [
  {
    name: "Untangled",
    description:
      "Untangled is a depression detection website. We understand how important it is to prioritize your mental health. That's why we've created a user-friendly website where you can access reliable information and resources to help you identify, understand, and manage mental health issues..",
    tags: [
      {
        name: "hack",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "mentalhealth",
        color: "pink-text-gradient",
      },
    ],
    image: untangled,
    source_code_link: "https://github.com/",
  },
  {
    name: "Design Portfolio",
    description:
      "This little Figma file contains 90% of my design projects, which I mostly did for fun and some official works as well.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "designer",
        color: "green-text-gradient",
      },
      {
        name: "graphicdesigner",
        color: "pink-text-gradient",
      },
    ],
    image: poster,
    source_code_link: "https://www.figma.com/file/87k6a3OlhI3sCRfDgjyKdb/Designs-by-Sunflower?node-id=0%3A1&t=4ywSqunxwqHRP9Yh-1",
  },
  {
    name: "Bring Me Meals",
    description:
      "This website is designed to allow individuals with excess food to donate food to those in need However, this still a concept that we're working on.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "hack",
        color: "pink-text-gradient",
      },
    ],
    image: design,
    source_code_link: "https://github.com/theerthaavnsh/Bring-Me-Meals-Website",
  },
];  
export {services, technologies, experiences, testimonials, projects};
