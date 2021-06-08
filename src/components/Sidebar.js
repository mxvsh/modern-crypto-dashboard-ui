import { VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { RiHomeLine, RiPieChart2Fill, RiShareBoxFill } from "react-icons/ri";

export default () => {
  const Item = ({ icon, active }) => (
    <Box
      _hover={{ cursor: "pointer" }}
      p={4}
      borderRadius="md"
      bg={active ? "#FE8872" : "white"}
      textColor={active ? "white" : "gray"}
    >
      {icon}
    </Box>
  );
  return (
    <Box>
      <VStack>
        <Item active icon={<RiHomeLine />} />
        <Item icon={<RiShareBoxFill />} />
        <Item icon={<RiPieChart2Fill />} />
      </VStack>
    </Box>
  );
};
