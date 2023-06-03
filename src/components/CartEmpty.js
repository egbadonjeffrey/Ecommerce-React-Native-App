import { Center, Box, Text } from "native-base";
import React from "react";
import Colors from "../../color";
import { MaterialIcons } from "@expo/vector-icons";
import ButtonProp from "./ButtonProp";

const CartEmpty = () => {
  return (
    <Box flex={1} p={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <MaterialIcons name="shopping-cart" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} fontSize={20} bold mt={5}>
          Cart is Empty
        </Text>
      </Center>
      <ButtonProp bg={Colors.black} color={Colors.white}>
        START SHOPPING
      </ButtonProp>
    </Box>
  );
};

export default CartEmpty;
