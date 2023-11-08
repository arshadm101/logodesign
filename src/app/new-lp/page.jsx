// Import Page Components
import Header from "../new-lp/component/header/header";
import Banner from "../new-lp/component/banner/banner";
import Sliderban from "../new-lp/component/slider/slider";
import Logos from "../new-lp/component/logos/logos";
import Service from "../new-lp/component/service/service";
import Designing from "../new-lp/component/designing/designing";
import Works from "../new-lp/component/works/works";
import Contact from "../new-lp/component/contact/contact";
import Footer from "../new-lp/component/footer/footer";
import Portfolio from "../new-lp/component/portfolio/portfolio";
import Happy from "../new-lp/component/happy/happy";
import Pricing from "../new-lp/component/pricing/pricing";
import Logocombo from "../new-lp/component/logocombo/logocombo";
import Modal from "./component/modal/modal";


const Page = () => {

    return (
        <>
            <main>

                <Header />
                <Banner />
                <Sliderban />
                <Logos />
                <Service />
                <Designing />
                <Portfolio />
                <Pricing />
                <Logocombo />
                <Happy />
                <Works />
                <Contact />
                <Footer />

            </main>
        </>
    );
}

export default Page;