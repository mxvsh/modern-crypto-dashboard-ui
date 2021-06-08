import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default ({ title, balance, balance2, income, expense }) => {
  return (
    <Box p={8} borderRadius="3xl" bg="#5D4E7B" textColor="white">
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
        BALANCE DETAILS
      </Text>
      <Heading mt={6}>$ 2,136,045.00</Heading>
      <Text fontSize="sm" textColor="gray.200" mt={1}>
        3.34105027 BTC
      </Text>
      <HStack mt={4}>
        <Box w="50%">
          <Heading size="sms">$3,256.00</Heading>
          <Text fontSize="xs">Income</Text>
        </Box>
        <Box w="50%">
          <Heading size="sms">$2,289.00</Heading>
          <Text fontSize="xs">Expense</Text>
        </Box>
      </HStack>

      {/* Buttons */}
      <HStack mt={4}>
        <Box w="50%">
          <Button w="full" textColor="#5D4E7B">
            RECEIVE
          </Button>
        </Box>
        <Box w="50%">
          <Button w="full" bg="#FE8872">
            SEND
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};
