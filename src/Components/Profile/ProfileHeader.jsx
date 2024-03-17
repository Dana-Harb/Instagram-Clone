import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:'column',sm:"row"}}>

      <AvatarGroup size={{base:'xl',md:'2xl'}} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
        <Avatar alt='xodana' name='xodana' src='/profileLogo.png'/>
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        {/*First Item in stack */}
        <Flex gap={4} direction={{base:'column',sm:'row'}} justifyContent={{base:'center',sm:'flex-start'}} alignItems={'center'} w={'full'}>
          <Text fontSize={{base:'sm',md:'lg'}}> xodana </Text>
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'gray.700'} color={'white'} _hover={{bg:'gray.800'}} size={{base:'xs',md:'s'}} p={2}>Edit Profile</Button>
          </Flex>  
        </Flex>
        {/*Second Item in stack */}
        <Flex alignItems={'center'} gap={{base:2,sm:4}}>
          <Text fontSize={{base:'xs',md:'sm'}}><Text as='span' fontWeight={'bold'} mr={1}>4</Text>Posts</Text>
          <Text fontSize={{base:'xs',md:'sm'}}><Text as='span' fontWeight={'bold'} mr={1}>149</Text>Followers</Text>
          <Text fontSize={{base:'xs',md:'sm'}}><Text as='span' fontWeight={'bold'} mr={1}>254</Text>Following</Text>
        </Flex>
        {/*Third Item in stack */}
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>XoDana</Text>
        </Flex>
        {/*Fourth Item in stack */}
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'}>Handmade Accesories made with love.</Text>
        </Flex>
      </VStack> 

    </Flex>
  )
}

export default ProfileHeader