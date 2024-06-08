import { Avatar, Box, Flex, Text } from '@chakra-ui/react'


const PostHeader = ({username,avatar}) => {
  return (
    <>
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
            {/*Left side of header*/}
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={avatar} alt={username} size={'sm'}/>
                <Flex fontSize={12} gap={2} fontWeight={'bold'}>
                    {username}
                    <Box color={'gray.500'}>• 1w</Box>
                </Flex>
            </Flex>
            {/*Unfollow button*/}
            <Box cursor={'pointer'}>
                <Text fontSize={12} color={"blue.500"} fontWeight={'bold'} _hover={{color:'white',}} transition={'0.2 ease-in-out'}>Unfollow</Text>
            </Box>
        </Flex>
    </>
  )
}

export default PostHeader