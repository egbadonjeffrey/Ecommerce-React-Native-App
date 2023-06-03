import React from "react";
import { Box, HStack, ScrollView, Text, Button } from "native-base";
import { Pressable } from "react-native";
import Colors from "../../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text isTruncated fontSize={10} color={Colors.blue}>
              84848884884884
            </Text>
            <Text isTruncated fontSize={13} color={Colors.black}>
              PAID
            </Text>
            <Text italic isTruncated fontSize={12} color={Colors.black}>
              Dec 20 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={15}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                color: Colors.main,
              }}
            >
              $500
            </Button>
          </HStack>
        </Pressable>

        {/* NOT PAID */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
            <Text isTruncated fontSize={10} color={Colors.blue}>
              84848884884884
            </Text>
            <Text isTruncated fontSize={13} color={Colors.black}>
              NOT PAID
            </Text>
            <Text italic isTruncated fontSize={12} color={Colors.black}>
              Jan 20 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={15}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                color: Colors.main,
              }}
            >
              $50
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
