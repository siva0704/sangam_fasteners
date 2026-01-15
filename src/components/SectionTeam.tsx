import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";

const teamMembers = [
    {
        name: "Jeffrey Brown",
        role: "Creative Leader",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400", // Placeholder
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Ann Richmond",
        role: "Web Developer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400", // Placeholder
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Sarah Jenning",
        role: "Product Manager",
        image: "/sangam_fasteners/team/sarah.png",
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    }
];

const SectionTeam = () => {
    return (
        <section className="py-10 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-4 space-y-8">
                        <AnimatedSection animation="fade-right">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">
                                    Meet The Team
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                        Our Professionals
                                    </span>
                                </h2>
                                <div className="w-20 h-1 bg-accent/30 rounded-full" />
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our team of dedicated professionals brings years of expertise in industrial manufacturing.
                                We are committed to delivering precision, quality, and reliability in every fastener we produce.
                            </p>

                            <Link to="/about">
                                <MagneticButton size="lg" className="bg-primary text-white hover:bg-primary/90 mt-4 rounded-none">
                                    READ MORE
                                </MagneticButton>
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Right Column: Team Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, idx) => (
                                <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                                    <div className="group relative flex flex-col items-center bg-secondary/10 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">

                                        {/* Image Container with Circle Shape */}
                                        <div className="relative mb-6">
                                            <div className="w-40 h-40 overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Decorative Ring */}
                                            <div className="absolute inset-0 border-2 border-accent/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                        </div>

                                        <h3 className="text-xl font-bold text-primary mb-1 uppercase tracking-wide">
                                            {member.name}
                                        </h3>
                                        <p className="text-accent font-medium mb-4 text-sm">
                                            {member.role}
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex items-center space-x-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                            <a href={member.socials.facebook} className="text-primary hover:text-accent transition-colors">
                                                <Facebook size={18} />
                                            </a>
                                            <a href={member.socials.instagram} className="text-primary hover:text-accent transition-colors">
                                                <Instagram size={18} />
                                            </a>
                                            <a href={member.socials.linkedin} className="text-primary hover:text-accent transition-colors">
                                                <Linkedin size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionTeam;
