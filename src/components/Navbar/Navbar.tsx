import { Box, Image, Button } from "@chakra-ui/react";
import NavIcon from '../../assets/Nexcent.png'
import Logo from '../../assets/Logo.png'
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
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
          <Image src={Logo} alt="navbar" height={"20px"}/>
          <Image src={NavIcon} alt="navbar" height={"25px"} marginLeft={"10px"}/>
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
            onClick={()=>navigate('/')}
          >
            Home
          </Button>
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
            onClick={()=>navigate('/about')}

          >
            About
          </Button>
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
            onClick={()=>navigate('/service')}

          >
            Services
          </Button>
          <Button
            background={"none"}
            border={"none"}
            _hover={{ color: "#43A046", cursor: "pointer" }}
            
            fontSize={"17px"}
            color={"18191F"}
            onClick={()=>navigate('/contact')}

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
            Sign Up
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
