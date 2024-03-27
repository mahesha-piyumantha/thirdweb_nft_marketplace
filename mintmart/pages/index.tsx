import { NextPage } from "next";
import { Container, Flex, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* Add style to set background color of body */}
        <style>{`
          html, body, #__next {
            height: 100%;
            margin: 0;
            padding: 0;
            background: linear-gradient(45deg, black, indigo); 
          }
        `}</style>
      </Head>

      <Container maxW="1980px" maxH="1080px">
        <Flex
          height={"80vh"}
          alignItems={"center"}
          justifyContent={"start"}
          direction={"column"}
          pt={'200px'}
          gap={ "100px"}
        >
          <Heading fontFamily={"cursive"} textColor={"white"} fontSize={"65px"}>
            Collect your rare NFT digital art
          </Heading>
          <Button
            as={NextLink}
            href="/buy"
            fontFamily={"cursive"}
            fontWeight={"light"}
            fontSize={'20px'}
            backgroundColor={"purple"}
            textColor={"white"}
            height={"60px"}
            width={"200px"}
            _hover={{textColor : "purple" , backgroundColor : "white"}}
          >
            Shop NFTs
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
