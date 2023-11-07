// Import Components
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";

const Page = () => {
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    return (
        <main>
            <Header />
            <section>
                <div className="bg-[#cab99a] h-[250px] flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mt-10">Privacy Policy</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px]">
                    <div className="container">
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            What information do we collect?
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            We only collect personally identifiable information from you when you log into our site or enter information into our form fields. You may be asked to enter your: name, e-mail address, mailing address or phone number.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            The representatives may use the pseudo names depending on which region they are interacting in order to facilitate and do a better communication with our customers because we deal in the global market.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            In order to ensure the privacy of our valued customer we never store any sort of information related to our clients neither we do take any cards information from client.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            What do we use your information for?
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Any of the information we collect from you may be used in one of the following ways:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[18px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    To personalize your experience
                                </span>
                                <p className="text-[15px] leading-[25px] text-[#565151] font-normal pl-[27px]">
                                    (your information helps us to better respond to your individual needs)
                                </p>
                            </li>
                            <li className="text-[18px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    To improve our website
                                </span>
                                <p className="text-[15px] leading-[25px] text-[#565151] font-normal pl-[27px]">
                                    (we continually strive to improve our website offerings based on the information and feedback we receive from you)
                                </p>
                            </li>
                            <li className="text-[18px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    To improve customer service
                                </span>
                                <p className="text-[15px] leading-[25px] text-[#565151] font-normal pl-[27px]">
                                    (your information helps us to more effectively respond to your customer service requests and support needs)
                                </p>
                            </li>
                            <li className="text-[18px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    To send periodic emails
                                </span>
                                <p className="text-[15px] leading-[25px] text-[#565151] font-normal pl-[27px]">
                                    (the email address you provide may be used by automated, trigger-based email campaigns to send you information, respond to inquiries, and/or other requests or questions)
                                </p>
                            </li>
                            <li className="text-[18px] leading-[28px] text-[#565151] font-semibold">
                                <span>
                                    To contact you
                                </span>
                                <p className="text-[15px] leading-[25px] text-[#565151] font-normal pl-[27px]">
                                    (if you request that we contact you)
                                </p>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            How do we protect your information?
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. Your information is stored in a <strong>password</strong> protected database.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Do we use cookies?
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            <strong>Yes,</strong> Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            We use cookies to help us remember, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. This information is collected in an anonymous form that includes no personally identifiable information. No personally identifiable information is collected on this website unless that information is explicitly submitted via a fill-in form. For example, an email address submission is requested in order to Work With Us on <a href="https://www.creativelogodesigns.io/" className="text-[#0F2847] font-bold">https://www.creativelogodesigns.io/</a> and users will have the option to provide this information or not.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            This anonymous information generated by cookies is transmitted to Google where it is processed to generate anonymous, aggregate reporting on website activity strictly for the domain <a href="https://www.creativelogodesigns.io/" className="text-[#0F2847] font-bold">https://www.creativelogodesigns.io/</a>. These reports are used to gain insight on how best to optimize the user experience, content, and marketing at <a href="https://www.creativelogodesigns.io/" className="text-[#0F2847] font-bold">https://www.creativelogodesigns.io/</a>.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Do we disclose any information to outside parties?
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            <strong>We do not</strong> sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Consumer Data Safety Measures
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            We respect your right of privacy. We therefore do not share your name and contact details with any third party. Besides, we keep information provided by you as confidential. The information you provide are used only to understand your requirements and to improve our services to suit your needs rather effectively. We ensure to follow the standards set by PCI and consumer data protection.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            It is hereby declared that our company does not authorize its representatives to collect any confidential information from our customers i.e. credit card information etc. Accordingly we advise our customers not to share any confidential and sensitive nature information with our employees. If you do so; you shall be doing at your own risk and our company shall not be liable for any misuse.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Your ordered work may be forwarded to any of our production or service centers located globally, for the quality delivery. However, they are also bound by an NDA to keep customer’s information as highly confidential.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Pseudonym Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            <strong>We hold a policy of using the pseudonym to ensure the following:</strong>
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            With a view to avoid undue confusion and hassle at our customers end when they are assigned a new account manager, we use pseudonyms; it helps our customers remain connected with a single point of contact and remember their name comfortably.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            Moreover; as our staff comprises of people from different regions and cultures, hence the use of pseudonym helps us present a uniform culture of the organization.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-5">
                            Third party links
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            <strong>Occasionally</strong>, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-5">
                            Online Privacy Policy Only
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            This online privacy policy applies only to information collected through our website and not to information collected offline.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Terms and Conditions
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at <a href="https://www.creativelogodesigns.io/" className="text-[#0F2847] font-bold">www.creativelogodesigns.io</a>
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Your Consent
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            By using our site, you consent to our websites privacy policy.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Changes to our Privacy Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            If we decide to change our privacy policy, we will post those changes on this page.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Privacy Policy for Email Address & Mobile Number Collection
                        </h2>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Introduction
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            This Privacy Policy explains how Creative Logo Designs collects, uses, and protects the email addresses and mobile numbers provided by users on our website. We are committed to ensuring that your privacy is protected and that we comply with all relevant data protection laws.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Information We Collect
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We may collect the following information:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    Mobile phone numbers
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-semibold">
                                <span>
                                    Any additional information provided voluntarily by the user.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            How We Use the Information
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We use the collected mobile numbers for the following purposes:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    To send relevant updates related to our services.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-semibold mb-3">
                                <span>
                                    To notify users about account-related information.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-semibold">
                                <span>
                                    For internal record keeping.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Consent for Mobile Number Collection
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            By providing your mobile number on Creative Logo Designs, you consent to the collection and use of this information as outlined in this Privacy Policy.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Security
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We are committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Controlling Your Personal Information
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            You may choose to restrict the collection or use of your mobile number in the following ways:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    If you have previously agreed to us using your mobile number for direct marketing purposes, you may change your mind at any time by contacting us at <a href="mailto:info@creativelogodesigns.io" className="text-[#0F2847] font-bold">info@creativelogodesigns.io</a> or you can reply “STOP” or “Unsubscribe” to stop receiving the messages
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Sharing Your Information
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Your Rights
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            You have the right to request details of the personal information we hold about you. If you would like a copy of this information, please contact us at <a href="mailto:info@creativelogodesigns.io" className="text-[#0F2847] font-bold">info@creativelogodesigns.io</a>
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Changes to this Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Creative Logo Designs may change this policy from time to time by updating this page. You should check this page periodically to ensure that you are comfortable with any changes.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Contacting Us
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            If there are any questions regarding this privacy policy you may contact us using the information below.
                        </p>
                        <h3 className="text-lg sm:text-xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Website:
                        </h3>
                        <p className="text-[15px] leading-[25px] text-[#0F2847] font-bold mb-5">
                            <a href="/">www.creativelogodesigns.io</a>
                        </p>
                        <h3 className="text-lg sm:text-xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Address:
                        </h3>
                        <p className="text-[15px] leading-[25px] text-[#202020] font-normal mb-5">
                            One World Trade Center, Suite 8500, New York, New York, 10007, United States
                        </p>
                        <h3 className="text-lg sm:text-xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            E-mail:
                        </h3>
                        <p className="text-[15px] leading-[25px] text-[#0F2847] font-bold mb-5">
                            <a href="mailto:info@creativelogodesigns.io">info@creativelogodesigns.io</a>
                        </p>
                        <h3 className="text-lg sm:text-xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Phone:
                        </h3>
                        <p className="text-[15px] leading-[25px] text-[#0F2847] font-bold">
                            <a href="tel:8556666675">(855) 666-6675</a>
                        </p>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}

export default Page;