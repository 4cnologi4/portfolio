import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/daniell9404",
            icon: <FaLinkedin className="h-6 w-6" />,
        },
        {
            name: "GitHub",
            url: "https://github.com/4cnologi4",
            icon: <FaGithub className="h-6 w-6" />,
        },
        {
            name: "Credly",
            url: "https://www.credly.com/users/daniel-mtz",
            icon: <SiCredly className="h-6 w-6" />,
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/2295086620",
            icon: <FaWhatsapp className="h-6 w-6" />,
        },
        {
            name: "Email",
            url: "mailto:danmtz9504@gmail.com",
            icon: <HiOutlineMail className="h-6 w-6" />,
        },
    ];

    return (
        <section id="contact" className="max-w-3xl mx-auto text-center py-16">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
                Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-500 transition-colors"
                        aria-label={link.name}
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </section>
    );
} 