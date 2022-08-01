import { Flex, Grid, Heading } from "@chakra-ui/react";
import MoonLoader from "react-spinners/MoonLoader";
import Card from "./Card";

import { useWorkPortfolios } from "~/contexts/users/professionals/work_portfolios/Context";
import { useQuery } from "react-query";

function Items(props) {
  const { getWorkPortfolios } = useWorkPortfolios();
  const { isLoading, data: portfolios } = useQuery("work_portfolios", getWorkPortfolios);

  return (isLoading ? 
    <Flex alignItems="center" h="50vh">
      <MoonLoader color="white"/> 
    </Flex>
    : <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {portfolios?.length ?
        portfolios.map((portfolio, idx) => (
          <Card
            key={idx} 
            {...props}
            portfolio={portfolio}
          />
        )) : (
          <Flex justify="center" w="100vw" mt={16}>
            <Heading size="md" ml={10}>
              No work portfolios yet
            </Heading>
          </Flex>
        )
      }
    </Grid>
  );
}

export default Items;
