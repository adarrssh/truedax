import { Box, Button, Image, Text } from "@chakra-ui/react";
import Login from "../../assets/Login.png";

const Experience = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={"50px"}
      width={"100%"}
      paddingBottom={"50px"}
      backgroundColor={"white"}
      
    >
      <Box
        display={"flex"}
        flexDirection={{base:"column",sm:"column",md:"row"}}
        width={"80%"}

      >
        <Box flex={"1"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        // backgroundColor={"pink"}
        >

          <Image src={Login}></Image>
        </Box>
        <Box

          paddingLeft={"100px"}
          paddingTop={"60px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          flex={"2"}
          // backgroundColor={"yellow"}
        >
          <Box
          width={"80%"}
          >
            <Text color={"#4D4D4D"} fontWeight={"bold"} fontSize={"2.3rem"}>
              The Unseen of spending three{" "}
            </Text>
            <Text
              paddingTop={"-5px"}
              color={"#4D4D4D"}
              fontWeight={"bold"}
              fontSize={"2.3rem"}
              >
              years at pixelgrade
            </Text>
            <Text 
            paddingTop={"20px"}
            fontWeight={"light"}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              voluptate vero eum exercitationem ab officia qui illum sint
              voluptas nemo? Quia perspiciatis maiores, voluptatibus iusto et
              dolorum vel natus id!
            </Text>

            <Button
            marginTop={"30px"}
            width={"120px"}
            height={"50px"}
            backgroundColor={"#43A046"}
            border={"1px"}
            borderColor={"#43A046"}
            color={"white"}
            _hover={{backgroundColor:"#43A046"}}
          >
            Learn More
          </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
