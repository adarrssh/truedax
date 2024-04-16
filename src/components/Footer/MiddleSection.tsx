import { Box, Text } from '@chakra-ui/react'

const MiddleSection = () => {
  return (
    <Box 
    flex={"1"}
    display={"flex"}
    flexDirection={"row"}
    padding={{base:4,md:8}}
    >

       <Box
        flex={"1"}
        display={"flex"}
        flexDirection={"column"}
        color={"white"}
       >
        <Text fontWeight={"bold"} fontSize={"17px"} >Company</Text>
        <Text paddingTop={"15px"} fontSize={"14px"}>About us</Text>
        <Text paddingTop={"5px"} fontSize={"14px"}>Blog</Text>
        <Text paddingTop={"5px"} fontSize={"14px"}>Contact Us</Text>
        <Text paddingTop={"5px"}fontSize={"14px"}>Pricing</Text>
        <Text paddingTop={"5px"} fontSize={"14px"}>Testimonials</Text>
       </Box>

       <Box
        flex={"1"}
        display={"flex"}
        flexDirection={"column"}
        color={"white"}
       >
        <Text fontWeight={"bold"} fontSize={"17px"} >Support</Text>
        <Text paddingTop={"15px"} fontSize={"14px"}>Help Center</Text>
        <Text paddingTop={"5px"} fontSize={"14px"}>Terms of Services</Text>
        <Text paddingTop={"5px"} fontSize={"14px"}>Legal</Text>
        <Text paddingTop={"5px"}fontSize={"14px"}>Privacy Policy</Text>
        <Text paddingTop={"5px"} fontSize={"14px"}>Status</Text>
       </Box>


        
    </Box>
  )
}

export default MiddleSection