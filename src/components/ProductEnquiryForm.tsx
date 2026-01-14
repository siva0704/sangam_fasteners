import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2 } from "lucide-react";

// Mock submit
const submitEnquiry = async (data: any) => {
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
                <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Request Quote
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white text-slate-900 border-slate-200">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold font-heading text-slate-900">
                        {isSuccess ? "Request Sent!" : `Enquire about ${productName || "Product"}`}
                    </DialogTitle>
                    <DialogDescription className="text-slate-500">
                        {isSuccess
                            ? "Thank you for your interest. Our sales team will get back to you within 24 hours."
                            : "Please provide your requirements. You can attach drawings or specifications."}
                    </DialogDescription>
                </DialogHeader>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 text-green-600">
                        <CheckCircle2 size={64} className="mb-4 animate-bounce" />
                        <p className="font-bold">Enquiry Submitted Successfully</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 py-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                                <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                                <Input id="company" required placeholder="Acme Inc" className="bg-slate-50 border-slate-200" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Official Email</Label>
                            <Input id="email" type="email" required placeholder="john@company.com" className="bg-slate-50 border-slate-200" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                            <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="bg-slate-50 border-slate-200" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="requirements" className="text-sm font-medium">Specific Requirements</Label>
                            <Textarea
                                id="requirements"
                                placeholder="Please specify Size, Grade, Quantity and any special coating requirements..."
                                className="min-h-[100px] bg-slate-50 border-slate-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Upload Drawings / Reference (Optional)</Label>
                            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors bg-white">
                                <Upload className="h-8 w-8 text-slate-400 mb-2" />
                                <span className="text-xs text-slate-500">Click to upload files (PDF, JPG, PNG)</span>
                                <input type="file" className="hidden" />
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 text-base">
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
