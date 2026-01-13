import { useEffect } from 'react';

interface SeoProps {
    title: string;
    description: string;
    keywords?: string[];
    schema?: string;
    faqs?: {
        question: string;
        answer: string;
    }[];
    productSchema?: boolean;
}

const Seo = ({ title, description, keywords = [], schema, faqs, productSchema }: SeoProps) => {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update Meta Keywords (optional but good for some search engines/context)
        if (keywords.length > 0) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords.join(', '));
        }

        // Add Schema.org JSON-LD
        const schemasToInject = [];

        if (schema) {
            schemasToInject.push(schema);
        }

        if (faqs && faqs.length > 0) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            };
            schemasToInject.push(JSON.stringify(faqSchema));
        }

        if (productSchema) {
            const productCatalogSchema = {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Industrial Fasteners Portfolio",
                "description": "Comprehensive range of industrial fasteners including bolts, nuts, studs, U-bolts, and custom components.",
                "brand": {
                    "@type": "Brand",
                    "name": "Sangam Fasteners"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "Sangam Fasteners Pvt. Ltd."
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "INR",
                    "lowPrice": "100",
                    "offerCount": "500"
                }
            };
            schemasToInject.push(JSON.stringify(productCatalogSchema));
        }

        // Remove existing schemas managed by this component
        const existingScripts = document.querySelectorAll('script[data-seo-schema="true"]');
        existingScripts.forEach(script => script.remove());

        // Inject new schemas
        schemasToInject.forEach(schemaContent => {
            const script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.setAttribute('data-seo-schema', 'true');
            script.textContent = schemaContent;
            document.head.appendChild(script);
        });

    }, [title, description, keywords, schema, faqs, productSchema]);

    return null;
};

export default Seo;
