import { Flex, GridItem, Image, Text , useDisclosure,  ModalOverlay, ModalContent,ModalCloseButton, ModalBody, Modal, Box, Avatar, Divider, VStack } from "@chakra-ui/react"
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Comment from "../Comment/Comment"
import PostFooter from "../FeedPosts/PostFooter"

const ProfilePost = ({img}) => {

  const {isOpen , onOpen , onClose} = useDisclosure()
  return (
    <>
        <GridItem
        cursor={'pointer'} 
        borderRadius={4} 
        overflow={'hidden'} 
        order={'1px solid'} 
        borderColor={'whiteAlpha.300'}
        position={'relative'}
        aspectRatio={1/1}
        onClick={onOpen}
        >   
            {/*Comment and like on hover state*/}
            <Flex opacity={0} _hover={{opacity:1}} position={'absolute'} top={0} bottom={0} right={0} left={0} bg={'blackAlpha.700'}
            transition={'all 0.3s ease'}
            zIndex={1}
            justifyContent={'center'}
            >
                <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                    <Flex>
                        <AiFillHeart size={20}/>
                        <Text fontWeight={'bold'} ml={2}>7</Text>
                    </Flex>
                    <Flex>
                        <FaComment size={20}/>
                        <Text fontWeight={'bold'} ml={2}>7</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/*Post Image*/}
            <Image src={img} alt='profile post' w={'100%'} h={'100%'} objectFit={'cover'}/>
        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:'3xl',md:'6xl'}}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={'black'} pb={5}>
             <Flex gap={4} w={{base:'90%',sm:'70%',md:'ful'}} mx={'auto'}>
                {/*first child in modal */}
                <Box borderRadius={4}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'whiteAlpha.300'}
                flex={1.5}
                >
                    <Image src={img} alt='profile post' w={'100%'} h={'100%'} objectFit={'cover'}/>
                </Box>
                {/*Second child in modal */}
                <Flex flex={1} flexDir={'column'} px={10} display={{base:'none',md:'flex'}}>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Flex alignItems={'center'} gap={4}>
                            <Avatar src='/profileLogo.png' size='sm' name='xodana'/>
                            <Text fontWeight={'bold'} fontSize={12}>xodana</Text> 
                        </Flex>
                        <Box _hover={{bg:'whiteAlpha.300',color:'red.600'}} borderRadius={4} p={1}>
                            <MdDelete size={20} cursor={'pointer'}/>
                        </Box>
                    </Flex>
                    <Divider my={4} bg={'gray.500'}/>
                    <VStack w='full' alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                        <Comment createdAt={'1d ago'} username={'xodana'} profilePic={'/profileLogo.png'}  text={'Dummy images from unsplash'}/>
                        <Comment createdAt={'12h ago'} username={'Dan abrahmov'} profilePic={'https://thediffpodcast.com/assets/images/dan-a-8d7a6d9e454582e77444d6d332035f60.png'}  text={'Nice Pic'}/>
                        <Comment createdAt={'3h ago'} username={'Rayan Florence'} profilePic={'https://codewinds.com/assets/article/reactjs-conf-ryan-dsc_5191-800.jpg'}  text={'Good Clone'}/>
                    </VStack> 
                    <Divider my={4} bg={'gray.500'}/>
                    <PostFooter isProfilePage={true}/>
                </Flex>
             </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost