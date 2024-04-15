import { Box, Text } from "@chakra-ui/react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-main">
      <Box
      width={"100%"}
      textAlign={"center"}
      paddingTop={"40px"}
      >
        <Text fontWeight={"bold"} fontSize={"40px"} color={"#4D4D4D"}> Our Services</Text>
        <Text paddingTop={"5px"} fontSize={"15px"} color={"#4D4D4D"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, qui?
        </Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        width={"100%"}
        height={"100%"}
        paddingTop={"50px"}
      >
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box
            width={"60%"}
            height={"50%"}
            backgroundColor={"#F5F7FA"}
            textAlign={"center"}
            padding={4}
            borderRadius={8}
            boxShadow={"100px"}
          >
            <Text>
              veritatis adipisci optio natus eius quos repudiandae nobis
              nostrum?
            </Text>
            <Text marginTop={"30px"} color={"#43A046"} fontWeight={"bold"}>
              Read More
            </Text>
          </Box>
        </Box>
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box
            width={"60%"}
            height={"50%"}
            backgroundColor={"#F5F7FA"}
            textAlign={"center"}
            padding={4}
            borderRadius={8}
            boxShadow={"100px"}
          >
            <Text>
              veritatis adipisci optio natus eius quos repudiandae nobis
              nostrum?
            </Text>
            <Text marginTop={"30px"} color={"#43A046"} fontWeight={"bold"}>
              Read More
            </Text>
          </Box>
        </Box>
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Box
            width={"60%"}
            height={"50%"}
            backgroundColor={"#F5F7FA"}
            textAlign={"center"}
            padding={4}
            borderRadius={8}
            boxShadow={"100px"}
          >
            <Text>
              veritatis adipisci optio natus eius quos repudiandae nobis
              nostrum?
            </Text>
            <Text marginTop={"30px"} color={"#43A046"} fontWeight={"bold"}>
              Read More
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Service;
