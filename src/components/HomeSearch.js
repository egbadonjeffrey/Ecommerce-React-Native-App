import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../color";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Adidas ...."
        w="85%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={0}
        fontSize={15}
        variant="filled"
        _focus={{ bg: Colors.white }}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <MaterialIcons name="shopping-cart" size={30} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-3}
          right={0}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
