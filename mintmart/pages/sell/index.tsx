import { Container , Flex , Heading , Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Sell: NextPage = () => {
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
          pt={"200px"}
          gap={"100px"}
        >
          <Heading fontFamily={"cursive"} textColor={"white"} fontSize={"65px"}>
           Sell
          </Heading>
          
        </Flex>
      </Container>
    </>
  );
  
};

export default Sell;
