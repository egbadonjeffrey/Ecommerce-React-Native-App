import { Box, Image, Center, VStack } from "native-base";
import React from "react";
import Colors from "../../color";
import ButtonProp from "../components/ButtonProp";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          alt="Logo"
          source={require("../../assets/favicon.png")}
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <ButtonProp bg={Colors.black} color={Colors.white}>
          REGISTER
        </ButtonProp>
        <ButtonProp bg={Colors.white} color={Colors.black}>
          LOGIN
        </ButtonProp>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
