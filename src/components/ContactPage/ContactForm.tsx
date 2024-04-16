import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import User from '../../assets/Contact/User.png'
import Mail from '../../assets/Contact/Mail.png'
import Company from '../../assets/Contact/Company.png'
import Contact from '../../assets/Contact/contact.png'
import Send from '../../assets/Contact/Send.png'
import "./Contact.css";
import { useState } from "react";
import axios from "axios";

interface UserDetails {
  name: string;
  email: string;
  companyName: string;
  message: string;
}


const ContactForm = () => {

  const [userDeatils, setUserDetails] = useState<UserDetails>({
    name:'',
    email:'',
    companyName : '',
    message: ''
  })

  const handleChange = (fieldName : string, value:string) => {
    setUserDetails(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };


  const onSubmit = async () => {
    try {

      if(!userDeatils.email || !userDeatils.companyName || !userDeatils.message || !userDeatils.name ) { 
        alert("All fields required")
        return;
      }

      const response = await axios.post('https://truedax-api.onrender.com/user',userDeatils)

      alert(response.data)

      setUserDetails({
        name: '',
        email: '',
        companyName: '',
        message: ''
      });

    } catch (error) {
      alert("something bad happend")
      console.error(error)
    }
  }

  return (
    <Box
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    width={"100%"}
    height={"100%"}
    paddingBottom={"20px"}
  >
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={{base:"column",md:"row"}}
      width={"80%"}
      height={"100%"}
    >
      <Box
        display={"flex"}
        flex={1}
        flexDirection={"column"}
        paddingTop={"80px"}
        paddingLeft={{sm:"100px",md:"80px"}}
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
        paddingTop={{base:"30px",md:"80px"}}
        paddingRight={"80px"}
        // paddingLeft={"30px"}
        paddingLeft={{sm:"100px",md:"30px"}}

      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          marginTop={"30px"}
          width={"90%"}
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
            placeholder="Name"
            borderColor={"transparent"}
            _hover={{ borderColor: "transparent" }}
            _focus={{ borderColor: "transparent" }}
            focusBorderColor="transparent"
            height={"30px"}
            color={"black"}
            value={userDeatils.name}
            onChange={(e)=>handleChange('name',e.target.value)}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          marginTop={"15px"}
          width={"90%"}
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
            placeholder="Your email address"
            borderColor={"transparent"}
            _hover={{ borderColor: "transparent" }}
            _focus={{ borderColor: "transparent" }}
            focusBorderColor="transparent"
            height={"30px"}
            color={"black"}
            value={userDeatils.email}
            type={"email"}
            onChange={(e)=>handleChange('email',e.target.value)}

          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          marginTop={"15px"}
          width={"90%"}
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
            placeholder="Company name"
            borderColor={"transparent"}
            _hover={{ borderColor: "transparent" }}
            _focus={{ borderColor: "transparent" }}
            focusBorderColor="transparent"
            height={"30px"}
            color={"black"}
            value={userDeatils.companyName}
            onChange={(e)=>handleChange('companyName',e.target.value)}

          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
          marginTop={"15px"}
          width={"90%"}
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
            placeholder="How can we help you?"
            borderColor={"transparent"}
            _hover={{ borderColor: "transparent" }}
            _focus={{ borderColor: "transparent" }}
            focusBorderColor="transparent"
            height={"30px"}
            color={"black"}
            value={userDeatils.message}
            onChange={(e)=>handleChange('message',e.target.value)}

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
          onClick={onSubmit}
        >
            <Image src={Send} paddingRight={"10px"}/>
            <Text fontWeight={"light"} fontSize={"15px"}>Get In Touch</Text>
        </Button>
      </Box>
    </Box>
  </Box>
  )
}

export default ContactForm