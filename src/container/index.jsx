import HomeTemplates from "../components/templates/homePageTemplate";
import { getBreakPoint } from "../utils/functions";
import { Grid } from "antd";
const Home = () => {
  const { useBreakpoint } = Grid;
  const isMobile = !getBreakPoint(useBreakpoint()).includes("lg");
  return <HomeTemplates isMobile={isMobile} />;
};

export default Home;
