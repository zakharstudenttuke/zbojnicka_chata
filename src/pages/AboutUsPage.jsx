import AboutUsBanner from "../components/sections/AboutUsMain/AboutUsBanner";
import AboutUsBannerImg from '../assets/images/AboutUsImages/about-us-banner.png';
import AboutUsSection1 from '../components/sections/AboutUsMain/AboutUsSection1';
import AboutUsSection2 from '../components/sections/AboutUsMain/AboutUsSection2';
import AboutUsSection3 from '../components/sections/AboutUsMain/AboutUsSection3';
import AboutUsSection4 from '../components/sections/AboutUsMain/AboutUsSection4';


const AboutUsPage = () => {
  return (
    <>
      <AboutUsBanner backgroundImage={AboutUsBannerImg} />
      <AboutUsSection1 />
      <AboutUsSection2 />
      <AboutUsSection3 />
      <AboutUsSection4 />
    </>
  );
};

export default AboutUsPage;