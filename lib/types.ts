export type Technology = {
    id: string;
    name: string;
    category: "frontend" | "backend" | "database";
    logoUrl: string;
    dependencies?: string[],
    priority: number,
};