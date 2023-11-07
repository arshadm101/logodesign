import { Poppins, Roboto_Slab, Roboto, Raleway } from "next/font/google";
import localFont from "next/font/local";

const primary = Roboto_Slab({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-primary',
});

const roboto = Roboto({
    weight: ['100',  '300', '400', '500',  '700',  '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-roboto',
});
const raleway = Raleway({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-raleway',
});


const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
});

const integralCF = localFont({
    src: [
        {
            path: '../../fonts/IntegralCF-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/IntegralCF-ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/IntegralCF-Heavy.otf',
            weight: '900',
            style: 'normal',
        }
        
    ],
    variable: '--font-integralCF',
    subsets: ['latin'],
    display: 'swap',
});

export { primary, poppins, integralCF, roboto, raleway }
