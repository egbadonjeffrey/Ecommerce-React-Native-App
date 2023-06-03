import React, { useState } from "react";
import {
  Box,
  ScrollView,
  Image,
  Heading,
  HStack,
  Spacer,
  Text,
} from "native-base";
import Colors from "../../color";
import Rating from "../components/Rating";
import ButtonProp from "../components/ButtonProp";
import NumericInput from "react-native-numeric-input";
import Review from "../components/Review";
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;

  console.log(product);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Nike Four"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold onSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              onChange={handleValueChange}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading bold color={Colors.red} fontSize={15}>
              Out of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={15}>
          {product.description}
        </Text>
        <ButtonProp
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart", product)}
        >
          ADD TO CART
        </ButtonProp>

        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
