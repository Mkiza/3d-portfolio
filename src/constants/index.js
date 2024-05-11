import { meta, shopify, starbucks, tesla, sos, visma, krizo, systematic, testhub } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python,
    springio,
    agnular
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springio,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: agnular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "IT Consultant",
        company_name: "Visma",
        icon: visma,
        iconBg: "white",
        date: "August 2018 - November 2019",
        points: [
            "Modernized 2 existing solutions to function on world wide web using Angular & Typescript.",
            "Build the bridge between the web app interaction and corresponding database procedures using Apache Camel, Maven and Java.",
            "Finished 2 specializations one in Python and another in Data Science, while working my full time job.",
            "Worked effectively with test teams to create software solutions that elevated client side experience and significantly improved overall functionality and performance.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Krizo",
        icon: krizo,
        iconBg: "white",
        date: "Sep 2020 - Jul 2021",
        points: [
            "Delivered software solutions for Palo Alto Networks, specific file attachment on logs, and log event types.",
            "Delivered software solutions for Boston Consulting Group, specific an API and a responsive mobile version.",
            "Implemented a new Dashboard used by all clients.",
            "Transformed the current web app to a fully responsive mobile solution.",
            "Expanded on current invitation system, with ability to add individual users..",
        ],
    },
    {
        title: "(Freelance) Full Stack Developer ",
        company_name: "Systematic",
        icon: systematic,
        iconBg: "white",
        date: "Sep 2021 - Oct 2022",
        points: [
            "Drafted Front End architecture presentation in Angular.",
            "Implemented first iteration of Front End project in Angular Typescript.",
            "Functioned as Front-end lead developer for limited time periods.",
            "Implemented image handling functionality using Java and Angular.",
        ],
    },
    {
        title: "(Freelance) Full stack Developer",
        company_name: "SOS International",
        icon: sos,
        iconBg: "white",
        date: "Feb 2023 - Sept 2023",
        points: [
            "Analyzed existing software implementations to identify areas requiring improvement.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Tech Lead",
        company_name: "Testhub",
        icon: testhub,
        iconBg: "white",
        date: "Jan 2023 - Present",
        points: [
            "Integrated the current solution into SAP.",
            "Decided on which Technologies the organization should work on.",
            "Set Up E-mail automation.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mkiza',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ronaldmkiza',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Zapiar Clone',
        description: 'Developed a web application that notifies a user when changes are happening in Notion or Google Drive.',
        link: 'https://github.com/Mkiza/automation',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Dall-E Version 2',
        description: 'Created a full-stack replica of the popular AI image model "Dall-E," enabling users to generate images from prompts.',
        link: 'https://github.com/Mkiza/Dall-E-Version2',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'ChatGPT2',
        description: 'Created a full-stack replica of the popular AI website "ChatGPT".',
        link: 'https://github.com/Mkiza/ChatGPT2',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-pink',
        name: 'Digital Bank',
        description: 'Built a complete digital bank where you can transfer money and withdraw',
        link: 'https://github.com/Mkiza/bank',
    }
];