import { withRouter } from "react-router-dom";
import Header from "../header";
import MobileHeader from "../header/mobileHeader";
import Footer from "../molecules/footer";

const HomePageTemplates = (props) => {
  return (
    <>
      {!props?.isMobile ? <Header /> : <MobileHeader />}
      {props.children}
      <Footer />
    </>
  );
};

export default withRouter(HomePageTemplates);
