import Header from "../header";
import MobileHeader from "../header/mobileHeader";

const HomePageTemplates = (props) => {
  return !props?.isMobile ? <Header /> : <MobileHeader />;
};

export default HomePageTemplates;
