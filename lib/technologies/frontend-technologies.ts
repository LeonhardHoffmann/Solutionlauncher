type Technology = {
    id: string;
    name: string;
    category: "frontend" | "backend" | "database";
    logoUrl: string;
    dependencies?: string[],
    priority: number,
};

const frontendTechnologies: Technology[] = [
    {
        id: "react",
        name: "React",
        category: "frontend",
        logoUrl: "/tech-logos/react.svg",
        priority: 10,
    },
    {
        id: "vue",
        name: "Vue.js",
        category: "frontend",
        logoUrl: "/tech-logos/vue.svg",
        priority: 10,
    },
];