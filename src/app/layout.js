// Import Fonts
import { primary, integralCF, poppins, roboto, raleway } from "./configs/fonts";
import Script from 'next/script';

// Import Css
import "./global.css";

// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "Top Web Design Company - Creative Logo Designs",
    description: "Creative Logo Designs is an award-winning top web design company with a team of professional web designers, and online strategists, delivering cutting-edge websites for businesses.",
    // Google Varification
    verification: {
        // google: 'ziIYRBahP4WcKcps6RWRDJvZ9A00pSoI39ByXDN14us',
        other: {
            "facebook-domain-verification": ['9mgotld2pcip5yvdv6yajdqx71xfvt'],
        },
    },
    // Canonical
    alternates: {
        canonical: 'https://www.creativelogodesigns.io',
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script
                id="ze-snippet"
                src="https://static.zdassets.com/ekr/snippet.js?key=fbc0fae5-0759-4e3e-bc7f-920b1acc2d5d"
                strategy="lazyOnload"
            >
            </Script>
            <Script
                id="google-tag-manager"
                src="https://www.googletagmanager.com/gtag/js?id=AW-11394693744"
                strategy="lazyOnload"
            >
            </Script>
            <Script id="facebook-manager" strategy="lazyOnload">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '3404182666490229');
                    fbq('track', 'PageView');
                `}
            </Script>
            <Script id="google-tag-manager-three" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-11394693744');
                `}
            </Script>
            <body className={`${primary.variable} ${integralCF.variable} ${poppins.variable} ${roboto.variable} ${raleway.variable}`}>
                <noscript>
                    <iframe src="https://www.facebook.com/tr?id=3404182666490229&ev=PageView&noscript=1" className="hidden"></iframe>
                </noscript>
                {children}
            </body>
        </html >
    );
}