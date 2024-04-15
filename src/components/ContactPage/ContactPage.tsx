import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import User from '../../assets/Contact/User.png'
import Mail from '../../assets/Contact/Mail.png'
import Company from '../../assets/Contact/Company.png'
import Contact from '../../assets/Contact/contact.png'
import Send from '../../assets/Contact/Send.png'
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-main">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"row"}
          width={"80%"}
          height={"100%"}
        >
          <Box
            display={"flex"}
            flex={1}
            flexDirection={"column"}
            paddingTop={"80px"}
            paddingLeft={"80px"}
            color={"#4D4D4D"}
          >
            <Text fontSize={"13px"}>CONTACT US</Text>
            <Text fontSize={"40px"} fontWeight={"bold"}>
              Let's Talk!
            </Text>
            <Text fontWeight={"light"}>
              We will reach out to you within 24 hours
            </Text>
            <Text paddingTop={"20px"} fontWeight={"bold"}>
              Don't like filling up forms? Email us direct at-
            </Text>
            <Text fontWeight={"light"}>temp@email.com</Text>
          </Box>
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"left"}
            flexDirection={"column"}
            paddingTop={"80px"}
            paddingRight={"80px"}
            paddingLeft={"30px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              marginTop={"30px"}
              width={"70%"}
              height={"40px"}
              border={"1px"}
              borderColor={"#28CB8B"}
              borderRadius={"8px"}
              paddingLeft={"2px"}
              paddingRight={"2px"}
              paddingTop={"2px"}
              paddingBottom={"2px"}
            >
                <Image paddingLeft={"5px"} height={"30px"} src={User} alt={"send"} />
              <Input
                placeholder="Your email Address"
                borderColor={"#F5F7FA"}
                _hover={{ borderColor: "#F5F7FA" }}
                _focus={{ borderColor: "#F5F7FA" }}
                focusBorderColor="#F5F7FA"
                height={"30px"}
                color={"black"}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              marginTop={"15px"}
              width={"70%"}
              height={"40px"}
              border={"1px"}
              borderColor={"#28CB8B"}
              borderRadius={"8px"}
              paddingLeft={"2px"}
              paddingRight={"2px"}
              paddingTop={"2px"}
              paddingBottom={"2px"}
            >
                <Image paddingLeft={"5px"} height={"30px"} src={Mail} alt={"send"} />
              <Input
                placeholder="Your email Address"
                borderColor={"#F5F7FA"}
                _hover={{ borderColor: "#F5F7FA" }}
                _focus={{ borderColor: "#F5F7FA" }}
                focusBorderColor="#F5F7FA"
                height={"30px"}
                color={"black"}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              marginTop={"15px"}
              width={"70%"}
              height={"40px"}
              border={"1px"}
              borderColor={"#28CB8B"}
              borderRadius={"8px"}
              paddingLeft={"2px"}
              paddingRight={"2px"}
              paddingTop={"2px"}
              paddingBottom={"2px"}
            >
                <Image paddingLeft={"5px"} height={"30px"} src={Company} alt={"send"} />
              <Input
                placeholder="Your email Address"
                borderColor={"#F5F7FA"}
                _hover={{ borderColor: "#F5F7FA" }}
                _focus={{ borderColor: "#F5F7FA" }}
                focusBorderColor="#F5F7FA"
                height={"30px"}
                color={"black"}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              marginTop={"15px"}
              width={"70%"}
              height={"40px"}
              border={"1px"}
              borderColor={"#28CB8B"}
              borderRadius={"8px"}
              paddingLeft={"2px"}
              paddingRight={"2px"}
              paddingTop={"2px"}
              paddingBottom={"2px"}
            >
                <Image paddingLeft={"5px"} height={"30px"} src={Contact} alt={"send"} />
              <Input
                placeholder="Your email Address"
                borderColor={"#F5F7FA"}
                _hover={{ borderColor: "#F5F7FA" }}
                _focus={{ borderColor: "#F5F7FA" }}
                focusBorderColor="#F5F7FA"
                height={"30px"}
                color={"black"}
              />
            </Box>
            <Button
              marginTop={"20px"}
              backgroundColor={"#43A046"}
              border={"1px"}
              borderColor={"#43A046"}
              color={"white"}
              _hover={{ backgroundColor: "#43A046" }}
              width={"150px"}
              borderRadius={"40px"}
            >
                <Image src={Send} paddingRight={"10px"}/>
                <Text fontWeight={"light"} fontSize={"15px"}>Get In Touch</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactPage;
