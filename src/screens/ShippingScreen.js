import React from "react";
import {
  Box,
  Center,
  ScrollView,
  Text,
  VStack,
  FormControl,
  Input,
} from "native-base";
import Colors from "../../color";
import ButtonProp from "../components/ButtonProp";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];

const ShippingScreen = () => {
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
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((inputs, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                  key={index}
                >
                  {inputs.label}
                </FormControl.Label>
                <Input
                  borderWidth={1.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={inputs.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <ButtonProp
              onPress={() => navigation.navigate("Checkout")}
              bg={Colors.main}
              color={Colors.white}
            >
              CONTINUE
            </ButtonProp>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
