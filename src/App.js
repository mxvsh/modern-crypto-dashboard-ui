import { IconButton } from "@chakra-ui/button";
import { SimpleGrid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiPlus } from "react-icons/fi";
import BigCard from "./components/Content/BigCard";
import Security from "./components/Content/Security";
import SmallCard from "./components/Content/SmallCard";
import Transactions from "./components/Content/Transactions";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wallets from "./components/Wallets";

function App() {
  return (
    <Box>
      <Header />
      <SimpleGrid columns={10} gap={3}>
        <GridItem colSpan={1}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={6}>
          <SimpleGrid columns={5} gap={8}>
            <GridItem colSpan={3}>
              <BigCard />
            </GridItem>
            <GridItem colSpan={2}>
              <Text
                fontWeight="semibold"
                fontSize="sm"
                textColor="gray"
                my={2}
                ml={8}
              >
                FEES
              </Text>
              <Stack spacing={4}>
                <SmallCard value="0.069%" text="MAKER" />
                <SmallCard value="0.069%" text="MAKER" />
              </Stack>
            </GridItem>
          </SimpleGrid>
        </GridItem>
        <GridItem colSpan={3}>
          <Wallets />
        </GridItem>
      </SimpleGrid>
      <SimpleGrid columns={10} gap={3} mt={12}>
        <GridItem colSpan={1}>
          <Center>
            <IconButton
              bg="#5C4E7A"
              textColor="white"
              position="fixed"
              bottom={12}
              size="lg"
              icon={<FiPlus />}
            />
          </Center>
        </GridItem>
        <GridItem colSpan={6}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={3}>
          <Security />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default App;
