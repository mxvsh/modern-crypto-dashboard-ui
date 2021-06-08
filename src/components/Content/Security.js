import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";

export default () => {
  const Item = ({ title, subtitle, enabled }) => (
    <Flex p={4} borderWidth="1px" borderRadius="lg" alignItems="center">
      <Box textColor="gray">
        <Heading size="sm" fontWeight="semibold">
          {title}
        </Heading>
        <Text fontSize="xs">{subtitle}</Text>
      </Box>
      <Spacer />
      <Switch colorScheme="orange" defaultChecked={enabled} />
    </Flex>
  );

  return (
    <Box w="80%" float="right" mr={4}>
      <Flex fontWeight="semibold" fontSize="sm" textColor="gray.400">
        <Text>SECURITY</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          VIEW ALL
        </Text>
      </Flex>
      <Stack mt={4}>
        <Item title="Identify" subtitle="Disable" />
        <Item title="Phone" subtitle="Enable" enabled />
      </Stack>
    </Box>
  );
};
