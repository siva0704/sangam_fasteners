import { useState } from "react";
import { Search, Monitor, Settings2, Hammer, Ruler, Info } from "lucide-react";
import { machineryList, instrumentList, InfrastructureItem } from "@/constants/infrastructure";
import AnimatedSection from "../AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export const InfrastructureGallery = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filterList = (list: InfrastructureItem[]) => {
        return list.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.make.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#050814] relative transition-colors duration-500 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection animation="fade-up" className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-foreground/5 border border-slate-200 dark:border-border mb-6">
                        <Settings2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-muted-foreground">Our Capabilities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-foreground mb-6">Machinery & Instruments</h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-muted-foreground text-lg">
                        Explore our comprehensive inventory of 80+ precision-engineered machines and world-class measuring instruments.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mt-8" />
                </AnimatedSection>

                <div className="max-w-6xl mx-auto mb-12">
                    <div className="relative group max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors" />
                        <Input
                            type="text"
                            placeholder="Search equipment or brand..."
                            className="pl-12 py-6 rounded-full border-slate-200 dark:border-border bg-white dark:bg-foreground/5 backdrop-blur-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-slate-900 dark:text-foreground"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <Tabs defaultValue="machinery" className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-slate-100 dark:bg-foreground/5 p-1 rounded-full border border-slate-200 dark:border-border h-auto">
                            <TabsTrigger
                                value="machinery"
                                className="rounded-full px-8 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-foreground transition-all font-bold text-sm tracking-wide"
                            >
                                <Hammer className="w-4 h-4 mr-2" />
                                MACHINERY ({machineryList.length})
                            </TabsTrigger>
                            <TabsTrigger
                                value="instruments"
                                className="rounded-full px-8 py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-foreground transition-all font-bold text-sm tracking-wide"
                            >
                                <Ruler className="w-4 h-4 mr-2" />
                                METROLOGY ({instrumentList.length})
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="machinery">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filterList(machineryList).map((item, idx) => (
                                <EquipmentCard key={item.id} item={item} idx={idx} />
                            ))}
                        </div>
                        {filterList(machineryList).length === 0 && (
                            <div className="text-center py-20 text-slate-500">No machinery found matching your search.</div>
                        )}
                    </TabsContent>

                    <TabsContent value="instruments">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filterList(instrumentList).map((item, idx) => (
                                <EquipmentCard key={item.id} item={item} idx={idx} />
                            ))}
                        </div>
                        {filterList(instrumentList).length === 0 && (
                            <div className="text-center py-20 text-slate-500">No instruments found matching your search.</div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

const EquipmentCard = ({ item, idx }: { item: InfrastructureItem; idx: number }) => {
    return (
        <AnimatedSection animation="scale-in" delay={idx * 0.02} className="h-full">
            <div className="group relative h-full flex flex-col p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-border hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.3)] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${item.category === 'machinery' ? 'bg-blue-600/10 text-blue-600' : 'bg-cyan-500/10 text-cyan-600'} group-hover:scale-110 transition-transform`}>
                        {item.category === 'machinery' ? <Settings2 className="w-6 h-6" /> : <Monitor className="w-6 h-6" />}
                    </div>
                    {item.year && (
                        <span className="text-[10px] font-bold bg-slate-100 dark:bg-foreground/5 px-2 py-1 rounded text-slate-500 dark:text-muted-foreground">
                            Y.O.I: {item.year}
                        </span>
                    )}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-foreground leading-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase">
                    {item.name}
                </h3>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-border">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground dark:text-slate-500 font-bold">MAKE</span>
                            <span className="text-xs font-bold text-slate-700 dark:text-muted-foreground tracking-wide">{item.make === 'MANUAL' ? 'Hand Operated' : item.make}</span>
                        </div>
                        {item.details && (
                            <div className="flex flex-col text-right">
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground dark:text-slate-500 font-bold">SPECS</span>
                                <span className="text-xs font-medium text-slate-600 dark:text-muted-foreground">{item.details}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Hover decoration */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info className="w-4 h-4 text-blue-600/30" />
                </div>
            </div>
        </AnimatedSection>
    );
};
