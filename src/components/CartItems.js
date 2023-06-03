import {
  Box,
  HStack,
  Image,
  Pressable,
  Center,
  VStack,
  Text,
  Button,
  ScrollView,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../../color";
import { FontAwesome } from "@expo/vector-icons";
import products from "../data/Products";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 3)}
    renderItem={renderItem}
    renderHiddenItem={HiddenItem}
    showsVerticalScrollIndicator={false}
  />
);

// Cart Item
const renderItem = (data) => (
  <ScrollView>
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.name}
              w="full"
              h={24}
            />
          </Center>
          <VStack w="60%" px={2}>
            <Text isTruncated color={Colors.black} bold fontSize={15}>
              {data.item.name}
            </Text>
            <Text color={Colors.lightBlack} bold>
              ${data.item.price}
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.main}
              _pressed={{ bg: Colors.main }}
              _text={{
                color: Colors.white,
              }}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  </ScrollView>
);

// Hidden
const HiddenItem = () => (
  <Pressable
    roundedTopRight={10}
    roundedBottomRight={10}
    w={50}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} colors={Colors.white} />
    </Center>
  </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartItems;
