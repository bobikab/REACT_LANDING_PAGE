import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <VStack rounded="2xl" overflow={"hidden"} bg="white">
      <Image src={imageSrc} rounded="2xl" w="full" />
      <VStack px="5" spacing={5} py={5}>
        <Heading color="blackAlpha.900" alignSelf={"start"}>
          {title}
        </Heading>
        <Text color="blackAlpha.900">{description}</Text>
        <HStack
          color="blackAlpha.900"
          alignSelf={"start"}
          alignItems="center"
          spacing={2}
          fontWeight="semibold"
        >
          <span>See More</span>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />{" "}
        </HStack>
      </VStack>
    </VStack>
  ); 
};

export default Card;
