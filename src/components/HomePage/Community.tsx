import { Box, Image, Text } from "@chakra-ui/react";
import Members from "../../assets/community/Members.png";
import Associations from "../../assets/community/NationalAssociation.png";
import Clubs from "../../assets/community/Clubs.png";

const Community = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      width={"100%"}
      paddingTop={"80px"}
      backgroundColor={"white"}
    >
      <Box textAlign={"center"} width={"90%"}>
        <Text fontSize={"40px"} fontWeight={"bold"} color={"#4D4D4D"}>
          Manage you entire community <br /> in a single system
        </Text>
        <Text
          marginTop={"5px"}
          fontSize={"16px"}
          fontWeight={"light"}
          color={"#4D4D4D"}
        >
          Who is Nexcent suitable for
        </Text>
      </Box>
      <Box
        width={"90%"}
        display={"flex"}
        flexDirection={"row"}
        paddingTop={"40px"}
      >
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Image src={Members} alt="img" width={"60px"} height={"40px"} />
          <Text fontSize={"40px"} fontWeight={"bold"} color={"#4D4D4D"}>
            Membership
          </Text>
          <Text fontWeight={"light"}>
            Our membership management <br /> software provides full automation
            of <br /> membership renewals and payments
          </Text>
        </Box>
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Image src={Associations} alt="img" width={"60px"} height={"40px"} />
          <Text fontSize={"40px"} fontWeight={"bold"} color={"#4D4D4D"}>
            Associations
          </Text>
          <Text fontWeight={"light"}>
            Our membership management <br /> software provides full automation
            of <br /> membership renewals and payments
          </Text>
        </Box>
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Image src={Clubs} alt="img" width={"50px"} height={"50px"} />
          <Text fontSize={"40px"} fontWeight={"bold"} color={"#4D4D4D"}>
            Clubs
          </Text>
          <Text fontWeight={"light"}>
            Our membership management <br /> software provides full automation
            of <br /> membership renewals and payments
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
