import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from "next/link";

export default function Navbar() {

  const address = useAddress();

  return (
    <Box maxW={"1980px"} m={"auto"} py={"10px"} px={"40px"} backgroundColor={"black"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Link as={NextLink} href="/">
          <Heading fontFamily={"cursive"} textColor={"white"} _hover={{color: "purple"  , opacity: "0.9"}}>MintMart</Heading>
        </Link>
        <Flex direction={"row"} padding={"30px"} gap={"50px"}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            <Text fontFamily={"cursive"} fontSize={"25px"} fontWeight={"bold"} textColor={"white"} _hover={{color: "purple"}}>Buy</Text>
          </Link>

          <Link as={NextLink} href="/sell" mx={2.5}>
            <Text fontFamily={"cursive"} fontSize={"25px"} fontWeight={"bold"} textColor={"white"} _hover={{color: "purple" }}>Sell</Text>
          </Link>
        </Flex>

        <Flex direction={"row"} alignItems={"center"}>
          <ConnectWallet/>

          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={"20px"}/>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
