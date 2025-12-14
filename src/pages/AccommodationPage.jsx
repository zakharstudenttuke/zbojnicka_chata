import AccommodationBanner from "../components/sections/AccommodationMain/AccommodationBanner";
import AccommodationBannerImg from '../assets/images/AccommodationImages/accommodation-banner.png';
import AccommodationSection1 from '../components/sections/AccommodationMain/AccommodationSection1';
import AccommodationSection2 from '../components/sections/AccommodationMain/AccommodationSection2';


const AccommodationPage = () => {
  return (
    <>
      <AccommodationBanner backgroundImage={AccommodationBannerImg} />
      <AccommodationSection1 />
      <AccommodationSection2 />
    </>
  );
};

export default AccommodationPage;