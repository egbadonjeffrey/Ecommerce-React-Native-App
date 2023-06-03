import React from "react";
import {
  ScrollView,
  Flex,
  Pressable,
  Image,
  Box,
  Heading,
  Text,
} from "native-base";
import products from "../data/Products";
import Colors from "../../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

const HomeProducts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() => navigation.navigate("Single", product)}
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} w="full" isTruncated>
                {product.name}
              </Text>
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
