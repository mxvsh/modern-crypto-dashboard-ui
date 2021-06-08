import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default ({ value, text }) => {
  return (
    <Box p={6} bg="#DBE3E5" borderRadius="3xl">
      <Heading fontWeight="light" fontSize="2xl">
        {value}
      </Heading>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};
