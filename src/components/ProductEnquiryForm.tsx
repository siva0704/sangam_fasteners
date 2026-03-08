import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2 } from "lucide-react";

interface EnquiryData {
    fullName?: string;
    companyName?: string;
    email?: string;
    contactNumber?: string;
    application?: string;
    quantity?: string;
    productRequirement?: string;
    file?: File | null;
}

// Mock submit
const submitEnquiry = async (_data: EnquiryData) => {
    return new Promise(resolve => setTimeout(resolve, 1500));
};

const ProductEnquiryForm = ({ productName }: { productName?: string }) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await submitEnquiry({});
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after delay
        setTimeout(() => {
            setOpen(false);
            setIsSuccess(false);
        }, 2000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default" className="w-full bg-background border-2 border-border text-foreground hover:bg-cyan-500 hover:border-cyan-500 dark:bg-cyan-500 dark:border-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400 dark:hover:border-cyan-400 font-bold uppercase tracking-widest rounded-none transition-all duration-300 shadow-[4px_4px_0px_rgba(15,23,42,0.1)] dark:shadow-[4px_4px_0px_rgba(6,182,212,0.2)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px] py-6">
                    <span className="hidden md:inline">Request Quote</span>
                    <span className="md:hidden">Quote</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-background text-foreground border-2 border-border rounded-none shadow-[12px_12px_0px_rgba(15,23,42,0.1)] dark:shadow-[12px_12px_0px_rgba(6,182,212,0.1)] p-8">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black font-heading text-foreground uppercase tracking-tight">
                        {isSuccess ? "Request Sent!" : `Enquire about ${productName || "Product"}`}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground font-medium">
                        {isSuccess
                            ? "Thank you for your interest. Our sales team will get back to you within 24 hours."
                            : "Please provide your requirements. You can attach drawings or specifications."}
                    </DialogDescription>
                </DialogHeader>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 text-green-600 dark:text-green-500">
                        <CheckCircle2 size={64} className="mb-4 animate-bounce" />
                        <p className="font-bold uppercase tracking-widest text-sm">Enquiry Submitted Successfully</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</Label>
                                <Input id="name" required placeholder="John Doe" className="bg-secondary dark:bg-background/50 border-2 border-border focus-visible:ring-0 focus-visible:border-cyan-500 dark:focus-visible:border-cyan-500 rounded-none h-12 text-foreground" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company</Label>
                                <Input id="company" required placeholder="Acme Inc" className="bg-secondary dark:bg-background/50 border-2 border-border focus-visible:ring-0 focus-visible:border-cyan-500 dark:focus-visible:border-cyan-500 rounded-none h-12 text-foreground" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Official Email</Label>
                            <Input id="email" type="email" required placeholder="john@company.com" className="bg-secondary dark:bg-background/50 border-2 border-border focus-visible:ring-0 focus-visible:border-cyan-500 dark:focus-visible:border-cyan-500 rounded-none h-12 text-foreground" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</Label>
                            <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="bg-secondary dark:bg-background/50 border-2 border-border focus-visible:ring-0 focus-visible:border-cyan-500 dark:focus-visible:border-cyan-500 rounded-none h-12 text-foreground" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="requirements" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Specific Requirements</Label>
                            <Textarea
                                id="requirements"
                                placeholder="Please specify Size, Grade, Quantity and any special coating requirements..."
                                className="min-h-[100px] bg-secondary dark:bg-background/50 border-2 border-border focus-visible:ring-0 focus-visible:border-cyan-500 dark:focus-visible:border-cyan-500 rounded-none text-foreground"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Upload Drawings / Reference (Optional)</Label>
                            <div className="border-2 border-dashed border-border rounded-none p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary dark:hover:bg-card/50 transition-colors bg-background">
                                <Upload className="h-8 w-8 text-cyan-500 mb-2" />
                                <span className="text-xs text-muted-foreground font-medium">Click to upload files (PDF, JPG, PNG)</span>
                                <input type="file" className="hidden" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan-600 hover:bg-cyan-500 text-foreground dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-slate-900 h-12 text-sm font-bold uppercase tracking-widest rounded-none border-2 border-transparent transition-colors">
                                {isSubmitting ? "Sending..." : "Submit Enquiry"}
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ProductEnquiryForm;
