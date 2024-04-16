import { Box, Text } from "@chakra-ui/react";
import "./Service.css";
import SeriveComp from "./SeriveComp";

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

     <SeriveComp/>
     <SeriveComp/>
     <SeriveComp/>
      
    </div>
  );
};

export default Service;
