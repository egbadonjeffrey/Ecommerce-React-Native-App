import { Box, Heading, ScrollView, View } from "native-base";
import React from "react";
import Colors from "../../color";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../components/OrderItem";
import OrderModel from "../components/OrderModel";

const OrderScreen = () => {
  return (
    <Box safeArea bg={Colors.subGreen} flex={1} pt={6}>
      <Box mx={2}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            success
            title="CUSTOMER"
            subTitle="Admin Doe"
            text="admin@example.come"
            icon={<FontAwesome5 name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            danger
            title="ORDER INFO"
            subTitle="Shipping: Nigeria"
            text="Pay Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address: "
            text="Along Boundary rd, Benin City, Edo State"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>

      {/* ORDER ITEM */}

      <Box px={6} flex={1} pb={3}>
        <Heading bold isTruncated fontSize={20} my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* TOTAL  */}
        <OrderModel />
      </Box>
    </Box>
  );
};

export default OrderScreen;
