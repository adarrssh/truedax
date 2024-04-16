import { Box, Text } from "@chakra-ui/react";
import "./Service.css";

const SeriveComp = () => {
  return (
    <Box
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={{base:"column",md:"row"}}
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
      backgroundColor={"white"}
      padding={"20px"}

    >
      <Box
        width={"250px"}
        height={"160px"}
        backgroundColor={"#F5F7FA"}
        textAlign={"center"}
        padding={4}
        borderRadius={8}
        boxShadow={"100px"}
        fontSize={"1rem"}
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
      padding={"20px"}

    >
      <Box
        width={"250px"}
        height={"160px"}
        backgroundColor={"#F5F7FA"}
        textAlign={"center"}
        padding={4}
        borderRadius={8}
        boxShadow={"100px"}
        fontSize={"1rem"}

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
      padding={"20px"}
    >
      <Box
        width={"250px"}
        height={"160px"}
        backgroundColor={"#F5F7FA"}
        textAlign={"center"}
        padding={4}
        borderRadius={8}
        boxShadow={"100px"}
        fontSize={"1rem"}

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
  )
}

export default SeriveComp