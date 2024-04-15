import { Box } from "@chakra-ui/react";
import "./Footer.css";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

const Footer = () => {
  return (
    <div className="footer-main">
      <Box display={"flex"} width={"90%"} flexDirection={"row"}>
        <LeftSection />
        <MiddleSection/>
        <RightSection/>
      </Box>
    </div>
  );
};

export default Footer;
