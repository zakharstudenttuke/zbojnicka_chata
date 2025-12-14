import GalleryBanner from "../components/sections/GalleryMain/GalleryBanner";
import GalleryBannerImg from '../assets/images/GalleryImages/gallery-banner.png';
import GallerySection1 from '../components/sections/GalleryMain/GallerySection1';
import GallerySection2 from '../components/sections/GalleryMain/GallerySection2';
import GallerySection3 from '../components/sections/GalleryMain/GallerySection3';
import GallerySection4 from '../components/sections/GalleryMain/GallerySection4';


const GalleryPage = () => {
  return (
    <>
      <GalleryBanner backgroundImage={GalleryBannerImg} />
      <GallerySection1 />
      <GallerySection2 />
      <GallerySection3 />
      <GallerySection4 />
    </>
  );
};

export default GalleryPage;