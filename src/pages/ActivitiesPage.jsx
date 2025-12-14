import ActivitiesBanner from "../components/sections/ActivitiesMain/ActivitiesBanner";
import ActivitiesBannerImg from '../assets/images/ActivitiesImages/activities-banner.png';
import ActivitiesSection1 from '../components/sections/ActivitiesMain/ActivitiesSection1';


const ActivitiesPage = () => {
  return (
    <>
      <ActivitiesBanner backgroundImage={ActivitiesBannerImg} />
      <ActivitiesSection1 />
    </>
  );
};

export default ActivitiesPage;