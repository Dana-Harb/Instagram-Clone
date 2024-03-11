import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NotificationsLogo, UnlikeLogo, CommentLogo } from "../../assets/constants.jsx";

const PostFooter = ({username}) => {
    const[isLiked,setIsLiked]=useState(false)
    const[nbLikes,setnbLikes]=useState(1000)
    const handleLike = () =>{
        if(isLiked){
            setIsLiked(false);
            setnbLikes(nbLikes-1);
        }
        else{
            setIsLiked(true);
            setnbLikes(nbLikes+1);
        }
    }
  return (
    <Box mb={4}>
        {/*Like and Comment Row*/}
        <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
            <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
                {!isLiked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
            </Box>
            <Box cursor={'pointer'} fontSize={18}>
                <CommentLogo/>
            </Box>
        </Flex>
        {/*Number of Likes*/}
        <Text fontSize={'sm'} fontWeight={600}> {nbLikes} likes</Text>
        <Text fontSize={'sm'} fontWeight={700}>
            {username} {' '}
            <Text as='span' fontWeight={400}> Feeling Good</Text>
        </Text>
        <Text fontSize={'sm'} color={'gray'}>View All 1000 comments</Text>
        {/*Comment Input*/}
        <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
            <InputGroup>
                <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}/>
                <InputRightElement>
                    <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} 
                    _hover={{color:'white'}} bg={'transparent'}>
                    Post</Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
    </Box>
  )
}

export default PostFooter