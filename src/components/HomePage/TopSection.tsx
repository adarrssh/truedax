import { Box, Button, Image, Text } from "@chakra-ui/react";
import "./HomePage.css";
import illustration from "../../assets/illustration.png";


const TopSection = () => {
  return (
    <Box
    height={"90vh"}
    display={"flex"}
    flexDirection={"row"}
    justifyContent={"center"}
    width={"90%"}
  >
    <Box
      flex={"2"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"95%"} marginTop={"-50px"}>

        <Text fontSize={"70px"} fontWeight={"bold"} color={"#4D4D4D"}>
          Lesson From Insights
        </Text>

        <Text fontSize={"70px"} fontWeight={"bold"} color={"#43A046"}>
          From 8 years
        </Text>

        <Text fontWeight={"light"}>
          Where to grow you business a photgrapher: site or social media?
        </Text>

        <Button
          backgroundColor={"#43A046"}
          border={"1px"}
          borderColor={"#43A046"}
          color={"white"}
          marginTop={"20px"}        
          _hover={{ bgColor: "white", color: "#43A046" }}
        >
          Register
        </Button>
      </Box>
    </Box>
    <Box
      flex={"1"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image src={illustration} alt="image" />
    </Box>
  </Box>
  )
}

export default TopSection