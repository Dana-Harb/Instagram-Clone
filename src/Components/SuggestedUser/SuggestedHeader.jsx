import { Avatar, Flex, Link, Text, textDecoration } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>

        <Flex alignItems={'center'} gap={2}>
            <Avatar name='xodana' size={'lg'} src='/profileLogo.png'/>
            <Text fontSize={12} fontWeight={'bold'}> xodana </Text>
        </Flex>

        <Link as={RouterLink} to='/auth' fontSize={14} fontWeight={'medium'} color={'blue.500'} style={{textDecoration:'none'}} cursor={'pointer'}>
            Logout
        </Link>
    </Flex>
  )
}

export default SuggestedHeader