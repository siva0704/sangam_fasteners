import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import { Link } from "react-router-dom";
import SFLPlaceholder from "./SFLPlaceholder";

const teamMembers = [
    {
        name: "Ishwarappa S Handigol",
        role: "Chairman",
        image: "/assets/corporate-profile/leadership/chairman.jpeg",
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Sangamesh I Handigol",
        role: "CEO",
        image: "/assets/corporate-profile/leadership/ceo.jpeg",
        socials: {
            facebook: "#",
            instagram: "#",
            linkedin: "#"
        }
    }
];

const SectionTeam = () => {
    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0f1c] dark:to-[#0f172a] relative overflow-hidden transition-colors duration-500">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-4 space-y-8">
                        <AnimatedSection animation="fade-right">
                            <div className="space-y-4 pt-10"> {/* Added pt-10 to clear the dark gradient top in light mode */}
                                <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
                                    Meet The Team
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                        Our Leadership
                                    </span>
                                </h2>
                                <div className="w-20 h-1 bg-blue-500/30 rounded-full" />
                            </div>

                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our leadership team brings years of expertise in industrial manufacturing.
                                We are committed to delivering precision, quality, and reliability in every component we produce.
                            </p>

                            <Link to="/about">
                                <MagneticButton size="lg" className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white mt-4 rounded-none">
                                    READ MORE
                                </MagneticButton>
                            </Link>
                        </AnimatedSection>
                    </div>

                    {/* Right Column: Team Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            {teamMembers.map((member, idx) => (
                                <AnimatedSection key={idx} animation="fade-up" delay={idx * 0.1}>
                                    <div className="group relative flex flex-col items-center bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-white/10 mt-10"> {/* mt-10 so cards aren't on dark gradient edge */}

                                        {/* Image Container with Circle Shape */}
                                        <div className="relative mb-6">
                                            <div className="w-40 h-40 overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg group-hover:scale-105 transition-transform duration-300 rounded-full"> {/* Make sure it is completely round if desired, or leave as square if it was */}
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.currentTarget;
                                                        target.style.display = 'none';
                                                        const placeholder = target.nextElementSibling as HTMLElement;
                                                        if (placeholder) placeholder.style.display = 'flex';
                                                    }}
                                                />
                                                <div className="absolute inset-0 z-20 hidden">
                                                    <SFLPlaceholder text={member.name} />
                                                </div>
                                            </div>
                                            {/* Decorative Ring */}
                                            <div className="absolute inset-0 border-2 border-blue-500/20 dark:border-blue-400/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rounded-full" />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-wide">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-sm">
                                            {member.role}
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex items-center space-x-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                            <a href={member.socials.facebook} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <Facebook size={18} />
                                            </a>
                                            <a href={member.socials.instagram} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                                <Instagram size={18} />
                                            </a>
                                            <a href={member.socials.linkedin} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
