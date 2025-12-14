import ActivityBanner from "../components/sections/ActivityMain/ActivityBanner";
import ActivityBannerImg from '../assets/images/ActivityImages/activity-banner.png';
import ActivitySection1 from '../components/sections/ActivityMain/ActivitySection1';
import ActivitySection2 from '../components/sections/ActivityMain/ActivitySection2';
import ActivitySection3 from '../components/sections/ActivityMain/ActivitySection3';


const ActivityPage = () => {
  return (
    <>
      <ActivityBanner backgroundImage={ActivityBannerImg} />
      <ActivitySection1 />
      <ActivitySection2 />
      <ActivitySection3 />
    </>
  );
};

export default ActivityPage;