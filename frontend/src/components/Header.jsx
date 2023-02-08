import React from 'react'
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import add from "../assets/add-circle.svg";
export default function Header() {
  return (
    <Flex
    h="20vh"
    alignItems={"center"}
    justifyContent={"space-between"}
    w={"100%"}
  >
    <Box>
      <Heading fontWeight={700} fontSize={"24px"}>
        Your Campaigns
      </Heading>
      <Text
        lineHeight={"32px"}
        fontSize={"16px"}
        fontWeight={400}
        color={"rgba(0,0,0,0.5)"}
      >
        Check the list of campigns you created{" "}
      </Text>
    </Box>
    <Button
      h={"50px"}
      display={"flex"}
      alignItems={"center"}
      gap={"10px"}
      borderRadius={'xl'}
      bg={"#0F6EFF"}
      colorScheme={"#FFFFFF"}
    >
      {" "}
      <Image h="20px" src={add} />{" "}
      <Text fontWeight={500} fontSize={"16px"}>
        {" "}
        Create new campaign
      </Text>
    </Button>
  </Flex>
  )
}
