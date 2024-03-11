import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"


const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>

      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontsize={12} fontWeight={'bold'} color={'gray.500'}> Suggested for you</Text>
        <Text fontsize={12} fontWeight={'bold'} _hover={{color:'gray.500'}} cursor={'pointer'}> See All </Text>
      </Flex>

      <SuggestedUser name='Dan abrahmov' followers={1392} avatar='https://thediffpodcast.com/assets/images/dan-a-8d7a6d9e454582e77444d6d332035f60.png'/>
      <SuggestedUser name='Rayan Florence' followers={567} avatar='https://codewinds.com/assets/article/reactjs-conf-ryan-dsc_5191-800.jpg'/>
      <SuggestedUser name='Christian Nwamba' followers={759} avatar='https://pbs.twimg.com/profile_images/1311335329157308417/TC7R6Usu_400x400.jpg'/>

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        © 2024 Built By{" "}
        <Link href='https://github.com/Dana-Harb' target='_blank' color='blue.500' fontSize={14}>
					Dana Harb
				</Link> 
      </Box>
    </VStack>
  )
}

export default SuggestedUsers