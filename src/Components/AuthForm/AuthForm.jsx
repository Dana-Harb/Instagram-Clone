import { VStack,Box ,Image, Flex, Text} from "@chakra-ui/react"
import { useState } from "react"
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin,setIsLogin]=useState(true);
  
  
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          {/* Login/SignUP Form */}
          <Image src='/logo.png' h={24} cursor={'pointer'} alt='Instagram Logo'/>
          
          {isLogin ? <Login/> : <Signup/>}
          {/* -------------- OR -------------- */}
          <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1}  w={'full'}>
            <Box flex={2} h={'1px'} bg={"white"}/>
            <Text mx={1} color={'white'}>OR</Text>
            <Box flex={2} h={'1px'} bg={"white"}/>
          </Flex>
          {/* Signup with Google option */}
          <GoogleAuth/>       
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontsize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box color={'blue.500'} cursor={'pointer'} onClick={()=>setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm