import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Certifications() {
    const certifications = [
        {
            issuer: "Google Cloud",
            logo: "/assets/cert-logos/cloud-digital-leader-certification.png",
            title: "Cloud Digital Leader Certification",
            url: "https://www.credly.com/badges/a836d21a-2e80-4ea2-9b96-7cdf1bd9534a/public_url",
            year: "2022",
        },
        {
            issuer: "Google Cloud",
            logo: "/assets/cert-logos/associate-cloud-engineer-certification.png",
            title: "Associate Cloud Engineer Certification",
            url: "https://www.credly.com/badges/ac76df4e-1c39-47fa-a225-861940e5bd7a/public_url",
            year: "2022"
        },
        {
            issuer: "Google Cloud",
            logo: "/assets/cert-logos/professional-cloud-developer-certification.png",
            title: "Professional Cloud Developer Certification",
            url: "https://www.credly.com/badges/12c0ca1f-df0c-4bcc-b54f-0e30e2ca3278/public_url",
            year: "2022"
        },
        {
            issuer: "Amazon Web Services",
            logo: "/assets/cert-logos/aws-certified-developer-associate.png",
            title: "AWS Certified Developer – Associate",
            url: "https://www.credly.com/badges/b343dbec-fcd4-4209-9359-4e63c60bf24c/public_url",
            year: "2023"
        },
    ];

    return (
        <section id="certifications" className="py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8 text-center">Certifications</h2>
                <div className="grid grid-cols-1 gap-8">
                    {certifications.map((cert) => (
                        <Link href={cert.url} key={cert.title} target="_blank" rel="noopener noreferrer">
                            <Card className="hover:shadow-lg transition-all hover:border-blue-500 p-6">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="relative h-28 w-28 min-w-[7rem] flex-shrink-0">
                                        <Image
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                    <div className="text-center md:text-left space-y-2 w-full">
                                        <CardTitle className="text-xl font-bold hover:text-blue-500 transition-colors">
                                            {cert.title}
                                        </CardTitle>
                                        <CardContent className="p-0 text-muted-foreground">
                                            <p className="text-sm">
                                                Issued by {cert.issuer} • {cert.year}
                                            </p>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 