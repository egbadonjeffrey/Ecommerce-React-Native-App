import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import Colors from "../../color";
// import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import ButtonProp from "../components/ButtonProp";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* HEADER */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY
      <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{ bg: Colors.main }}
            >
              $365
            </Button>
          </HStack>
        </Center>

        {/* Checkout */}

        <Center px={5} mb={10}>
          <ButtonProp
            onPress={() => navigation.navigate("Shipping")}
            bg={Colors.black}
            color={Colors.white}
            mt={10}
          >
            CHECKOUT
          </ButtonProp>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
