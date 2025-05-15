import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface WorkExperience {
    startDate: string;
    endDate: string;
    role: string;
    company: string;
    tasks: string[];
    technologies: string[];
}

const workExperiences: WorkExperience[] = [
    {
        startDate: "Jun 2023",
        endDate: "Present",
        role: "Lead Developer",
        company: "IGNUS CREATIVE SOLUTIONS",
        tasks: [
            "Build and maintain APIs with Python (Flask, Django), Node.js, C#, and PHP (Laravel).",
            "Develop web applications using React, Angular, and Vanilla JavaScript",
            "Build omnichannel app using react vite and firebase",
            "Conduct web scraping and automation using Selenium",
            "Manage and optimize CI/CD pipelines with Jenkins"
        ],
        technologies: ["React", "TypeScript", "Python", "Laravel", "AWS", "MySQL", "Firebase", "Next.js", "Tailwind CSS"]
    },
    {
        startDate: "Aug 2022",
        endDate: "Jun 2023",
        role: "Fullstack developer, cloud integration developer",
        company: "IOCONNECT SERVICES",
        tasks: [
            "Develop mobile applications with React Native",
            "Build APIs with Node.js and AWS services such as S3, Lambda, and Cognito",
            "Manage version control and collaboration with Git"
        ],
        technologies: ["React", "React Native", "TypeScript", "Node.js", "AWS"]
    },
    {
        startDate: "Nov 2020",
        endDate: "Aug 2022",
        role: "Fullstack developer, cloud developer",
        company: "CLOUD CONTINUITY SYSTEMS SERVICES",
        tasks: [
            "Build APIs with C# .NET Core and Entity Framework",
            "Develop dynamic views and components using React and Vanilla JavaScript",
            "Develop and integrate applications using AWS services such as S3, Lambda, DynamoDB, and Cognito",
            "Work with Google Cloud Platform (GCP) services, including Compute Engine and Cloud Storage."
        ],
        technologies: ["React", "TypeScript", "aws", "gcp", "C#", "postgresql"]
    },
    {
        startDate: "Oct 2019",
        endDate: "Nov 2020",
        role: "Fullstack Developer",
        company: "INTERSYST",
        tasks: [
            "Developed responsive UIs",
            "Integrated REST APIs",
            "Improved accessibility compliance",
            "Develop and scale legacy applications using C# and WPF",
            "Develop Single Page Applications (SPA) for ERP systems using Angular.",
            "Migrate legacy sites to webapps with react",
            "Implement email notification systems using Node.js"
        ],
        technologies: ["C#", "react", "java", "Angular", "JavaScript", "HTML", "CSS"]
    },
    {
        startDate: "Aug 2018",
        endDate: "Jan 2019",
        role: "Freelance Backend developer",
        company: "NEPTUNO TELECOMUNICACIONES",
        tasks: [
            "Read and write CSV files using Python",
            "Design and build APIs with Django and Django REST Framework",
            "Work with PostgreSQL databases for application data storage and management.",
            "Develop and containerize services using Docker and Docker Compose.",
            "Manage source control and collaboration with Git.",
        ],
        technologies: ["Python", "Django", "Docker"]
    }
];

export default function WorkHistory() {
    return (
        <section id="work-history" className="py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-12 text-center">Work History</h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 md:left-8 h-full w-0.5 bg-gray-200 transform -translate-x-1/2 md:translate-x-0"></div>

                    {workExperiences.map((exp, index) => (
                        <div key={index} className="relative mb-12">
                            {/* Date */}
                            <div className="md:absolute left-0 top-0 w-32 text-right pr-6 mb-4 md:mb-0">
                                <p className="text-sm text-muted-foreground">{exp.startDate}</p>
                                <p className="text-sm text-muted-foreground">{exp.endDate}</p>
                            </div>

                            {/* Content */}
                            <div className="md:ml-40">
                                <Card className="hover:shadow-md transition-shadow">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <h3 className="text-sm font-medium mb-2">Key Tasks:</h3>
                                        <ul className="space-y-1">
                                            {exp.tasks.map((task, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    <span className="text-sm">{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>

                                    <CardFooter className="pt-0">
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 