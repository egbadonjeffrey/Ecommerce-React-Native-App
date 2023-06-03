import React from "react";
import {
  Text,
  Image,
  Box,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Colors from "../../color";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        resizeMode="cover"
        size="lg"
        alt="Logo"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt="6">
          {/* USERNAME */}
          <Input
            InputLeftElement={
              <AntDesign name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="John Doe"
            type="text"
            w="70%"
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />

          {/* EMAIL */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            type="text"
            w="70%"
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="**********"
            type="password"
            w="70%"
            pl="2"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          _text={Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
