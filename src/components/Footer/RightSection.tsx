import { Box, Image, Input, Text } from '@chakra-ui/react'
import Send from '../../assets/Footer/Send.png'

const RightSection = () => {
  return (
    <Box 
    flex={"1"}
    display={{base:"none",lg:"flex"}}
    flexDirection={"row"}
    padding={8}
    >

       <Box
        flex={"1"}
        display={"flex"}
        flexDirection={"column"}
        color={"white"}
       >
        <Text fontWeight={"bold"} fontSize={"17px"} >Stay up to date</Text>
        <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        marginTop={"30px"}
        width={"210px"}
        border={"1px"}
        borderColor={"white"}
        borderRadius={"8px"}
        backgroundColor={"#263238"}
        paddingLeft={"2px"}
        paddingRight={"2px"}
        paddingTop={"2px"}
        paddingBottom={"2px"}
        >

            <Input
             placeholder='Your email Address'
             paddingRight={"10px"}
             borderColor={"transparent"}
             _hover={{borderColor:"transparent"}}
             _focus={{borderColor:"transparent"}}
             focusBorderColor='transparent'
             height={"40px"}
             color={"white"}
            />
            <Image 
            paddingRight={"5px"}
                src={Send} 
                alt={"send"}
                />
        </Box>
       </Box>
        
    </Box>
  )
}

export default RightSection