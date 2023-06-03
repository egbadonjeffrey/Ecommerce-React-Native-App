import React from "react";
import {
  Box,
  Center,
  ScrollView,
  Text,
  VStack,
  Image,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../../color";
import ButtonProp from "../components/ButtonProp";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/discover.png"),
    alt: "discover",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/googlepay.png"),
    alt: "googlepay",
    icon: "FonAwesome",
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={20} bold>
          PAYMENT METHOD
        </Text>
      </Center>

      {/* INPUTS */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((methods, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={methods.image}
                    alt={methods.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                  <Spacer />
                </Box>
                {methods.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    color={Colors.main}
                    size={30}
                  />
                )}
              </HStack>
            ))}

            <ButtonProp
              onPress={() => navigation.navigate("PlaceOrder")}
              bg={Colors.main}
              color={Colors.white}
            >
              CONTINUE
            </ButtonProp>

            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
