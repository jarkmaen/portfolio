import AWSIcon from "../components/icons/AWSIcon";
import CSSIcon from "../components/icons/CSSIcon";
import DotNetCoreIcon from "../components/icons/DotNetCoreIcon";
import ExpressIcon from "../components/icons/ExpressIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import GitIcon from "../components/icons/GitIcon";
import HTMLIcon from "../components/icons/HTMLIcon";
import NodeIcon from "../components/icons/NodeIcon";
import PostgreSQLIcon from "../components/icons/PostgreSQLIcon";
import robotFrameworkLogo from "../assets/images/robot-framework.svg";
import type { TechIcon } from "../types";

export const backend: TechIcon[] = [
    {
        Icon: NodeIcon,
        title: "Node.js"
    },
    {
        Icon: ExpressIcon,
        title: "Express"
    },
    {
        Icon: DotNetCoreIcon,
        title: ".NET Core"
    }
];

export const databases: TechIcon[] = [
    {
        Icon: PostgreSQLIcon,
        title: "PostgreSQL"
    },
    {
        title: "MySQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
    },
    {
        title: "MongoDB",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
    }
];

export const devOps: TechIcon[] = [
    {
        title: "Docker",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
    },
    {
        Icon: AWSIcon,
        title: "AWS"
    },
    {
        title: "GitHub Actions",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original-wordmark.svg"
    },
    {
        title: "Linux",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    },
    {
        Icon: GitIcon,
        title: "Git"
    },
    {
        Icon: GitHubIcon,
        title: "GitHub"
    }
];

export const frontend: TechIcon[] = [
    {
        title: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
    },
    {
        title: "Redux",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
    },
    {
        title: "Tailwind CSS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        title: "Vite",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
    }
];

export const languages: TechIcon[] = [
    {
        title: "Java",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
    },
    {
        title: "C#",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
        title: "Python",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
    },
    {
        title: "C++",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    }
];

export const testing: TechIcon[] = [
    { title: "Robot Framework", url: robotFrameworkLogo },
    {
        title: "Jest",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
    },
    {
        title: "JUnit",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original-wordmark.svg"
    }
];

export const webDev: TechIcon[] = [
    {
        title: "TypeScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        title: "JavaScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        Icon: HTMLIcon,
        title: "HTML"
    },
    {
        Icon: CSSIcon,
        title: "CSS"
    }
];
