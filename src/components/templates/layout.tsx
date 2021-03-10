import { withRouter } from "react-router-dom";
import Header from "../molecules/header";
import MobileHeader from "../molecules/header/mobileHeader";
import Footer from "../molecules/footer";

const HomePageTemplates = (props: any) => {
  return (
    <>
      {!props?.isMobile ? <Header /> : <MobileHeader />}
      {props.children}
      <Footer />
    </>
  );
};

export default withRouter(HomePageTemplates);
