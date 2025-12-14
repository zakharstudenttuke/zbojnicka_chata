import HeroBanner from '../components/sections/HomeMain/HomeBanner';
import homeBannerImg from '../assets/images/HomeImages/home-banner.png';
import s4_b1_i1 from '../assets/images/HomeImages/s4-b1-i1.png';
import HomeSection1 from '../components/sections/HomeMain/HomeSection1';
import HomeSection2 from '../components/sections/HomeMain/HomeSection2';
import HomeSection3 from '../components/sections/HomeMain/HomeSection3';
import HomeSection4 from '../components/sections/HomeMain/HomeSection4';
import HomeSection5 from '../components/sections/HomeMain/HomeSection5';

const HomePage = () => {
  return (
    <>
      <HeroBanner backgroundImage={homeBannerImg} />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 backgroundImage={s4_b1_i1} />
      <HomeSection5 />
    </>
  );
};

export default HomePage;