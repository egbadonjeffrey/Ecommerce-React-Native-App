import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Colors from "../../color";
import ButtonProp from "./ButtonProp";

const OrdersInfos = [
  {
    title: "Products",
    price: 125.77,
    color: Colors.black,
  },
  {
    title: "Shipping",
    price: 34.0,
    color: Colors.black,
  },
  {
    title: "Tax",
    price: 34.0,
    color: Colors.black,
  },
  {
    title: "Total Amount",
    price: 3400.0,
    color: Colors.main,
  },
];

const OrderModel = () => {
  const [showmodel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <Center>
      <ButtonProp
        onPress={() => {
          setShowModel(true);
        }}
        bg={Colors.main}
        color={Colors.white}
        mt={2}
      >
        SHOW PAYMENT & TOTAL
      </ButtonProp>
      <Modal isOpen={showmodel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order Info</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((orderInfo, index) => (
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  key={index}
                >
                  <Text fontWeight="medium">{orderInfo.title}</Text>
                  <Text color={orderInfo.color} bold fontSize={15}>
                    ${orderInfo.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={50}
                rounded={3}
                overflow="hidden"
              />
            </Pressable>

            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate("Home");
              }}
              _pressed={{
                bg: Colors.black,
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
