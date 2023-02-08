import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Image,
  Tabs,
} from "@chakra-ui/react";
import { FiMenu, FiBell } from "react-icons/fi";
import lang from "../assets/lang.svg";
import { AiFillCaretDown } from "react-icons/ai";
import avatar from "../assets/avatar.svg";
import champaign from "../assets/Champaign.svg";
import Product from "../assets/Product.svg";
import Customer from "../assets/Customers.svg";
import logo from "../assets/logo.svg";
import home from "../assets/house.svg";
import buy from "../assets/buy.svg"
const LinkItems = [
  { name: "Home", icon: home },
  { name: "", icon: champaign },
  { name: "", icon: Product },
  { name: "", icon: Customer },
];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w={"100%"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg=" #001738"
      color={"white"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "30%", md: 100 }}
      pos="fixed"
      left={0}
      h="full"
      {...rest}
    >
      <Flex
        w={"100%"}
        h={"5vh"}
        mt={"50%"}
        alignItems="center"
        justifyContent="center"
      >
        <Image h={"100%"} display={{ sm: "none", md: "block" }} src={logo} />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box mt={"90%"}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Stack
        align="center"
        p="4"
        alignItems={"center"}
        justifyContent={"center"}
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#1977f340",

          borderLeft: "10px solid #1977F3",
          color: "white",
        }}
        {...rest}
      >
        {icon && <Image objectFit={"contain"} src={icon} />}
        <Text fontFamily={"Eudoxus Sans"} fontSize={"10px"} fontWeight={400}>
          {children}
        </Text>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Image src={logo} />
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Box display={{ base: "none", md: "flex" }}>
          <Image src={buy} />
        </Box>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack color={"#1B3F67"}>
                <Avatar size={"md"} src={avatar} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Mukund cake shop</Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <AiFillCaretDown />
                </Box>
                <Box display={{ base: "none", md: "flex" }}>
                  <Image src={lang} />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
