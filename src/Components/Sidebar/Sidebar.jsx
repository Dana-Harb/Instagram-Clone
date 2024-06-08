import { Avatar, Box, Button, Flex ,Link, Tooltip} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { CreatePostLogo, InstagramLogo,InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants.jsx";
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import useLogout from "../../hooks/useLogout.js";


const Sidebar = () => {
    const sideBarItems=[
        {
            icon:<AiFillHome size={25}/>,
            text:"Home",
            link: "/",
        },
        {
            icon:<SearchLogo/>,
            text:"Search",
        },
        {
            icon:<NotificationsLogo/>,
            text:"Notifications",
        },
        {
            icon:<CreatePostLogo/>,
            text:"Create",
        },
        {
            icon:<Avatar size={'sm'} name='XoDana'  src='/profileLogo.png'/>,
            text:"Profile",
            link:"/xodana",
        },
    ];
    const {handleLogout,isLoggingOut} = useLogout();
    return (
        <Box  
        height={"100vh"} borderRight={"1px solid "} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{base:2,md:4}}>
            <Flex direction={"column"}  gap={10} w={'full'} height={'full'}>
                {/* Top Logo  */}
                <Link to='/' as={RouterLink} pl={2} display={{base:'none',md:'block'}} cursor={'pointer'}>
                    <InstagramLogo/>
                </Link>
                <Link to='/' as={RouterLink} pl={2} display={{base:'block',md:'none'}} cursor={'pointer'} borderRadius={6}
                _hover={{bg:"whiteAlpha.200"}} w={10}>
                    <InstagramMobileLogo/>
                </Link>
                {/* All icons in menu  */}
                <Flex direction={'column'} gap={5} cursor={'pointer'}>
                {sideBarItems.map((item,index)=>(
                    <Tooltip key={index} hasArrow label={item.text} placement={'right'} ml={1} openDelay={500} display={{base:'block',md:"none"}}>
                        <Link display={'flex'} to={item.link || null} as={RouterLink} alignItems={'center'} gap={4} 
                        _hover={{bg:"whiteAlpha.200"}} borderRadius={6} p={2} w={{base:10,md:"full"}} justifyContent={{base:'center',md:"flex-start"}}>
                            {item.icon}
                            <Box display={{base:'none',md:"block"}}> {item.text} </Box>
                        </Link>
                    </Tooltip>
                    ))}
            </Flex>
                {/*Logout Button*/}
                <Tooltip 
                    hasArrow label={"Logout"} 
                    placement={'right'} ml={1} 
                    openDelay={500} 
                    display={{base:'block',md:"none"}}
                >
                    <Flex
                        onClick={handleLogout}
                        alignItems={'center'} 
                        gap={4} mt={'auto'}
                        _hover={{bg:"whiteAlpha.200"}} 
                        borderRadius={6} p={2} w={{base:10,md:"full"}} 
                        justifyContent={{base:'center',md:"flex-start"}}
                    >
                        <BiLogOut size={25}/>
                        <Button 
                        display={{base:'none',md:"block"}}
                        variant={'ghost'}
                        _hover={{bg:"transparent"}}
                        isLoading={isLoggingOut}
                        > Logout </Button>
                    </Flex>
                </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar