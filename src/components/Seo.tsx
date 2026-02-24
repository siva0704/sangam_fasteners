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
    image?: string;
    productSchema?: boolean;
}

const Seo = ({ title, description, keywords = [], schema, faqs, image, productSchema }: SeoProps) => {
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
                "name": "Industrial Shaft & Machine Components Portfolio",
                "description": "Comprehensive range of industrial shaft & machine components including bolts, nuts, studs, U-bolts, and custom components.",
                "brand": {
                    "@type": "Brand",
                    "name": "Sangam Shaft & Machine Components"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "Sangam Shaft & Machine Components Pvt. Ltd."
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

        // Update Social Tags
        const currentUrl = window.location.href;
        const defaultImage = `${window.location.origin}${import.meta.env.BASE_URL}og-image.png`;
        const seoImage = image || defaultImage;

        const socialTags = [
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: seoImage },
            { property: 'og:url', content: currentUrl },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: seoImage }
        ];

        socialTags.forEach(tag => {
            const selector = tag.property
                ? `meta[property="${tag.property}"]`
                : `meta[name="${tag.name}"]`;
            let element = document.querySelector(selector);
            if (!element) {
                element = document.createElement('meta');
                if (tag.property) element.setAttribute('property', tag.property);
                if (tag.name) element.setAttribute('name', tag.name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', tag.content);
        });

    }, [title, description, keywords, schema, faqs, image, productSchema]);

    return null;
};

export default Seo;
