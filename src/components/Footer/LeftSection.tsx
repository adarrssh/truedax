import { Box, Image, Text } from "@chakra-ui/react";
import "./Footer.css";
import Nexcent from "../../assets/Footer/Nexcent.png";
import Insta from "../../assets/Footer/Insta.png";
import Twitter from "../../assets/Footer/Twitter.png";
import Youtube from "../../assets/Footer/Youtube.png";
import Ball from "../../assets/Footer/Ball.png";
import Icon from "../../assets/Footer/Icon.png";

const LeftSection = () => {
  return (
      <>

        <Box flex={"1"} display={"flex"} flexDirection={"column"} padding={8}>

          <Box textAlign={"left"}>
            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
              <Image src={Icon} alt="img" height={"30px"} width={"35px"} />
              <Image marginLeft={"15px"} src={Nexcent} alt="img" width={"100px"} height={"25px"} />
            </Box>

            <Text paddingTop={"30px"} color={"white"}>
              Copyright 2020 Nexcent ltd.
            </Text>
            <Text color={"white"} paddingTop={"5px"}>All right reserved</Text>
          </Box>
          <Box
          paddingTop={"20px"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          flexDir={"row"}
          >

            <Image src={Insta}></Image>
            <Image src={Ball} marginLeft={"10px"}></Image>
            <Image src={Twitter} marginLeft={"10px"}></Image>
            <Image src={Youtube} marginLeft={"10px"}></Image>

          </Box>
        </Box>
      </>
  );
};

export default LeftSection;
