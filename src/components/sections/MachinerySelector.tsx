import { useState } from "react";
import { Check, ChevronsUpDown, Settings2, Calendar, Factory, Info, Hammer, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { machineryList, instrumentList, InfrastructureItem } from "@/constants/infrastructure";
import AnimatedSection from "../AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MachinerySelector = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const allItems = [...machineryList, ...instrumentList];

    // Deduplicate items by name for the dropdown to prevent double selection issues
    const uniqueMachinery = Array.from(new Map(machineryList.map(item => [item.name, item])).values());
    const uniqueInstruments = Array.from(new Map(instrumentList.map(item => [item.name, item])).values());

    const selectedItem = allItems.find((item) => item.name === value) || uniqueMachinery[0];

    return (
        <section className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 border border-blue-600 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection animation="fade-up" className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-600 dark:text-blue-400 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                        Precision & Infrastructure
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 dark:text-foreground mb-6">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Capabilities</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-muted-foreground text-lg">
                        Browse our extensive inventory of 80+ industrial machines and high-precision metrology instruments.
                    </p>
                </AnimatedSection>

                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Selector Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-widest">Select Equipment</label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between h-14 text-left font-bold text-slate-800 dark:text-foreground border-slate-200 dark:border-border dark:bg-foreground/5 backdrop-blur-sm hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-foreground/5 transition-all rounded-xl px-4"
                                    >
                                        <div className="flex items-center gap-3 truncate">
                                            {selectedItem.category === 'machinery' ? <Hammer className="w-4 h-4 text-blue-600" /> : <Ruler className="w-4 h-4 text-cyan-500" />}
                                            <span className="truncate">{value ? value : "Choose a machine..."}</span>
                                        </div>
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="start" sideOffset={8} className="w-[var(--radix-popover-trigger-width)] p-0 dark:bg-[#0f172a] dark:border-border rounded-xl overflow-hidden shadow-2xl z-[100]">
                                    <Command className="dark:bg-transparent">
                                        <CommandInput placeholder="Search machine name..." className="h-12 border-none ring-0 focus:ring-0" />
                                        <CommandList className="max-h-[300px]">
                                            <CommandEmpty>No machine found.</CommandEmpty>
                                            <CommandGroup heading="Machinery">
                                                {uniqueMachinery.map((item) => (
                                                    <CommandItem
                                                        key={`m-${item.id}`}
                                                        value={item.name}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue);
                                                            setOpen(false);
                                                        }}
                                                        className="py-3 px-4 flex items-center gap-3 cursor-pointer aria-selected:bg-blue-600 aria-selected:text-foreground"
                                                    >
                                                        <Hammer className={cn("w-4 h-4", value === item.name ? "text-foreground" : "text-blue-500")} />
                                                        <span className="font-medium text-sm">{item.name}</span>
                                                        <Check
                                                            className={cn(
                                                                "ml-auto h-4 w-4",
                                                                value === item.name ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                            <CommandGroup heading="Metrology">
                                                {uniqueInstruments.map((item) => (
                                                    <CommandItem
                                                        key={`i-${item.id}`}
                                                        value={item.name}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue);
                                                            setOpen(false);
                                                        }}
                                                        className="py-3 px-4 flex items-center gap-3 cursor-pointer aria-selected:bg-cyan-600 aria-selected:text-foreground"
                                                    >
                                                        <Ruler className={cn("w-4 h-4", value === item.name ? "text-foreground" : "text-cyan-500")} />
                                                        <span className="font-medium text-sm">{item.name}</span>
                                                        <Check
                                                            className={cn(
                                                                "ml-auto h-4 w-4",
                                                                value === item.name ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 dark:bg-foreground/5 p-4 rounded-xl border border-slate-100 dark:border-border">
                                <span className="text-[10px] font-extrabold text-muted-foreground dark:text-slate-500 uppercase tracking-widest block mb-2">Category</span>
                                <div className="flex items-center gap-2">
                                    {selectedItem.category === 'machinery' ? (
                                        <>
                                            <Hammer className="w-5 h-5 text-blue-600" />
                                            <span className="font-bold text-slate-800 dark:text-foreground uppercase text-sm">Industrial</span>
                                        </>
                                    ) : (
                                        <>
                                            <Ruler className="w-5 h-5 text-cyan-500" />
                                            <span className="font-bold text-slate-800 dark:text-foreground uppercase text-sm">Metrology</span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-foreground/5 p-4 rounded-xl border border-slate-100 dark:border-border">
                                <span className="text-[10px] font-extrabold text-muted-foreground dark:text-slate-500 uppercase tracking-widest block mb-2">Build Quality</span>
                                <div className="flex items-center gap-2">
                                    <Settings2 className="w-5 h-5 text-blue-600" />
                                    <span className="font-bold text-slate-800 dark:text-foreground uppercase text-sm">Industrial</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detail Side */}
                    <div className="lg:col-span-7">
                        <Card className="border-none shadow-2xl bg-white dark:bg-[#0f172a] overflow-hidden rounded-3xl group">
                            <CardContent className="p-0">
                                <div className="relative aspect-[16/10] bg-slate-100 dark:bg-foreground/5">
                                    {selectedItem.imagePath ? (
                                        <img
                                            src={selectedItem.imagePath}
                                            alt={selectedItem.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                                            <Factory className="w-16 h-16 text-foreground dark:text-foreground/10 mb-4 animate-pulse" />
                                            <p className="text-muted-foreground dark:text-slate-600 font-medium italic">Shop Floor Visual Available on Request</p>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {selectedItem.year && (
                                                <Badge className="bg-blue-600 hover:bg-blue-700 text-foreground border-none font-bold">
                                                    Installed {selectedItem.year}
                                                </Badge>
                                            )}
                                            <Badge variant="secondary" className="bg-foreground/5 backdrop-blur-md text-foreground border-border font-bold">
                                                Make: {selectedItem.make}
                                            </Badge>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight leading-none mb-2">
                                            {selectedItem.name}
                                        </h3>
                                        {selectedItem.details && (
                                            <p className="text-blue-400 font-bold text-sm tracking-widest uppercase">
                                                {selectedItem.details}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-600">
                                            <Info className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-foreground mb-2 uppercase tracking-wide">Technical Overview</h4>
                                            <p className="text-slate-600 dark:text-muted-foreground leading-relaxed">
                                                {selectedItem.description || "This component of our production line represents our commitment to precision engineering. Maintained to global standards, it ensures the consistent quality our Tier-1 clients expect."}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-100 dark:border-border">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Status</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Service Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};
