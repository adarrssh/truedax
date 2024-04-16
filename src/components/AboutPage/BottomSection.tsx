import { Box, Image, Text } from "@chakra-ui/react";
import Members from "../../assets/about/Members.png";
import Clubs from "../../assets/about/Clubs.png";
import Bookings from "../../assets/about/Booking.png";
import Payment from "../../assets/about/Payment.png";

const BottomSection = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"250px"}
      marginBottom={{sm:"50px",md:"0px"}}
    >
      <Box 
        display={"flex"} 
        flexDirection= {{base:"column",md:"row"}} 
        width={"80%"}
        >
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          paddingLeft={{sm:"100px",md:"0px"}}
        >
          <Text fontSize={"2rem"} fontWeight={"bold"} color={"#4D4D4D"}>
            Helping a local
          </Text>
          <Text fontSize={"2rem"} fontWeight={"bold"} color={"#43A046"}>
            business reinvest itself
          </Text>
          <Text fontSize={"0.9rem"} color={"#4D4D4D"}>
            We reached here with our hardwork and dedication
          </Text>
        </Box>

        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          paddingLeft={{sm:"70px",md:"0px"}}

        >
          <Box flex={"1"} display={"flex"} flexDir={"row"} padding={"8px"}>
            <Box flex={"1"} display={"flex"} flexDirection={"row"}>
              <Box
                flex={"1"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={Members} alt="img"></Image>
              </Box>
              <Box flex={"2"}>
                <Text color={"#4D4D4D"} fontSize={"1.2rem"} fontWeight={"bold"}>
                  2,222,341
                </Text>
                <Text
                  color={"#4D4D4D"}
                  paddingTop={"-5px"}
                  fontWeight={"light"}
                >
                  Members
                </Text>
              </Box>
            </Box>

            <Box flex={"1"} display={"flex"} flexDirection={"row"}>
              <Box
                flex={"1"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={Clubs} alt="img"></Image>
              </Box>
              <Box flex={"2"}>
                <Text color={"#4D4D4D"} fontSize={"1.2rem"} fontWeight={"bold"}>
                  2,222,341
                </Text>
                <Text
                  color={"#4D4D4D"}
                  paddingTop={"-5px"}
                  fontWeight={"light"}
                >
                  Members
                </Text>
              </Box>
            </Box>
          </Box>

          <Box flex={"1"} display={"flex"} flexDir={"row"} padding={"8px"}>
            <Box flex={"1"} display={"flex"} flexDirection={"row"}>
              <Box
                flex={"1"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={Bookings} alt="img"></Image>
              </Box>
              <Box flex={"2"}>
                <Text color={"#4D4D4D"} fontSize={"1.2rem"} fontWeight={"bold"}>
                  2,222,341
                </Text>
                <Text
                  color={"#4D4D4D"}
                  paddingTop={"-5px"}
                  fontWeight={"light"}
                >
                  Members
                </Text>
              </Box>
            </Box>

            <Box  flex={"1"} display={"flex"} flexDirection={"row"}>
              <Box
                flex={"1"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={Payment} alt="img"></Image>
              </Box>
              <Box flex={"2"}>
                <Text color={"#4D4D4D"} fontSize={"1.2rem"} fontWeight={"bold"}>
                  2,222,341
                </Text>
                <Text
                  color={"#4D4D4D"}
                  paddingTop={"-5px"}
                  fontWeight={"light"}
                >
                  Members
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BottomSection;
