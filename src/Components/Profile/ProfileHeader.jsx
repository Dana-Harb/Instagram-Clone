import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"
import useUserProfileStore from "../../store/useUserProfileStore"
import useAuthStore from './../../store/authStore';

const ProfileHeader = () => {
  const {userProfile} = useUserProfileStore();
  const authUser = useAuthStore(state=>state.user);
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;

  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:'column',sm:"row"}}>

      <AvatarGroup size={{base:'xl',md:'2xl'}} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
        <Avatar alt='xodana' src={userProfile.profilePicURL}/>
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        {/*First Item in stack */}
        <Flex gap={4} direction={{base:'column',sm:'row'}} justifyContent={{base:'center',sm:'flex-start'}} alignItems={'center'} w={'full'}>
          <Text fontSize={{base:'sm',md:'lg'}}> {userProfile.username} </Text>
          { visitingOwnProfileAndAuth && 
          (<Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'white'} color={'black'} _hover={{bg:'whiteAlpha.800'}} size={{base:'xs',md:'s'}} p={2}>Edit Profile</Button>
          </Flex>)}   
          {visitingAnotherProfileAndAuth && 
          (<Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'blue.500'} color={'white'} _hover={{bg:'blue.600'}} size={{base:'xs',md:'s'}} p={2}>Follow</Button>
          </Flex>)}  
        </Flex>
        {/*Second Item in stack */}
        <Flex alignItems={'center'} gap={{base:2,sm:4}}>
          <Text fontSize={{base:'xs',md:'sm'}}><Text as='span' fontWeight={'bold'} mr={1}>{userProfile.posts.length}</Text>Posts</Text>
          <Text fontSize={{base:'xs',md:'sm'}}><Text as='span' fontWeight={'bold'} mr={1}>{userProfile.followers.length}</Text>Followers</Text>
          <Text fontSize={{base:'xs',md:'sm'}}><Text as='span' fontWeight={'bold'} mr={1}>{userProfile.following.length}</Text>Following</Text>
        </Flex>
        {/*Third Item in stack */}
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>{userProfile.fullName}</Text>
        </Flex>
        {/*Fourth Item in stack */}
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'}>{userProfile.bio}</Text>
        </Flex>
      </VStack> 

    </Flex>
  )
}

export default ProfileHeader