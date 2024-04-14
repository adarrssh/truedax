import { Box, Text, Image } from "@chakra-ui/react"
import Vector1 from '../../assets/clients/Vector1.png'
import Vector2 from '../../assets/clients/Vector2.png'
import Vector3 from '../../assets/clients/Vector3.png'
import Vector4 from '../../assets/clients/Vector4.png'
import Vector5 from '../../assets/clients/Vector5.png'
import Vector6 from '../../assets/clients/Vector6.png'
import Vector7 from '../../assets/clients/Vector7.png'

const MiddleSection = () => {
  return (
    <Box
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
       flexDirection={"column"}
       width={"100%"}
       paddingTop={"40px"}
       backgroundColor={"white"}
    >
        <Box
        textAlign={"center"}
        width={"90%"}
        >
            <Text fontSize={"40px"} fontWeight={"bold"} color={"#4D4D4D"}>Our Clients</Text>
            <Text marginTop={"5px"} fontSize={"16px"} fontWeight={"light"} color={"#4D4D4D"}>We have been working with some Fortune 500+ clients</Text>
        </Box>
        <Box
        width={"90%"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        paddingTop={"20px"}
        >
          <Image src={Vector1} alt="img"></Image>
          <Image src={Vector2} alt="img"></Image>
          <Image src={Vector7} alt="img"></Image>
          <Image src={Vector3} alt="img"></Image>
          <Image src={Vector5} alt="img"></Image>
          <Image src={Vector6} alt="img"></Image>
          <Image src={Vector4} alt="img"></Image>
        </Box>
    </Box>
  )
}

export default MiddleSection