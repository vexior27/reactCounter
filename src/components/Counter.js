
import React, {useState} from "react";
import {Text, Button, Container, NumberInput} from "@mantine/core"

export default function Counter() {
   return (
      <Container>
         <Text size="xl">React Counter</Text>
         <NumberInput 
            size="xl"
         />
         <Button
            size="xl"
         >Add
         </Button>
         <Button
            size="xl"
         >
            Minus
         </Button>
      </Container>
   )
}