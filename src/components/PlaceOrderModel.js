import { Button, Center, HStack, Modal, Text, VStack } from "native-base";
import React, { useState } from "react";
import Colors from "../../color";
import ButtonProp from "./ButtonProp";
import { useNavigation } from "@react-navigation/native";

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

const PlaceOrderModel = () => {
  const [showmodel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <Center>
      <ButtonProp
        onPress={() => {
          setShowModel(true);
        }}
        bg={Colors.black}
        color={Colors.white}
        mt={2}
      >
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Order");
                setShowModel(false);
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
