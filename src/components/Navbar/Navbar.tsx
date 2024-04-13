import { Box, Image, Button } from "@chakra-ui/react";
import NavIcon from '../../assets/Nexcent.png'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <Box
        width={"95%"}
        height={"70%"}
        display={"flex"}
        flexDirection={"row"}
        color={"black"}
      >
        <Box
          flex={1}
          display={"flex"}
          justifyContent={"flex-start"}
          paddingLeft={5}
          alignItems={"center"}
        >
          <Image src={NavIcon} alt="navbar" height={"25px"}/>
        </Box>
        <Box
          flex={2}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          fontWeight={"bold"}
        >
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
          >
            Home
          </Button>
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
          >
            About
          </Button>
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
          >
            Services
          </Button>
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
          >
            Contact
          </Button>
        </Box>
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-end"}
          paddingRight={5}
          alignItems={"center"}
        >
          <Button
            backgroundColor={"white"}
            border={"1px"}
            borderColor={"#43A046"}
            color={"#43A046"}
            marginRight={"20px"}
            _hover={{bgColor:"#43A046",color:"white"}}
          >
            Login
          </Button>

          <Button
            backgroundColor={"#43A046"}
            border={"1px"}
            borderColor={"#43A046"}
            color={"white"}
            _hover={{backgroundColor:"#43A046"}}
          >
            SignIn
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
