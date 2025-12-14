import ContactBanner from "../components/sections/ContactMain/ContactBanner";
import ContactBannerImg from '../assets/images/ContactImages/contact-banner.png';
import ContactSection1 from '../components/sections/ContactMain/ContactSection1';



const ContactPage = () => {
  return (
    <>
      <ContactBanner backgroundImage={ContactBannerImg} />
      <ContactSection1 />
    </>
  );
};

export default ContactPage;