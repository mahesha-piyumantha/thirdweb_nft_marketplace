import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="black" color="white" py={3.5}>
      <Flex direction="column" align="center">
        <Text fontSize="sm" fontFamily={"cursive"}>
          &copy; 2024 MintMart.Co. All rights reserved.
        </Text>
        <Text fontSize="sm" fontFamily={"cursive"}>
          Designed and developed by MintMart Dev
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
