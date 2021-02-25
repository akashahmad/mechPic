import Header from "../header";
import MobileHeader from "../header/mobileHeader";

import HomePage from "../homepage";
const HomePageTemplates = (props) => {
  // return !props?.isMobile ? <Header /> : <MobileHeader />;
  return <HomePage />
};

export default HomePageTemplates;
