import React, { useState } from "react";
import {
   Title,
   Button,
   Container,
   NumberInput,
   Flex,
   Stack,
   Center,
} from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";

export default function Counter() {

   const [counter, setCounter] = useState(0);

   const add = () => {
      setCounter(counter + 1);
   }

   const substract = () => {
      setCounter(counter - 1);
   }

   return (
      <Container>
         <Stack gap="xl">
            <Center>
               <Title order={1} c='blue'>React Counter</Title>
            </Center>
            <Center>
               <NumberInput size="xl" style={{ width: 200 }} value={counter} onChange={(e) => setCounter(e)}/>
            </Center>
            <Flex gap="md" justify="center" align="center" direction="row">
               <Button size="xl" onClick={() => add()}>
                  <IconPlus />
               </Button>
               <Button size="xl" onClick={() => substract()}>
                  <IconMinus />
               </Button>
               <Button size="xl" onClick={() => setCounter(0)}>
                  Reset
               </Button>
            </Flex>
         </Stack>
      </Container>
   );
}
