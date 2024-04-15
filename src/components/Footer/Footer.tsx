import { Box } from "@chakra-ui/react";
import "./Footer.css";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";

const Footer = () => {
  return (
    <div className="footer-main">
      <Box display={"flex"} width={"90%"} flexDirection={"row"}>
        <LeftSection />
        <MiddleSection/>
        <Box flex={"1"}>
            1
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
